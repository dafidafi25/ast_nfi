import {ICryptoModel} from '@models/Crypto';
import {IGetListCoinRequest, IGetListCoinResponse} from '@services/index';

export interface ICryptoState {
  savedIds: string[];
  allIds: string[];
  byIds: Record<number, ICryptoModel>;
  offset: number;
  search: string;
}

export interface ICoinReducers {
  params: Partial<IGetListCoinRequest>;
  response: IGetListCoinResponse;
}
