import type { Response } from 'express';
import type {JsonApiError, JsonApiResourceObject, JsonApiResponse, PaginationMeta} from '../types/JSONAPIResponses';

export enum HTTPStatus {
  OK = 200,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  UnsupportedMediaType = 415,
  InternalServerError = 500,
  ServiceUnavailable = 503,
}

const createJsonApiResponse = <T>(data?: JsonApiResourceObject<T> | Array<JsonApiResourceObject<T>>, errors?: JsonApiError[], meta?: PaginationMeta): JsonApiResponse<T> => ({
  data,
  errors,
  meta,
});

export const ok = <T>(res: Response, data?: JsonApiResourceObject<T> | Array<JsonApiResourceObject<T>>, meta?: PaginationMeta) => {
  const response = createJsonApiResponse(data, undefined, meta);
  res.status(HTTPStatus.OK).json(response);
};

export const noContent = (res: Response) => {
  res.status(HTTPStatus.NoContent).send();
};

export const badRequest = (res: Response, errors?: JsonApiError[], meta?: PaginationMeta) => {
  const response = createJsonApiResponse(undefined, errors, meta);
  res.status(HTTPStatus.BadRequest).json(response);
};

export const unauthorized = (res: Response, errors?: JsonApiError[], meta?: PaginationMeta) => {
  const response = createJsonApiResponse(undefined, errors, meta);
  res.status(HTTPStatus.Unauthorized).json(response);
};

export const notFound = (res: Response, errors?: JsonApiError[], meta?: PaginationMeta) => {
  const response = createJsonApiResponse(undefined, errors, meta);
  res.status(HTTPStatus.NotFound).json(response);
};

export const unsupportedMediaType = (res: Response, errors?: JsonApiError[], meta?: PaginationMeta) => {
  const response = createJsonApiResponse(undefined, errors, meta);
  res.status(HTTPStatus.UnsupportedMediaType).json(response);
};

export const internalServerError = (res: Response, errors?: JsonApiError[], meta?: PaginationMeta) => {
  const response = createJsonApiResponse(undefined, errors, meta);
  res.status(HTTPStatus.InternalServerError).json(response);
};

export const serviceUnavailable = (res: Response, errors?: JsonApiError[], meta?: PaginationMeta) => {
  const response = createJsonApiResponse(undefined, errors, meta);
  res.status(HTTPStatus.ServiceUnavailable).json(response);
};


// Custom Errors
const createErrorResponse = (res: Response, status: number, title: string, detail: string, source?: { pointer?: string; parameter?: string }) => {
  const error: JsonApiError = { status: status.toString(), title, detail, source };
  const response = createJsonApiResponse(undefined, [error]);
  res.status(status).json(response);
};

export const customError = (res: Response, status: number, title: string, detail: string, source?: { pointer?: string; parameter?: string }) => {
  createErrorResponse(res, status, title, detail, source);
};