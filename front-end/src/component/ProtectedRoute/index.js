import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthInfo } from '~/redux/SliceReducer/AuthReducer';

const ProtectedRoute = ({ children }) => {
    const { userInfo } = useAuthInfo();

    if (userInfo.isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
