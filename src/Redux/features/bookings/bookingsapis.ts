import baseApi from '../../api/baseApi';

const bookingApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllbookings: builder.query({
      query: () => ({
        url: `/bookings`,
        method: 'GET',
      }),
      providesTags: ['booking'],
    }),
    createBookings: builder.mutation({
      query: bookingInfo => ({
        url: `/bookings`,
        method: 'POST',
        body: bookingInfo,
      }),
      invalidatesTags: ['booking'],
    }),
    getUserBookings: builder.query({
      query: () => ({
        url: `/bookings/my-bookings`,
        method: 'GET',
      }),
      providesTags: ['booking'],
    }),
    returnCar: builder.mutation({
      query: returnInfo => ({
        url: `/bookings/return`,
        method: 'PUT',
        body: returnInfo,
      }),
      invalidatesTags: ['booking'],
    }),
  }),
});

export const {
  useGetAllbookingsQuery,
  useCreateBookingsMutation,
  useGetUserBookingsQuery,
  useReturnCarMutation,
} = bookingApis;
