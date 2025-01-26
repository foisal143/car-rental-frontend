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
    getAllUser: builder.query({
      query: () => ({
        url: `/users`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
    updateUser: builder.mutation({
      query: payload => ({
        url: `/users/${payload.email}`,
        method: 'PATCH',
        body: payload.userInfo,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useGetAllUserQuery,
} = userApis;
