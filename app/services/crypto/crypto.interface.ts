import {ICryptoModel} from '@models/Crypto';

export interface IGetListCoinRequest {
  search?: string;
  limit?: number;
  offset?: number;
}

export interface IGetListCoinResponse {
  data: ICryptoModel[];
  timestamp: string;
}

export interface IGetCoinByIdRequest {
  id: string;
}
export interface IGetCoinByIdResponse {
  data: ICryptoModel;
  timestamp: string;
}
