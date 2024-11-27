import baseApi from '../../api/baseApi';

const userApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSingleUser: builder.query({
      query: email => ({
        url: `/users/${email}`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
  }),
});

export const { useGetSingleUserQuery } = userApis;
