import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Services from '../pages/Services/Services';
import CarsDetails from '../pages/CarsDetails/CarsDetails';
import CheckoutPage from '../pages/CheckOut/CheckoutPage';
import DashboardLayouts from '../layouts/DashboardLayouts';
import UserHome from '../pages/Dashboard/User/UserHome/UserHome';
import MyBookings from '../pages/Dashboard/User/MyBookings/MyBookings';
import PaymentHistory from '../pages/Dashboard/User/PaymentHistory/PaymentHistory';
import ErrorPage from '../components/Error/ErrorPage';
import EditProfile from '../pages/Dashboard/User/EditProfile/EditProfile';
import AdminHome from '../pages/Dashboard/Admin/AdminHome/AdminHome';
import ManageUser from '../pages/Dashboard/Admin/ManageUser/ManageUser';
import ManageBooking from '../pages/Dashboard/Admin/ManageBooking/ManageBooking';
import ManageCars from '../pages/Dashboard/Admin/ManageCars/ManageCars';
import AddCar from '../pages/Dashboard/Admin/AddCar/AddCar';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },

      {
        path: '/services/cars/:id',
        element: <CarsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/cars/${params.id}`),
      },
      {
        path: '/checkout/:id',
        element: <CheckoutPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/cars/${params.id}`),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <DashboardLayouts />,
    children: [
      {
        path: '/dashboard/user-home',
        element: <UserHome />,
      },
      {
        path: '/dashboard/my-bookings',
        element: <MyBookings />,
      },
      {
        path: '/dashboard/pay-history',
        element: <PaymentHistory />,
      },
      {
        path: '/dashboard/user-home/edit',
        element: <EditProfile />,
      },
      // admin routes
      {
        path: '/dashboard/admin-home',
        element: <AdminHome />,
      },
      {
        path: '/dashboard/manage-users',
        element: <ManageUser />,
      },
      {
        path: '/dashboard/manage-bookings',
        element: <ManageBooking />,
      },
      {
        path: '/dashboard/manage-cars',
        element: <ManageCars />,
      },
      {
        path: '/dashboard/add-car',
        element: <AddCar />,
      },
    ],
  },
]);

export default route;
