import type {Request, Response} from 'express';
import * as ApiResponse from '../utils/apiResponses';
import {NasaService} from '../services/NasaService';
import type {AstronomyPictureOfTheDayResponse} from '../types/NasaReponses';
import type {JsonApiResourceObject} from '../types/JSONAPIResponses';

export async function get(_req: Request, res: Response) {
  const data = await NasaService.getAstronomyPictureOfTheDay();

  const formattedData: JsonApiResourceObject<AstronomyPictureOfTheDayResponse> = {
    type: 'nasa',
    id: data.date,
    attributes: data,
  };

  return ApiResponse.ok(res, formattedData);
}