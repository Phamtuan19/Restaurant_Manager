/* eslint-disable react-hooks/rules-of-hooks */
// import useLocalStorage from '~/hook/useLocalStorage';
import BaseService from '~/utils/BaseService';

// const { removeLocalItem } = useLocalStorage();

export const authEndpoint = {
    base: 'auth',
    loginAccount: '/login/account',
    authGoogle: '/google/url',
    googleCallback: '/google/callback',
    logoutAccount: '/logout',
    singupAccount: '/singup/account',
    getUser: '/user',

    refestToken: 'refest-token',
};

class AuthService extends BaseService {
    BASE_ENDPOINT = authEndpoint.base;

    constructor(params) {
        super(params);
        this.setRequest();
    }

    loginAccount = async (data) => {
        return this.request.post(this.BASE_ENDPOINT + authEndpoint.loginAccount, data);
    };

    singupAccount = async (data) => {
        return this.request.post(this.BASE_ENDPOINT + authEndpoint.singupAccount, data);
    };

    loginGoogle = async () => {
        return this.request.get(this.BASE_ENDPOINT + authEndpoint.authGoogle);
    };

    loginGoogleCallback = async () => {
        return this.request.get(this.BASE_ENDPOINT + authEndpoint.googleCallback);
    };

    logoutAccount = async () => {
        return this.request.post(this.BASE_ENDPOINT + authEndpoint.logoutAccount);
    };

    getUser = async () => {
        return this.request.get(this.BASE_ENDPOINT + authEndpoint.getUser);
    };

    refeshToken = async () => {
        console.log('Call Api Refesh Token');
    };
}

const authService = new AuthService();

export default authService;
