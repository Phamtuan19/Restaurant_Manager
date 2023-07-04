/* eslint-disable react-hooks/rules-of-hooks */
import useLocalStorage from '~/hooks/useLocalStorage';

const { getLocalItem } = useLocalStorage();

const withAuthToken = async (requestConfig) => {
   const accessToken = getLocalItem('accessToken');
   if (accessToken) {
      requestConfig.headers = {
         'X-Requested-With': 'XMLHttpRequest',
         Authorization: `Bearer ${accessToken}`,
      };
      return requestConfig;
   }

   requestConfig.headers.accept = 'application/json';
   return requestConfig;
};

export default withAuthToken;
