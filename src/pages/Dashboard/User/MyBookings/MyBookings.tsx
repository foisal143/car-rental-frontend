import { GiReturnArrow } from 'react-icons/gi';
import HeadingText from '../../../../components/utils/HeadingText';
import { useGetUserBookingsQuery } from '../../../../Redux/features/bookings/bookingsapis';
import { FaCcAmazonPay } from 'react-icons/fa';

const MyBookings = () => {
  const { data: bookingRes } = useGetUserBookingsQuery(undefined);
  const bookingData = bookingRes?.data;

  return (
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
              bookingData.map(item => (
                <tr key={item._id}>
                  <td>{item?.car?.name}</td>
                  <td>{item?.car?.price}</td>
                  <td>{item?.status}</td>
                  <td>{item?.payStatus}</td>
                  <td>
                    {item.payStatus === 'paid' ? (
                      <button
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
  );
};

export default MyBookings;
