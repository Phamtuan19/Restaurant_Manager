import { Route, Routes } from 'react-router-dom';
import routeAdmin from '~/routes/routeAdmin';

function LayoutAdmin() {
    return (
        <Routes>
            {routeAdmin.map((route, index) => {
                const Component = route.component;
                return <Route key={index} path={route.path} element={<Component />} />;
            })}
        </Routes>
    );
}

export default LayoutAdmin;
