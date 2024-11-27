import baseApi from '../../api/baseApi';

const carApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: userInfo => ({
        url: `/auth/signin`,
        method: 'POST',
        body: userInfo,
      }),
    }),
    createUser: builder.mutation({
      query: userInfo => ({
        url: `/auth/signup`,
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useCreateUserMutation } = carApis;
