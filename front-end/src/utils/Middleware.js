/* eslint-disable react-hooks/rules-of-hooks */
import useLocalStorage from '~/hook/useLocalStorage';

const { getLocalItem } = useLocalStorage();

const excludeAuthenApi = ['auth/google/url', 'auth/google/callback'];

const withAuthToken = async (requestConfig) => {
    const { url } = requestConfig;

    if (!excludeAuthenApi.some((api) => url.includes(api))) {
        const authToken = getLocalItem('token');
        if (authToken?.access_token) {
            // console.log(authToken.access_token);
            requestConfig.headers = {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `Bearer ${authToken.access_token}`,
            };
            return requestConfig;
        }

        requestConfig.headers.accept = 'application/json';
        return requestConfig;
    }

    requestConfig.headers.accept = 'application/json';
    return requestConfig;
};

export default withAuthToken;