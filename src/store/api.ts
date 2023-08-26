// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://vindev.cx.ua' }),
  tagTypes: ['charts'],
  endpoints: (builder) => ({
    getChartsData: builder.query({
      query: () => '/dashboard',
      providesTags: ['charts'],
    }),
  }),
})

export const { useGetChartsDataQuery } = apiSlice
