import { Outlet } from 'react-router-dom';
import Navbar from '../pages/sharedPages/Navbar/Navbar';
import Footer from '../pages/sharedPages/Footer/Footer';
import ScrollToTop from '../components/ScrollTop';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-100px)]">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
