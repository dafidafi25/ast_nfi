import {api} from '@services/main';
import {ApiResponse} from 'apisauce';
import {IGetListCoinRequest, IGetListCoinResponse} from './crypto.interface';

export class CryptoServices {
  static async createProduct(
    params: IGetListCoinRequest,
  ): Promise<ApiResponse<IGetListCoinResponse>> {
    const response = await api.post<IGetListCoinResponse>('/v2/assets', params);

    if (!response.ok) return Promise.reject(response);
    return response;
  }
}

export default CryptoServices;
