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
    updateCar: builder.mutation({
      query: payload => ({
        url: `/cars/${payload?.id}`,
        method: 'PUT',
        body: payload.carInfo,
      }),
      invalidatesTags: ['cars'],
    }),
    deleteCar: builder.mutation({
      query: id => ({
        url: `/cars/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cars'],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useCreateCarMutation,
  useDeleteCarMutation,
  useUpdateCarMutation,
} = carApis;
