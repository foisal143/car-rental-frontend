import NotFound from '../../../../components/NotFound';
import HeadingText from '../../../../components/utils/HeadingText';
import { useGetUserBookingsQuery } from '../../../../Redux/features/bookings/bookingsapis';
import { TBooking } from '../../../../interface/bookings';
import moment from 'moment';

const PaymentHistory = () => {
  const { data: bookingRes } = useGetUserBookingsQuery(undefined);
  const bookingData = bookingRes?.data;

  return (
    <div>
      {bookingData && bookingData?.length > 0 ? (
        <div className="p-5">
          <HeadingText text="My Bookings" />
          <div className="overflow-x-auto mt-5">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Tranjaction Id</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookingData &&
                  bookingData.map((item: TBooking) => (
                    <tr key={item?._id}>
                      <td>{item?.car?.name}</td>
                      <td>${item?.car?.pricePerHour}/h</td>
                      <td className={`text-green-500`}>
                        {item?.tranjactionId}
                      </td>
                      <td>{moment(item?.date).format('L')}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <NotFound text="Booking not found" />
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
