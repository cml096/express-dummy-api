export type HTTPMethod = 'get' | 'delete' | 'patch' | 'post' | 'put';

export interface ServiceClientRequest {
    method: HTTPMethod;
    uri: string;
    body?: { [key: string]: string | number | boolean };
    queryParams?: { [key: string]: string | number };
    headers?: { [header: string]: string };
    resolveWithFullResponse?: boolean;
    timeout?: number;
}