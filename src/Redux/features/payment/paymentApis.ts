import baseApi from '../../api/baseApi';

const paymentApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    makePayment: builder.mutation({
      query: payload => ({
        url: `/payment/make-payment`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['booking'],
    }),
  }),
});

export const { useMakePaymentMutation } = paymentApi;
