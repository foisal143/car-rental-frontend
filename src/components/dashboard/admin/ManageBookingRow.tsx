import { TBooking } from '../../../interface/bookings';

const ManageBookingRow = ({ booking }: { booking: TBooking }) => {
  return (
    <tr>
      <td>{booking?.car?.name}</td>
      <td
        className={`${
          booking.status === 'approved' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {booking?.status}
      </td>
      <td
        className={`${
          booking.payStatus === 'paid' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {booking?.payStatus}
      </td>
      <td>{booking?.startTime}</td>
      <td>{booking?.endTime}</td>
      <td className="text-primary">${booking?.totalCost}</td>
      <td>
        <button>details</button>
      </td>
    </tr>
  );
};

export default ManageBookingRow;
