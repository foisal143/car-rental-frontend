import { GiReturnArrow } from 'react-icons/gi';
import HeadingText from '../../../../components/utils/HeadingText';
import {
  useGetUserBookingsQuery,
  useReturnCarMutation,
} from '../../../../Redux/features/bookings/bookingsapis';
import { FaCcAmazonPay } from 'react-icons/fa';
import { TBooking } from '../../../../interface/bookings';
import NotFound from '../../../../components/NotFound';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const MyBookings = () => {
  const { data: bookingRes } = useGetUserBookingsQuery(undefined);
  const bookingData = bookingRes?.data;
  const [returnCar, { data: returnRes, error }] = useReturnCarMutation();
  const handlerReturnCar = (item: TBooking) => {
    const returnData = {
      bookingId: item._id,
      endTime: item.endTime,
    };
    returnCar(returnData);
  };

  useEffect(() => {
    if (returnRes?.success) {
      console.log(returnRes);
      toast.success(returnRes?.message);
    }
    if (!returnRes?.success && error) {
      console.log(error);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      toast.error(error?.data?.message);
    }
  }, [returnRes, error]);
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
                  <th>Status</th>
                  <th>Pay status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookingData &&
                  bookingData.map((item: TBooking) => (
                    <tr key={item?._id}>
                      <td>{item?.car?.name}</td>
                      <td>${item?.car?.pricePerHour}/h</td>
                      <td
                        className={`${
                          item.status === 'approved'
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {item?.status}
                      </td>
                      <td
                        className={`${
                          item.payStatus === 'paid'
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {item?.payStatus}
                      </td>
                      <td>
                        {item.payStatus === 'paid' ? (
                          <button
                            onClick={() => handlerReturnCar(item)}
                            title="Return Car"
                            className="bg-green-200 p-2 rounded-md"
                          >
                            <GiReturnArrow />
                          </button>
                        ) : (
                          <button
                            title="Please Pay"
                            className="bg-green-200 p-2 rounded-md"
                          >
                            <FaCcAmazonPay />
                          </button>
                        )}
                      </td>
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

export default MyBookings;
