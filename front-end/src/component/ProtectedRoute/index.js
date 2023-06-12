import { Navigate } from 'react-router-dom';
import useAuth from '~/hook/useAuth';

const ProtectedRoute = ({ children }) => {
    const { user, isAuthenticated } = useAuth();

    console.log(isAuthenticated);

    if (isAuthenticated) {
        if (user.role === 'Administration') {
            return <Navigate to="/admin/products/create" replace />;
        }

        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
