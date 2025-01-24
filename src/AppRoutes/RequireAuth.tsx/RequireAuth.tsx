import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@features/themes';
import { ReactNode } from 'react';

type RequireAuthProps = {
  children: ReactNode;
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login2" state={{ path: location.pathname }} />;
  }
  return children;
};
