import { delay } from '@hicommonwealth/shared';
import { config } from '../config';
import { logger, rollbar } from '../logging';
import { ExitCode } from './enums';
import { inMemoryBlobStorage } from './in-memory-blob-storage';
import { successfulInMemoryBroker } from './in-memory-brokers';
import {
  AdapterFactory,
  Analytics,
  BlobStorage,
  Broker,
  Cache,
  Disposable,
  Disposer,
  IdentifyUserOptions,
  NotificationsProvider,
  NotificationsProviderSchedulesReturn,
  Stats,
} from './interfaces';

const log = logger(import.meta);

/**
 * Map of disposable adapter instances
 */
const adapters = new Map<string, Disposable>();

/**
 * Maps ports to default adapters aka factory names to adapter keys or names
 */
const defaultAdapters = new Map<string, string>();

const InvalidKey = (key: string) => new Error(`Invalid adapter key: ${key}`);

/**
 * Wraps creation of adapters around factory functions
 * @param factory adapter of T factory function
 * @returns adapter instance
 */
export function port<T extends Disposable>(factory: AdapterFactory<T>) {
  return function (
    options?:
      | {
          key: `${string}.${string}.${string}`;
        }
      | {
          key?: `${string}.${string}.${string}`;
          adapter: any;
          isDefault: boolean;
        },
  ) {
    // If no option use default adapter or set in-memory adapter as default
    if (!options) {
      const defaultAdapterKey = defaultAdapters.get(factory.name);
      if (defaultAdapterKey) return adapters.get(defaultAdapterKey) as T;

      const adapterInstance = factory();
      log.info(`[binding default adapter] ${adapterInstance.name}`);
      defaultAdapters.set(factory.name, adapterInstance.name);
      adapters.set(adapterInstance.name, adapterInstance);
      return adapterInstance as T;
    }

    // validate key at runtime to prevent confusing keys e.g.
    // key = 'S3' for R2 adapter
    if ('key' in options && options.key) {
      const parts = options.key.split('.');
      if (parts.length !== 3) throw InvalidKey(options.key);
      if (parts[0] !== factory.name) throw InvalidKey(options.key);
      if ('adapter' in options && parts[1] !== options.adapter.name)
        throw InvalidKey(options.key);
    }

    // if only the key is given then return associated adapter or throw
    if ('key' in options && !('adapter' in options)) {
      const adapterInstance = adapters.get(options.key);
      if (!adapterInstance)
        throw new Error(`Adapter ${options.key} not found!`);
      return adapterInstance as T;
    }

    // adapter is provided
    let adapterKey: string | undefined;
    if ('key' in options && options.key) {
      const existingAdapter = adapters.get(options.key);
      if (existingAdapter) {
        log.warn(`Adapter with ${options.key} already exists`);
        return existingAdapter as T;
      }
      adapterKey = options.key;
    }

    const adapterInstance = factory(options.adapter);
    if (!adapterKey) adapterKey = adapterInstance.name;
    // overrides any in-memory default that is already set
    if (options.isDefault) {
      defaultAdapters.set(factory.name, adapterKey);
      log.info(`[binding default adapter] ${adapterKey}`);
    } else log.info(`[binding adapter] ${adapterKey}`);

    adapters.set(adapterKey, adapterInstance);
    return adapterInstance as T;
  };
}

/**
 * Register of resource disposers on exit
 */
const disposers: Disposer[] = [];

/**
 * Internal disposer and process killer
 * @param code exit code, defaults to unit testing
 * @param forceExit Forces exit in production if set to true
 */
const disposeAndExit = async (
  code: ExitCode = 'UNIT_TEST',
  forceExit: boolean = false,
): Promise<void> => {
  // don't kill process when errors are caught in production
  if (code === 'ERROR' && config.NODE_ENV === 'production') {
    if (forceExit) await delay(1_000);
    else return;
  }

  // call disposers
  await Promise.all(disposers.map((disposer) => disposer()));
  await Promise.all(
    [...adapters].reverse().map(async ([key, adapter]) => {
      log.info(`[disposing adapter] ${adapter.name || key}`);
      await adapter.dispose();
    }),
  );
  adapters.clear();

  if (config.NODE_ENV !== 'test' && code !== 'UNIT_TEST') {
    rollbar.wait(() => {
      log.info('Rollbar logs flushed');
      // eslint-disable-next-line n/no-process-exit
      process.exit(code === 'ERROR' ? 1 : 0);
    });
  }
};

export const disposeAdapter = (name: string): void => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  adapters.get(name)?.dispose();
  adapters.delete(name);
  adapters.clear();
};

/**
 * Registers resource disposers that get triggered on process exits
 * @param disposer the disposer function
 * @returns a function that triggers all registered disposers and terminates the process
 */
