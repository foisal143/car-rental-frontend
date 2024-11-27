import baseApi from '../../api/baseApi';

const carApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCars: builder.query({
      query: () => `/cars`,
    }),
  }),
});

export const { useGetCarsQuery } = carApis;
