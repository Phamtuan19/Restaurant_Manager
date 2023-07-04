import { Navigate, Outlet } from 'react-router-dom';
import { ROLE } from '~/configs/roles';
import useAuth from '~/hooks/useAuth';

function PrivateRouter({ children }) {
   const { userPermission, isAuthenticated } = useAuth();
   if (isAuthenticated && userPermission === ROLE[1]) {
      return children;
   }
   return <Navigate to="/" replace />;
}

export default PrivateRouter;
