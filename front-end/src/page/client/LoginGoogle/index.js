/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthInfo } from '~/redux/SliceReducer/AuthReducer';

import useAuth from '~/services/auth.service';

function LoginGoogle() {
    const location = useLocation();
    const navigate = useNavigate();

    const { loginGoogleCallback } = useAuth();
    const { setUserInfoLogin } = useAuthInfo();

    useEffect(() => {
        const resultGoogleCallbackApi = async () => {
            const response = await loginGoogleCallback(location.search);
            setUserInfoLogin(response);
            navigate('/login');
        };

        resultGoogleCallbackApi();
    }, []);

    return <React.Fragment></React.Fragment>;
}

export default LoginGoogle;
