import {createSlice} from '@reduxjs/toolkit';
import {ICryptoState} from './crypto.interface';
import {GetCoinList} from './crypto.action';

export const initialCryptoState: ICryptoState = {
  savedIds: [],
  allIds: [],
  byIds: {},
  offset: 0,
  search: '',
};

export const Crypto = createSlice({
  name: 'crypto',
  initialState: initialCryptoState,
  reducers: {
    addId: (state, action) => {
      const {id} = action.payload;
      if (!state.savedIds.includes(id)) {
        state.savedIds.push(id);
      }
    },
    removeId: (state, action) => {
      const {id} = action.payload;
      state.savedIds = state.savedIds.filter(item => item !== id);
    },
  },
  extraReducers: builder => {
    builder.addCase(GetCoinList.fulfilled, (state, action) => {
      const {offset, search} = action.payload.params;
      const {data} = action.payload.response;

      if (offset === 0) state.allIds = [];

      for (let coin of data) {
        state.byIds[coin.id] = coin;

        // check if id already exist
        if (!state.allIds.includes(coin.id)) {
          state.allIds.push(coin.id);
        }
      }
      state.offset = Number(offset);
      if (search) state.search = search;
    });
  },
});

export const {addId, removeId} = Crypto.actions;

export default Crypto.reducer;
