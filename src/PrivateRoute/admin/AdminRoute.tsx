import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks/hooks';
import { logout } from '../../Redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(state => state.driveSecuireAuth.user);
  const dispatch = useAppDispatch();
  if (user.role !== 'admin') {
    dispatch(logout());
  }
  if (user && user.role === 'admin') {
    return children;
  }
  return <Navigate to="/login" />;
};

export default AdminRoute;
