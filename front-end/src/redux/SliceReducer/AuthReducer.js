/* eslint-disable react-hooks/rules-of-hooks */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import setToastMessage from '~/Helpers/toastMessage';
import useLocalStorage from '~/hook/useLocalStorage';
import authService from '~/services/auth.service';

const { setLocalItem, removeLocalItem } = useLocalStorage();

export const actionGetCurrentUser = createAsyncThunk('auth/actionGetCurrentUser', async (action, payload) => {
    const { getLocalItem } = useLocalStorage();
    const token = getLocalItem('token');
    if (token) {
        const user = await authService.getUser();
        return user;
    } else {
        throw new Error();
    }
});

export const actionLogout = createAsyncThunk('auth/actionLogout', async (action, payload) => {
    try {
        await authService.logoutAccount();
        setToastMessage('Đăng xuất thành công', 'success');
        removeLocalItem('token');
    } catch (error) {
        console.log(error);
        setToastMessage('Có lỗi sảy ra vui lòng thử lại!', 'error');
        throw new Error();
    }
});

export const actionLogin = createAsyncThunk('auth/actionLogin', async (data, thunkAPI) => {
    try {
        const res = await authService.loginAccount(data);
        setToastMessage('Đăng nhập thành công', 'success');
        setLocalItem('token', res?.token?.access_token);
        return res;
    } catch (error) {
        console.log(error);
        setToastMessage('Có lỗi sảy ra vui lòng thử lại!', 'error');
        throw new Error();
    }
});

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        userPermission: null,
        isInitialized: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actionGetCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.userPermission = action.payload.data.roles.name;
                state.isAuthenticated = true;
                state.isInitialized = true;
            })
            .addCase(actionGetCurrentUser.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                state.userPermission = null;
                state.isInitialized = true;
            })
            .addCase(actionLogout.fulfilled, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                state.userPermission = null;
            })
            .addCase(actionLogin.fulfilled, (state, action) => {
                console.log(action);
                state.user = action.payload.user;
                state.userPermission = action.payload.user.roles.name;
                state.isAuthenticated = true;
                state.isInitialized = true;
            });
    },
});

export default authReducer;
