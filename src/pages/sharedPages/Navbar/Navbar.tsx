/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../../../components/container/Container';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useAppSelector } from '../../../Redux/hooks/hooks';
import { useGetSingleUserQuery } from '../../../Redux/features/user/userApis';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Redux/features/auth/authSlice';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const paths = ['/'];
  const { pathname } = useLocation();
  const reduxUser = useAppSelector(state => state.driveSecuireAuth.user);
  const { data } = useGetSingleUserQuery(reduxUser?.email);
  const user = data?.data;

  // @ts-ignore

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed  w-full top-0 font-heading  z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : `${
              paths.includes(pathname) ? 'bg-transparent ' : 'bg-white border-b'
            }`
      } `}
    >
      <Container>
        <div className="flex px-5 relative h-20 justify-between items-center gap-10">
          <div>
            <Link className="flex items-center gap-2" to="/">
              <img
                className="w-14 h-14 rounded-full"
                src="/public/drivesecuire-logo.png"
                alt="logo"
              />{' '}
              <h3 className="text-3xl font-bold">DriveSecuire</h3>
            </Link>
          </div>
          <div
            className={`bg-white ${
              !toggleMenu
                ? 'lg:left-0 -left-[1250px]'
                : 'left-0 lg:-left-[1250px]'
            } lg:relative lg:top-0 absolute top-20 transition-all duration-300 rounded-md lg:bg-transparent p-5 lg:p-0 lg:w-fit lg:text-inherit w-full text-center text-black`}
          >
            <ul className="lg:flex font-semibold space-y-5 lg:space-y-0  items-center navlink gap-5">
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/services'}>Cars</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact Us</NavLink>
              </li>

              {reduxUser?.email ? (
                <>
                  <li>
                    <NavLink
                      to={
                        // @ts-ignore
                        user?.role === 'user'
                          ? '/dashboard/user-home'
                          : '/dashboard/admin-home'
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="lg:hidden">
                  <NavLink to={'/login'}>Login</NavLink>
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="w-fit lg:hidden cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? (
                <FaXmark className="text-3xl" />
              ) : (
                <FaBars className="text-3xl" />
              )}
            </button>
            {reduxUser?.email ? (
              <div className="w-fit relative ">
                <img
                  onClick={() => setSideMenu(!sideMenu)}
                  className="w-12 cursor-pointer h-12 rounded-full"
                  src={user?.image}
                  alt=""
                />
                <div
                  className={`absolute  ${
                    sideMenu ? 'block' : 'hidden'
                  } top-16 w-52 bg-white shadow -left-20 p-5 rounded-md`}
                >
                  <div>
                    <ul className="text-center text-xl space-y-4">
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      <li>
                        <button
                          onClick={() => dispatch(logout())}
                          className=" py-2 px-5 rounded-md border"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="font-semibold hidden lg:flex items-center gap-5">
                {' '}
                <Link className="font-semibold" to="/login">
                  Login
                </Link>
                <Link className="btn-primary" to="/register">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
