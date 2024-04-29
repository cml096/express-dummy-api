import ServiceClient from './ServiceClient';
import {ServiceClientRequest} from '../types/ServiceClient';
import Environments from '../library/Environments';
import type {AstronomyPictureOfTheDayResponse} from '../types/NasaReponses';

export class NasaService {
  private static readonly baseURL = Environments.getNASABaseUrl();
  private static readonly apiKey = Environments.getNASAAPIKey();

  public static async getAstronomyPictureOfTheDay(): Promise<AstronomyPictureOfTheDayResponse> {
    const request: ServiceClientRequest = {
      method: 'get',
      uri: this.baseURL,
      queryParams: {
        api_key: this.apiKey
      }
    };
    return ServiceClient.request(request);
  }
}
