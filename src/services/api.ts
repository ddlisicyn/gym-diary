import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import servicesConstants, { IMe, IUser } from './constants';

const { reducerPath, baseUrl, register, me } = servicesConstants;

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
    }),
    me: builder.query<IMe, void>({
      query: () => ({
        url: me,
        prepareHeaders: (headers: Headers) => {
            const accessToken = localStorage.getItem('Token');
        
            if (accessToken) {
              headers.set('Authorization', `Bearer ${accessToken}`);
            }
        
            headers.set('Accept', 'application/json')
            headers.set('Cache-Control', 'no-cache')
            headers.set('Pragma', 'no-cache')
            headers.set('Expires', '0')
        
            return headers
        }
      })
    }),
  })
});

export const {
  useRegisterMutation,
  useMeQuery
} = authApi;