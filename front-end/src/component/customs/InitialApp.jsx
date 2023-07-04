/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useAuth from '~/hooks/useAuth';

function InitialApp({ children }) {
   const { user, getUser } = useAuth();

   useEffect(() => {
      if (!user) {
         getUser();
      }
   }, []);

   return children;
}

export default InitialApp;
