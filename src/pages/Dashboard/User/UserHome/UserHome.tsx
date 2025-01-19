import HistoryCard from '../../../../components/dashboard/user/HistoryCard';
import HistoryChart from '../../../../components/dashboard/user/HistoryChart';
import ProfileInfo from '../../../../components/dashboard/user/ProfileInfo';

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
  return (
    <div className=" lg:flex w-full  justify-center ">
      <div className="lg:flex-1">
        <div className="grid p-5 grid-cols-1 md:grid-cols-3 gap-5">
          <HistoryCard count={10} text="Total booked" />
          <HistoryCard count={20} text="Total pay" />
          <HistoryCard count={50} text="Available cars" />
        </div>
        <div className="w-full  h-[500px]">
          <HistoryChart data={data} />
        </div>
      </div>
      <ProfileInfo />
    </div>
  );
};

export default UserHome;
