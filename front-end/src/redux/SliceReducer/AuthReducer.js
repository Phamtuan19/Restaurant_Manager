/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from 'react-redux';
import setToastMessage from '~/Helpers/toastMessage';
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
            removeLocalItem('user');
        }
    }
    return false;
};

const initialState = {
    isAuthenticated: getLocalItem('token') ? true : false,
    user: getLocalItem('user') || null,
    isExpiresToken: checkTimeOut(),
    role: getLocalItem('user')?.role || 'Member',
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAcountGoogle: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            console.log(action.payload.user);
            state.role = action?.payload?.user?.role;
        },
        logoutAccount: (state, action) => {
            state.isAuthenticated = action?.payload?.isAuthenticated || null;
            state.user = null;
        },
    },
});

const { loginAcountGoogle, logoutAccount } = authReducer.actions;

export const useAuthReducer = () => {
    const dispatch = useDispatch();

    const userInfo = useSelector((state) => state.auth);

    const setUserInfoLogin = (payload) => {
        if (payload?.status === 200) {
            try {
                if (payload.token && payload.user) {
                    setLocalItem('token', payload.token);
                    setLocalItem('user', payload.user);
                    setToastMessage('Đăng nhập thành công', 'success');

                    dispatch(loginAcountGoogle(payload));
                } else {
                    setToastMessage('Đẵ có lỗi xảy ra!', 'error');
                }
            } catch (error) {
                setToastMessage('Đẵ có lỗi xảy ra vui lòng kiểm tra lại!', 'error');
            }
        }
    };

    const setlogoutAccount = (payload) => {
        if (payload?.status === 200) {
            try {
                dispatch(logoutAccount(payload));
                removeLocalItem('token');
                removeLocalItem('user');
                setToastMessage('Đăng xuất thành công', 'success');
            } catch (error) {
                setToastMessage('Đẵ có lỗi xảy ra vui lòng kiểm tra lại!', 'error');
            }
        }
    };

    return { userInfo, setUserInfoLogin, setlogoutAccount };
};

export default authReducer;
