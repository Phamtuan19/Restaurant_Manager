/* eslint-disable react-hooks/rules-of-hooks */
// import useLocalStorage from '~/hook/useLocalStorage';
import BaseService from '~/utils/BaseService';

// const { removeLocalItem } = useLocalStorage();

export const authEndpoint = {
   base: 'auth/',
   loginAccount: 'login',
   logoutAccount: 'logout',
   singupAccount: 'register',
   getUser: 'user',

   refestToken: 'refresh-token',
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
      return this.request.get(this.BASE_ENDPOINT + authEndpoint.refestToken);
   };
}

const authService = new AuthService();

export default authService;
