// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from 'store'
import { setToken } from './reducer'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://vindev.cx.ua',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).user

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['charts', 'users'],
  endpoints: (builder) => ({
    getChartsData: builder.query({
      query: () => '/dashboard',
      providesTags: ['charts'],
    }),
    registration: builder.mutation({
      query: (body) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['users'],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['users'],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data && 'token' in data) {
          dispatch(setToken(data.token))
        }
      },
    }),
    authUser: builder.query({
      query: () => '/user',
      providesTags: ['users'],
    }),
  }),
})

export const {
  useGetChartsDataQuery,
  useLoginMutation,
  useRegistrationMutation,
  useAuthUserQuery,
} = apiSlice
