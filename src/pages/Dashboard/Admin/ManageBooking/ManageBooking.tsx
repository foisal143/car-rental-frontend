import ManageBookingRow from '../../../../components/dashboard/admin/ManageBookingRow';
import HeadingText from '../../../../components/utils/HeadingText';
import { TBooking } from '../../../../interface/bookings';
import { useGetAllbookingsQuery } from '../../../../Redux/features/bookings/bookingsapis';

const ManageBooking = () => {
  const { data: bookingRes } = useGetAllbookingsQuery(undefined);
  const bookingData = bookingRes?.data;

  return (
    <div className="p-5">
      <HeadingText text="Manage Bookings" />
      <div className="overflow-x-auto mt-5 font-text">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Pay Status</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookingData &&
              bookingData.length > 0 &&
              bookingData.map((booking: TBooking) => (
                <ManageBookingRow key={booking._id} booking={booking} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
