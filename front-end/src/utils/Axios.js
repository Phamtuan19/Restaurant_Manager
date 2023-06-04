import axios from 'axios';
import withAuthToken from './Middleware';
import setToastMessage from '~/Helpers/toastMessage';

// const excludeAuthenApi = [];

const createInstance = (baseURL) => {
    const options = {
        baseURL: baseURL,
        // headers: {
        //     accept: 'application/json',
        // },
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
            if (response && response.data) {
                return {
                    ...response.data,
                    status: response.status,
                };
            } else {
                return {
                    ...response,
                    status: response.status,
                };
            }
        },
        async (err) => {
            try {
                if (err.response) setToastMessage(err.response.data.message || 'đã có lỗi xảy ra!', 'error');
                console.log(err.response);
            } catch (e) {
                return Promise.reject(e);
            }
        },
    );

    return instance;
};

export default createInstance;
