import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

const baseApi = createApi({
  reducerPath: 'driveSecuire',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://drive-secuire-server.vercel.app/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).driveSecuireAuth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  endpoints: () => ({}),

  tagTypes: ['cars', 'user', 'booking'],
});

export default baseApi;
