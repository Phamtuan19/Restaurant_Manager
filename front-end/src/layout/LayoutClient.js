import { Route, Routes } from 'react-router-dom';
import routeClient from '../routes/RouteClient';

function LayoutClient() {
    return (
        <Routes>
            {routeClient.map((route, index) => {
                const Component = route.component;

                return <Route key={index} path={route.path} element={<Component />} />;
            })}
        </Routes>
    );
}

export default LayoutClient;
