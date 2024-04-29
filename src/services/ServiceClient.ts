import rp, { RequestPromiseOptions } from 'request-promise-native';
import type {ServiceClientRequest} from '../types/ServiceClient';

export default class ServiceClient {
  /**
     * Make an HTTP service integration request to another API.
     */
  public static async request({
    method,
    uri,
    body,
    queryParams,
    headers,
    resolveWithFullResponse = false,
    timeout = 15000,
  }: ServiceClientRequest) {
    const options: RequestPromiseOptions = {
      method,
      body,
      qs: queryParams,
      headers,
      json: true, // Automatically parses the JSON string in the response
      resolveWithFullResponse,
      timeout,
    };

    try {
      return rp(uri, options);
    } catch (error) {
      // Log the error or handle it as needed
      console.error('Request failed:', error);
      throw error;
    }
  }
}
