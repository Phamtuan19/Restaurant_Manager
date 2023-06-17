import axios from 'axios';
import withAuthToken from './Middleware';
import setToastMessage from '~/Helpers/toastMessage';
import httpStatusCode from '~/configs/httpStatusCode';
import authService, { authEndpoint } from '~/services/auth.service';

// const excludeAuthenApi = [];

const createInstance = (baseURL) => {
    const options = {
        baseURL: baseURL,
    };

    const instance = axios.create(options);

    instance.interceptors.request.use(
        async (requestConfig) => {
            withAuthToken(requestConfig);
            return requestConfig;
        },
        async (requestError) => {
            return Promise.reject(requestError);
        },
    );

    instance.interceptors.response.use(
        (response) => {
            if (response.data) {
                return response.data;
            } else {
                return response;
            }
        },
        async (error) => {
            const originalRequest = error.config;
            const { url } = originalRequest;
            // Kiểm tra xem lỗi có phải do token hết hạn hay không
            if (
                httpStatusCode.UNAUTHORIZED === error?.response?.status &&
                url !== authEndpoint.base + authEndpoint.refestToken &&
                url !== authEndpoint.base + authEndpoint.loginAccount &&
                !originalRequest._retry
            ) {
                // originalRequest._retry = true;
                // try {
                //     await authService.refeshToken();
                //     // Gửi lại request đã bị gián đoạn với token mới
                //     return instance(originalRequest);
                // } catch (error) {
                //     return Promise.reject(error);
                // }

                setToastMessage('Quá thời gian, Vui lòng đăng nhập lại!', 'error');
                localStorage.removeItem('accessToken');
            }

            const errorMessage = error.response.data.message || 'Đã có lỗi xảy ra!';
            setToastMessage(errorMessage, 'error');
            return Promise.reject(error);
        },
    );

    return instance;
};

export default createInstance;
