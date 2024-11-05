export declare const makeRequest: (
  fetchFn: (url: string, init: RequestInit) => Promise<Response>,
  url: string,
  method: string,
  headers: Record<string, string>,
  requestBody: BodyInit | undefined,
  timeoutMs?: number | undefined,
  abortSignal?: AbortSignal | undefined,
  withCredentials?: boolean | undefined,
  duplex?: 'half' | undefined,
) => Promise<Response>;
