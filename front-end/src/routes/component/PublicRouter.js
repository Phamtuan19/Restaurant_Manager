import { Navigate } from 'react-router-dom';
import useAuth from '~/hook/useAuth';

function PublicRouter({ children }) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PublicRouter;
