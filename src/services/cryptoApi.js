import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-key': '4385c232e3mshe2f905e93f49c34p1e0152jsn556bfd9e9118',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;


{/*
var options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/exchanges',
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '4385c232e3mshe2f905e93f49c34p1e0152jsn556bfd9e9118'
    }
  };
*/}