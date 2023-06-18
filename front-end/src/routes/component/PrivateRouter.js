import { Navigate } from 'react-router-dom';
import { ROLE } from '~/configs/roles';
import useAuth from '~/hook/useAuth';

function PrivateRouter({ children }) {
    const { userPermission, isAuthenticated } = useAuth();
    if (isAuthenticated && userPermission === ROLE[1]) {
        return children;
    }
    return <Navigate to="/login" replace />;
}

export default PrivateRouter;