export const dispose = (disposer?: Disposer): typeof disposeAndExit => {
  disposer && disposers.push(disposer);
  return disposeAndExit;
};

/**
 * Handlers to dispose registered resources on exit or unhandled exceptions
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
process.once('SIGINT', async (arg?: any) => {
  log.info(`SIGINT ${arg !== 'SIGINT' ? arg : ''}`);
  await disposeAndExit('EXIT');
});
// eslint-disable-next-line @typescript-eslint/no-misused-promises
process.once('SIGTERM', async (arg?: any) => {
  log.info(`SIGTERM ${arg !== 'SIGTERM' ? arg : ''}`);
  await disposeAndExit('EXIT');
});
// eslint-disable-next-line @typescript-eslint/no-misused-promises
process.once('uncaughtException', async (arg?: any) => {
  log.error('Uncaught Exception', arg);
  await disposeAndExit('ERROR');
});
// eslint-disable-next-line @typescript-eslint/no-misused-promises
process.once('unhandledRejection', async (arg?: any) => {
  log.error('Unhandled Rejection', arg);
  await disposeAndExit('ERROR');
});

/**
 * Stats port factory
 */
export const stats = port(function stats(stats?: Stats) {
  return (
    stats || {
      name: 'in-memory-stats',
      dispose: () => Promise.resolve(),
      histogram: (key, value, tags) => {
        log.trace('stats.histogram', { key, value, tags });
      },
      set: () => {},
      increment: (key, tags) => {
        log.trace('stats.increment', { key, tags });
      },
      incrementBy: (key, value, tags) => {
        log.trace('stats.incrementBy', { key, value, tags });
      },
      decrement: (key, tags) => {
        log.trace('stats.decrement', { key, tags });
      },
      decrementBy: (key, value, tags) => {
        log.trace('stats.decrementBy', { key, value, tags });
      },
      on: (key) => {
        log.trace('stats.on', { key });
      },
      off: (key) => {
        log.trace('stats.off', { key });
      },
      gauge: (key, value) => {
        log.trace('stats.gauge', { key, value });
      },
      timing: (key, duration, time) => {
        log.trace('stats.timing', { key, duration, time });
      },
    }
  );
});

/**
 * Cache port factory
 */
export const cache = port(function cache(cache?: Cache) {
  return (
    cache || {
      name: 'in-memory-cache',
      dispose: () => Promise.resolve(),
      ready: () => Promise.resolve(true),
      isReady: () => true,
      getKey: () => Promise.resolve(''),
      setKey: () => Promise.resolve(false),
      getKeys: () => Promise.resolve(false),
      setKeys: () => Promise.resolve(false),
      getNamespaceKeys: () => Promise.resolve(false),
      deleteKey: () => Promise.resolve(0),
      deleteNamespaceKeys: () => Promise.resolve(0),
      flushAll: () => Promise.resolve(),
      incrementKey: () => Promise.resolve(0),
      decrementKey: () => Promise.resolve(0),
      getKeyTTL: () => Promise.resolve(0),
      setKeyTTL: () => Promise.resolve(false),
    }
  );
});

/**
 * Analytics port factory
 */
export const analytics = port(function analytics(analytics?: Analytics) {
  return (
    analytics || {
      name: 'in-memory-analytics',
      dispose: () => Promise.resolve(),
      track: (event, payload) => {
        log.trace('analytics.track', { event, payload });
      },
    }
  );
});

/**
 * Broker port factory
 */
export const broker = port(function broker(broker?: Broker) {
  return broker || successfulInMemoryBroker;
});

/**
 * External blob storage port factory
 */
export const blobStorage = port(function blobStorage(
  // eslint-disable-next-line @typescript-eslint/no-shadow
  blobStorage?: BlobStorage,
) {
  return blobStorage || inMemoryBlobStorage;
});

/**
 * Notifications provider port factory
 */
export const notificationsProvider = port(function notificationsProvider(
  // eslint-disable-next-line @typescript-eslint/no-shadow
  notificationsProvider?: NotificationsProvider,
) {
  return (
    notificationsProvider || {
      name: 'in-memory-notifications-provider',
      dispose: () => Promise.resolve(),
      triggerWorkflow: () => Promise.resolve([]),
      getMessages: () => Promise.resolve([]),
      getSchedules: () =>
        Promise.resolve([] as NotificationsProviderSchedulesReturn),
      createSchedules: () =>
        Promise.resolve([] as NotificationsProviderSchedulesReturn),
      deleteSchedules: ({ schedule_ids }) =>
        Promise.resolve(new Set(schedule_ids)),
      identifyUser: (options: IdentifyUserOptions) =>
        Promise.resolve({ id: options.user_id }),
      registerClientRegistrationToken: () => Promise.resolve(false),
      unregisterClientRegistrationToken: () => Promise.resolve(false),
    }
  );
});
