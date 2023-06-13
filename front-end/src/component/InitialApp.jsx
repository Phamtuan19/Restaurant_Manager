/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useAuth from '~/hook/useAuth';

function InitialApp({ children }) {
    const { getUser } = useAuth();
    useEffect(() => {
        getUser();
    }, []);
    return children;
}

export default InitialApp;
