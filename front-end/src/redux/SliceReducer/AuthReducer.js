/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from '~/hook/useLocalStorage';

const { createSlice } = require('@reduxjs/toolkit');

const { getLocalItem, setLocalItem, removeLocalItem } = useLocalStorage();

const checkTimeOut = () => {
    const expires = getLocalItem('token')?.expires;
    const currentTime = new Date();
    if (expires) {
        const targetTime = new Date(expires);
        const isCheck = targetTime > currentTime ? true : false;
        if (!isCheck) {
            removeLocalItem('token');
        }
    }
    return false;
};

const initialState = {
    isAuthenticated: getLocalItem('token') ? true : false,
    user: getLocalItem('user'),
    isExpiresToken: checkTimeOut(),
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAcountGoogle: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        logoutAccount: (state, action) => {
            console.log(action);
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = null;
        },
    },
});

const { loginAcountGoogle, logoutAccount } = authReducer.actions;

export const useAuthInfo = () => {
    const dispatch = useDispatch();

    const userInfo = useSelector((state) => state.auth);

    const setUserInfoLogin = (payload) => {
        dispatch(loginAcountGoogle(payload));
        payload.token ? setLocalItem('token', payload.token) : console.error('----- Token không tồn tại');
        payload.user ? setLocalItem('user', payload.user) : console.error('----- User không tồn tại');
    };

    const setIsAuthenticated = (payload) => {
        dispatch(logoutAccount(payload));
    };

    return { userInfo, setUserInfoLogin, setIsAuthenticated };
};

export default authReducer;
