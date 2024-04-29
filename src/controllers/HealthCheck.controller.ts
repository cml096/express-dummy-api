import type {Request, Response} from 'express';
import { ok } from '../utils/apiResponses';
import type {JsonApiResourceObject} from '../types/JSONAPIResponses';

export async function get(_req: Request, res: Response) {
  const response: JsonApiResourceObject<{ name: string }> = {
    id: '123',
    type: 'healthcheck',
    attributes: {
      name: 'Everything Okay'
    }
  };

  ok(res, response);
}