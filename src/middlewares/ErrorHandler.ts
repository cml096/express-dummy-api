import { Request, Response, NextFunction } from 'express';
import * as ApiResponse from '../utils/apiResponses';
import { ApiError } from '../types/APIResponses';
import {HTTPStatus} from "../utils/apiResponses";

/**
 * Error handling middleware to capture all thrown errors within the API.
 * Sends error responses formatted according to the JSON:API standard.
 */
const ErrorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  console.error(`[Error] ${req.method} ${req.url}`, err);

  // Check if the response has already been sent
  if (res.headersSent) {
    return next(err);
  }

  const status = err?.status || HTTPStatus.InternalServerError;
  const errors = [{
    status: status.toString(),
    title: err?.title || 'Internal Server Error',
    detail: err?.detail || 'An unexpected error occurred.'
  }];

  switch (status) {
  case HTTPStatus.BadRequest:
    ApiResponse.badRequest(res, errors);
    break;
  case HTTPStatus.Unauthorized:
    ApiResponse.unauthorized(res, errors);
    break;
  case HTTPStatus.NotFound:
    ApiResponse.notFound(res, errors);
    break;
  case HTTPStatus.InternalServerError:
  default:
    ApiResponse.internalServerError(res, errors);
    break;
  }
};

export default ErrorHandler;
