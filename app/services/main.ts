import {create} from 'apisauce';

export const api = create({baseURL: 'https://api.coincap.io'});
export const wsData = create({
  baseURL: 'wss://ws.coincap.io/',
});
