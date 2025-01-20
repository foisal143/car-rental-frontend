import moment from 'moment';
import { useGetSingleUserQuery } from '../../../Redux/features/user/userApis';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks/hooks';
import { logout } from '../../../Redux/features/auth/authSlice';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ProfileInfo = () => {
  const userLoacl = useAppSelector(state => state.driveSecuireAuth.user);
  const userRes = useGetSingleUserQuery(userLoacl.email);
  const user = userRes?.data?.data;
  const { image, name, role, address, phone, email, createdAt, updatedAt } =
    user || {};
  const userLogedIn = moment(createdAt).format('MMMM Do YYYY');
  const userUpdated = moment(updatedAt).format('MMMM Do YYYY');
  const dispatch = useAppDispatch();
  return (
    <div className=" lg:w-1/3 gap-10 border p-5 shadow-md min-h-screen justify-center ">
      <div className=" mx-auto w-[200px] h-[200px] overflow-hidden rounded-full bg-primary p-1">
        <img
          className="w-full rounded-full  mx-auto h-full"
          src={image}
          alt=""
        />
      </div>
      <div className=" mt-5 text-center space-y-2 font-text">
        <h3>
          <strong>Name:</strong> {name}
        </h3>
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Registered At:</strong> {userLogedIn}
        </p>
        <p>
          <strong>Last Updated At:</strong> {userUpdated}
        </p>
        <p className="flex justify-center gap-3 pt-3 items-center">
          <button onClick={() => dispatch(logout())} className="btn-primary ">
            Logout
          </button>{' '}
          <Link to={`/dashboard/user-home/edit`}>
            <button className="flex items-center btn-secondary">
              <FaEdit /> Edit
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
