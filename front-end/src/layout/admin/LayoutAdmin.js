import { Route, Routes } from 'react-router-dom';
import routeAdmin from '~/routes/admin.route';
import PrivateRouter from '~/routes/component/PrivateRouter';
import DefaultLayoutAdmin from './component/DefaultLayoutAdmin';

function LayoutAdmin() {
    return (
        <Routes>
            {routeAdmin.map((route, index) => {
                const Component = route.component;

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <PrivateRouter>
                                <DefaultLayoutAdmin>
                                    <Component />
                                </DefaultLayoutAdmin>
                            </PrivateRouter>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default LayoutAdmin;
