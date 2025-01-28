import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks/hooks';
import { Navigate } from 'react-router-dom';
import { logout } from '../../Redux/features/auth/authSlice';

const UserRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(state => state.driveSecuireAuth.user);
  const dispatch = useAppDispatch();
  if (user.role !== 'user') {
    dispatch(logout());
  }
  if (user && user.role === 'user') {
    return children;
  }
  return <Navigate to="/login" />;
};

export default UserRoute;
