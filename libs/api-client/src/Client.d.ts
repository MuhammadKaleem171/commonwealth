/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { Comment } from './api/resources/comment/client/Client';
import { Community } from './api/resources/community/client/Client';
import { Reaction } from './api/resources/reaction/client/Client';
import { Thread } from './api/resources/thread/client/Client';
import { User } from './api/resources/user/client/Client';
import * as core from './core';
import * as environments from './environments';
export declare namespace CommonApiClient {
  interface Options {
    environment?: core.Supplier<environments.CommonApiEnvironment | string>;
    apiKey: core.Supplier<string>;
    /** Override the address header */
    address?: core.Supplier<string | undefined>;
  }
  interface RequestOptions {
    /** The maximum time to wait for a response in seconds. */
    timeoutInSeconds?: number;
    /** The number of times to retry the request. Defaults to 2. */
    maxRetries?: number;
    /** A hook to abort the request. */
    abortSignal?: AbortSignal;
    /** Override the address header */
    address?: string | undefined;
  }
}
export declare class CommonApiClient {
  protected readonly _options: CommonApiClient.Options;
  constructor(_options: CommonApiClient.Options);
  protected _user: User | undefined;
  get user(): User;
  protected _community: Community | undefined;
  get community(): Community;
  protected _comment: Comment | undefined;
  get comment(): Comment;
  protected _thread: Thread | undefined;
  get thread(): Thread;
  protected _reaction: Reaction | undefined;
  get reaction(): Reaction;
}
