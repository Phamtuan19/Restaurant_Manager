/* eslint-disable react-hooks/rules-of-hooks */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import setToastMessage from '~/Helpers/toastMessage';
import useLocalStorage from '~/hook/useLocalStorage';
import authService from '~/services/auth.service';

const { setLocalItem } = useLocalStorage();

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
        const res = await authService.getUser();
        setToastMessage({ message: 'Đăng xuất thành công', status: 'success' });
        return res;
    } catch (error) {
        console.log(error);
        setToastMessage({ message: 'Có lỗi sảy ra vui lòng thử lại!', status: 'error' });
        throw new Error();
    }
});

export const actionLogin = createAsyncThunk('auth/actionLogin', async (data, thunkAPI) => {
    const res = await authService.singupAccount(data);
    setToastMessage({ message: 'Đăng nhập thành công', status: 'success' });
    setLocalItem('token');
    console.log(res);
    return res;
});

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        userPermission: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actionGetCurrentUser.fulfilled, (state, payload) => {
                state.user = payload.user;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(actionGetCurrentUser.rejected, (state, payload) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
            })
            .addCase(actionLogout.fulfilled, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(actionLogin.fulfilled, (state, payload) => {
                state.user = payload.user;
                state.isAuthenticated = true;
                state.loading = false;
            });
    },
});

export default authReducer;
