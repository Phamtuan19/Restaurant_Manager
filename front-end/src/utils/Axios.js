const { default: axios } = require('axios');

const createInstance = (baseUrl) => {
    const options = {
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    };

    const instance = axios.create(options);

    instance.interceptors.request.use(
        async (requestConfig) => {
            return requestConfig;
        },
        async (requestError) => {
            return Promise.reject(requestError);
        },
    );

    instance.interceptors.response.use(
        (response) => {
            if (response && response.data) {
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
