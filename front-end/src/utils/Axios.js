import axios from 'axios';
import withAuthToken from './Middleware';

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

            // console.log(requestConfig);
            return requestConfig;
        },
        async (requestError) => {
            return Promise.reject(requestError);
        },
    );

    instance.interceptors.response.use(
        async (response) => {
            if (response && response.data) {
                if (response?.data?.message) {
                    console.log(response.data.message);
                }
                return response.data;
            } else {
                return response;
            }
        },
        async (responseError) => {
            return Promise.reject(responseError);
        },
    );

    return instance;
};

export default createInstance;
