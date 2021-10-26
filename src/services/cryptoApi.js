import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a33ef7bf89mshd1cdc0e911818fap1f2d40jsna4d412ecbaf9'
}
const baseUrl='https://coinranking1.p.rapidapi.com/stats';
const createRequest =(url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest('/coins')
        })
    })
})
export const {
    useGetCryptosQuery,
}=cryptoApi;
  