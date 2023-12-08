import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_URL = 'https://my-json-server.typicode.com/irinakhudieva/db.json/cosmetics'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getCosmetics: builder.query({
            query: (args) => {
                const { category, sort, order, searchValue} = args;
                return {
                    url: `${category}&_sort=${sort}&_order=${order}&q=${searchValue}`
                }
            }
        }),
        getCosmeticsById: builder.query({
            query: (id) => `/${id}`
        }),
   
    })  
})

export const { useGetCosmeticsQuery, useGetCosmeticsByIdQuery } = api;

