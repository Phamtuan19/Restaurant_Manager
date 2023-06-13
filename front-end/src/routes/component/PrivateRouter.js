import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '~/hook/useAuth';

function PrivateRouter({ children }) {
    const { userPermission, isAuthenticated } = useAuth();
    if (isAuthenticated && userPermission === 'Administration') {
        return children;
    }
    return <Navigate to="/" replace />;
}

export default PrivateRouter;
