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
