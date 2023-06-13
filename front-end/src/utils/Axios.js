import axios from 'axios';
import withAuthToken from './Middleware';
import setToastMessage from '~/Helpers/toastMessage';

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
        async (response) => {
            if (response.data) {
                return { ...response.data };
            } else {
                return response;
            }
        },
        async (error) => {
            try {
                if (error.response) setToastMessage(error.response.data.message || 'đã có lỗi xảy ra!', 'error');
            } catch (e) {
                return Promise.reject(e);
            }
        },
    );

    return instance;
};

export default createInstance;
