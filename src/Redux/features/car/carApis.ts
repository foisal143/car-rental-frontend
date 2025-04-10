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
    createCar: builder.mutation({
      query: carsInfo => ({
        url: `/cars`,
        method: 'POST',
        body: carsInfo,
      }),
      invalidatesTags: ['cars'],
    }),
  }),
});

export const { useGetCarsQuery, useCreateCarMutation } = carApis;
