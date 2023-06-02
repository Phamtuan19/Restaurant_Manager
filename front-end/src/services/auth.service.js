/* eslint-disable react-hooks/rules-of-hooks */
// import useLocalStorage from '~/hook/useLocalStorage';
import BaseService from '~/utils/BaseService';

// const { removeLocalItem } = useLocalStorage();

const authEndpoint = {
    loginAccount: 'auth/login/account',
    authGoogle: 'auth/google/url',
    googleCallback: 'auth/google/callback',
    logoutAccount: 'auth/logout',
    singupAccount: 'auth/singup/account',
};

class AuthService extends BaseService {
    // BASE_ENDPOINT = authEndpoint.base;

    constructor(params) {
        super(params);
        this.setRequest();
    }

    loginAccount = async (data) => {
        return this.request.post(authEndpoint.loginAccount, data);

        // const response = await instance.post(pathUrl.loginAccount, postData);
        // const data = {
        //     user: {
        //         ...response.user,
        //         avatar: response.avatar,
        //     },
        //     token: response.token,
        // };
        // return data;
    };

    SingupAccount = async (data) => {
        return this.request.post(authEndpoint.singupAccount, data);
        // const response = await instance.post(process.env.REACT_APP_BASE_URL_API + pathUrl.SingupAccount, postData);
        // console.log(response);
    };

    loginGoogle = async () => {
        // const response = await instance.get(pathUrl.authGoogle);
        // return response.url;
    };

    loginGoogleCallback = async (params) => {
        // const response = await instance.post(pathUrl.googleCallback + params);
        // console.log(response);
        // const data = {
        //     user: {
        //         ...response.user,
        //         avatar: response.avatar,
        //     },
        //     token: response.token,
        // };
        // return data;
    };

    logoutAccount = async () => {
        // const response = await instance.post(pathUrl.logoutAccount);
        // if (response?.message) {
        //     removeLocalItem('token');
        //     removeLocalItem('user');
        //     return true;
        // }
        // return false;
    };
}

const authService = new AuthService();

export default authService;
