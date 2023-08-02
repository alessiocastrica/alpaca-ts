import type { ApiRequestOptions } from "./ApiRequestOptions";
import { BaseHttpRequest } from "./BaseHttpRequest";
import type { CancelablePromise } from "./CancelablePromise";
import type { OpenAPIConfig } from "../Client";
import { request as __request } from "./request";

export class AxiosHttpRequest extends BaseHttpRequest {
  constructor(config: OpenAPIConfig) {
    super(config);
  }

  /**
   * Request method
   * @param options The request options from the service
   * @returns CancelablePromise<T>
   * @throws ApiError
   */
  public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    return __request(this.config, options);
  }
}