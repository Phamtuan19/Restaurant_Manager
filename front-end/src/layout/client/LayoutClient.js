/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import routeClient from '../../routes/client.route';
import useAuth from '~/hook/useAuth';
import { useEffect } from 'react';

function LayoutClient() {
    const { getUser } = useAuth();

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Routes>
            {routeClient.map((route, index) => {
                const Component = route.component;

                if (route?.gurad) {
                    const ComponentGurad = route.gurad;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <ComponentGurad>
                                    <Component />
                                </ComponentGurad>
                            }
                        />
                    );
                }
                return <Route key={index} path={route.path} element={<Component />} />;
            })}
        </Routes>
    );
}

export default LayoutClient;
