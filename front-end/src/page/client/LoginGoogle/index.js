/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthReducer } from '~/redux/SliceReducer/authReducer';
import authService from '~/services/auth.service';

function LoginGoogle() {
    const location = useLocation();
    const navigate = useNavigate();

    const { setUserInfoLogin } = useAuthReducer();

    useEffect(() => {
        const resultGoogleCallbackApi = async () => {
            console.log(location.search);
            const response = await authService.loginGoogleCallback(location.search);
            setUserInfoLogin(response);
            navigate('/login');
        };

        resultGoogleCallbackApi();
    }, []);

    return <React.Fragment></React.Fragment>;
}

export default LoginGoogle;
