import { Navigate } from 'react-router-dom';
import { useAuthReducer } from '~/redux/SliceReducer/authReducer';

const ProtectedRoute = ({ children }) => {
    const { userInfo } = useAuthReducer();

    if (userInfo.isAuthenticated) {
        if (userInfo.role === 'Administration') {
            return <Navigate to="/admin/products/create" replace />;
        }

        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
