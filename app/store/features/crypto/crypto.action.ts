import {createAsyncThunk} from '@reduxjs/toolkit';
import {CryptoServices, IGetListCoinRequest} from '@services/index';
import {RootState} from '@store/store';
import {ICoinReducers} from './crypto.interface';

export const GetCoinList = createAsyncThunk<
  ICoinReducers,
  IGetListCoinRequest,
  {state: RootState; rejectValue: any}
>('crypto/getCoinList', async (params, thunkApi) => {
  try {
    const response = await CryptoServices.GetCoinList(params);
    return {params: params, response: response.data} as ICoinReducers;
  } catch (err: any) {
    console.log(err);
    return thunkApi.rejectWithValue(err);
  }
});
