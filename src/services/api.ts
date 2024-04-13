import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import servicesConstants, { IUser } from './constants'

const { reducerPath, baseUrl, register } = servicesConstants;

export const authApi = createApi({
  reducerPath: reducerPath,
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body: IUser) => ({
        method: 'POST',
        url: register,
        body: body
      })
    })
  })
});

export const {
  useRegisterMutation
} = authApi;