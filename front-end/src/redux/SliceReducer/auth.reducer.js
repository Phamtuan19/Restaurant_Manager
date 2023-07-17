/* eslint-disable react-hooks/rules-of-hooks */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import setToastMessage from '~/Helpers/toastMessage';
import useLocalStorage from '~/hooks/useLocalStorage';
import authService from '~/services/auth.service';

const { setLocalItem, removeLocalItem } = useLocalStorage();

export const actionGetCurrentUser = createAsyncThunk('auth/actionGetCurrentUser', async (payload, thunkAPI) => {
   const { getLocalItem } = useLocalStorage();
   const accessToken = getLocalItem('accessToken');
   if (accessToken) {
      try {
         const res = await authService.getUser();
         return res;
      } catch (error) {
         console.log(error);
         return thunkAPI.rejectWithValue('API request failed');
      }
   } else {
      throw new Error();
   }
});

export const actionLogout = createAsyncThunk('auth/actionLogout', async (payload, thunkAPI) => {
   try {
      await authService.logoutAccount();
      setToastMessage('Đăng xuất thành công', 'success');
      removeLocalItem('accessToken');
   } catch (error) {
      console.log(error);
      setToastMessage('Có lỗi sảy ra vui lòng thử lại!', 'error');
      return thunkAPI.rejectWithValue('API request failed');
   }
});

export const actionLogin = createAsyncThunk('auth/actionLogin', async (data, thunkAPI) => {
   try {
      const res = await authService.loginAccount(data);
      setToastMessage('Đăng nhập thành công', 'success');
      setLocalItem('accessToken', res.token);
      setLocalItem('refreshToken', res.refreshToken);
      console.log(res);
      return res.user;
   } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('API request failed');
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
            const { role_id, ...user } = action.payload.data;
            const { createdAt, updatedAt, __v, password, ...data } = user;

            state.user = data;
            state.userPermission = role_id.name;
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
            const { role_id, ...user } = action.payload;
            state.user = user;
            state.userPermission = role_id.name;
            state.isAuthenticated = true;
            state.isInitialized = true;
         })
         .addCase(actionLogin.rejected, (state, action) => {
            state.isInitialized = true;
         });
   },
});

export default authReducer;
