import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from '../Redux/hooks/hooks';
import { FaBars } from 'react-icons/fa';

const DashboardLayouts = () => {
  const user = useAppSelector(state => state.driveSecuireAuth.user);
  const userLinks = (
    <>
      <li>
        <NavLink to="/dashboard/user-home">User Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-bookings">My Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/pay-history">Payment History</NavLink>
      </li>
      <li>
        <NavLink to="/services">Let book a car</NavLink>
      </li>
      <li>
        <NavLink to="/about">Explore us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact us</NavLink>
      </li>
    </>
  );
  const adminLinks = (
    <>
      <li>
        <NavLink to="/dashboard/admin-home">Admin Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-cars">Manage Cars</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-bookings">Manage Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
      </li>
    </>
  );
  return (
    <>
      {' '}
      <div className=" px-5 py-3 text-white bg-primary flex justify-between items-center w-full h-full drawer-button lg:hidden">
        {' '}
        <div className="flex items-center gap-2">
          {' '}
          <img
            className="w-14 h-14 rounded-full"
            src="/public/drivesecuire-logo.png"
            alt="logo"
          />{' '}
          <h3 className="text-3xl font-bold">DriveSecuire</h3>
        </div>
        <label htmlFor="my-drawer-2" className="text-3xl">
          {' '}
          <FaBars />
        </label>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content ">
          <div>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="  menu font-text bg-primary text-white min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="mb-4">
              <Link className="flex items-center gap-2" to="/">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/public/drivesecuire-logo.png"
                  alt="logo"
                />{' '}
                <h3 className="text-3xl font-bold">DriveSecuire</h3>
              </Link>
            </li>
            {user?.role === 'user' ? userLinks : adminLinks}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayouts;
