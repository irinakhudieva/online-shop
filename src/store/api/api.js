import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_URL = 'http://localhost:4200/tea'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getTea: builder.query({
            query: (args) => {
                const { category, sort, order, page, limit, searchValue} = args;
                return {
                    url: `${category}&_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}&q=${searchValue}`
                }
            }
        }),
        getTeaById: builder.query({
            query: (id) => `/${id}`
        }),
   
    })  
})

export const { useGetTeaQuery, useGetTeaByIdQuery } = api;


// query: (categoryIndex, sortType) => `${categoryIndex !== 0 ? `?category=${categoryIndex}` : '?_category=0'}&_sort=${sortType}&_order=des`
// `${categoryIndex ? `?category=${categoryIndex}` : ''}&_sort=${sortProperty}&_order=des`