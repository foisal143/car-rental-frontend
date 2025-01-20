import HistoryCard from '../../../../components/dashboard/user/HistoryCard';
import HistoryChart from '../../../../components/dashboard/user/HistoryChart';
import ProfileInfo from '../../../../components/dashboard/user/ProfileInfo';
import { TBooking } from '../../../../interface/bookings';
import { TCar } from '../../../../interface/cars';
import { useGetUserBookingsQuery } from '../../../../Redux/features/bookings/bookingsapis';
import { useGetCarsQuery } from '../../../../Redux/features/car/carApis';
import { formatLength } from '../../../../utils/formateLength';

const UserHome = () => {
  const data = [
    {
      name: 'Total Booked',
      uv: 400,
      pv: 10,
      amt: 10,
    },
    {
      name: 'Total Pay',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Available cars',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  const { data: bookingRes } = useGetUserBookingsQuery(undefined);
  const totalBooking = bookingRes?.data;
  const paidBooking = totalBooking?.filter(
    (item: TBooking) => item.payStatus === 'paid'
  );
  const { data: carsRes } = useGetCarsQuery({});
  const totalCars = carsRes?.data?.filter(
    (car: TCar) => car.status === 'available'
  );

  return (
    <div className=" lg:flex w-full  justify-center ">
      <div className="lg:flex-1">
        <div className="grid p-5 grid-cols-1 md:grid-cols-3 gap-5">
          <HistoryCard
            count={
              totalBooking?.length ? formatLength(totalBooking?.length) : 0
            }
            text="Total booked"
          />
          <HistoryCard
            count={paidBooking?.length ? formatLength(paidBooking?.length) : 0}
            text="Total pay"
          />
          <HistoryCard
            count={totalCars?.length ? formatLength(totalCars?.length) : 0}
            text="Available cars"
          />
        </div>
        <div className="w-full  h-[500px]">
          <HistoryChart data={data} />
        </div>
      </div>
      <div className="lg:w-1/3">
        <ProfileInfo />
      </div>
    </div>
  );
};

export default UserHome;
