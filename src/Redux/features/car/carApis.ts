import baseApi from '../../api/baseApi';

const carApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCars: builder.query({
      query: params => ({
        url: `/cars`,
        method: 'GET',
        params: { searchTerm: params.searchTerm },
      }),
      providesTags: ['cars'],
    }),
  }),
});

export const { useGetCarsQuery } = carApis;
