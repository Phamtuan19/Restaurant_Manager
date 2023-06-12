import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from '~/hook/useAuth';
import routeAdmin from '~/routes/admin.route';

function LayoutAdmin() {
    const { user, isAuthenticated } = useAuth();

    if (user.role === 'Administration' && isAuthenticated) {
        return (
            <Routes>
                {routeAdmin.map((route, index) => {
                    const Component = route.component;
                    return <Route key={index} path={route.path} element={<Component />} />;
                })}
            </Routes>
        );
    }

    return <Navigate to="/" replace />;
}

export default LayoutAdmin;
