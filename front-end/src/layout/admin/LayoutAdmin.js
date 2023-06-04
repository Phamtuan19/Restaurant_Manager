import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthReducer } from '~/redux/SliceReducer/authReducer';
import routeAdmin from '~/routes/routeAdmin';

function LayoutAdmin() {
    const { userInfo } = useAuthReducer();

    if (userInfo.role === 'Administration' && userInfo.isAuthenticated) {
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
