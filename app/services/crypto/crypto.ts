import {api} from '@services/main';
import {ApiResponse} from 'apisauce';
import {
  IGetCoinByIdRequest,
  IGetCoinByIdResponse,
  IGetListCoinRequest,
  IGetListCoinResponse,
} from './crypto.interface';

export class CryptoServices {
  static async GetCoinList(
    params?: Partial<IGetListCoinRequest>,
  ): Promise<ApiResponse<IGetListCoinResponse>> {
    const response = await api.get<IGetListCoinResponse>('/v2/assets', params);

    if (!response.ok) return Promise.reject(response);
    if (!response.status) return Promise.reject(response);
    if (response.status < 200 || response.status >= 300)
      return Promise.reject(response);
    return response;
  }

  static async GetCoinById(
    params?: Partial<IGetCoinByIdRequest>,
  ): Promise<ApiResponse<IGetCoinByIdResponse>> {
    const response = await api.get<IGetCoinByIdResponse>(
      `/v2/assets/${params?.id}`,
    );

    if (!response.ok) return Promise.reject(response);
    if (!response.status) return Promise.reject(response);
    if (response.status < 200 || response.status >= 300)
      return Promise.reject(response);
    return response;
  }
}

export default CryptoServices;
