import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '4385c232e3mshe2f905e93f49c34p1e0152jsn556bfd9e9118'
   
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
       getCryptos: builder.query({
           query: () => createRequest ('/coins')
       })
   }) 
});

 export const {
     useGetCryptosQuery,
 } = cryptoApi;

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