import HistoryCard from '../../../../components/dashboard/user/HistoryCard';
import ProfileInfo from '../../../../components/dashboard/user/ProfileInfo';

const UserHome = () => {
  return (
    <div className=" lg:flex w-full  justify-center ">
      <div className="lg:flex-1">
        <div className="grid p-5 grid-cols-1 md:grid-cols-3 gap-5">
          <HistoryCard count={10} text="Total booked" />
          <HistoryCard count={20} text="Total pay" />
          <HistoryCard count={50} text="Available cars" />
        </div>
      </div>
      <ProfileInfo />
    </div>
  );
};

export default UserHome;
