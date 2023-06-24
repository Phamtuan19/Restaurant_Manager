/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Box, styled } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AvatarHeader from '~/component/customs/AvatartHeader';
import { LoginIcon } from '~/component/Icons';
import useAuth from '~/hooks/useAuth';

function Authentication() {
   const { user, userPermission, getUser, isAuthenticated } = useAuth();

   useEffect(() => {
      if (userPermission === null || user === null) {
         getUser();
      }
   }, [userPermission, user]);

   return (
      <Stack justifyContent="flex-end" flexDirection="row" alignItems="center">
         <Box>
            {isAuthenticated ? (
               <Stack direction="row" alignItems="center">
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                     <Box component="span" sx={{ pr: '0.55rem', fontWeight: 400, fontSize: '.9rem', color: '#959cb6' }}>
                        Xin chào:
                     </Box>
                     <Box component="span" sx={{ pr: '0.55rem', fontWeight: 'Bold', fontSize: '.9rem' }}>
                        {user.name}
                     </Box>
                  </Box>
                  <AvatarHeader />
               </Stack>
            ) : (
               <CustomButtom to="/login">
                  <LoginIcon sx={{ marginRight: '12px' }} className="HeaderUser_Icon" />
                  Login
               </CustomButtom>
            )}
         </Box>
      </Stack>
   );
}

const CustomButtom = styled(Link)({
   fontSize: '16px',
   fontWeight: 500,
   display: 'flex',
   alignItems: 'center',
   padding: '6px 16px',
   cursor: 'pointer',
   background: 'var(--white)',
   border: '1px solid transparent',
   borderRadius: '25px',
   transition: 'all 0.3s',
   textTransform: 'capitalize',
   fontFamily: 'var(--font-poppins)',
   color: 'var(--black) !important',

   '&:hover': {
      color: '#0072E5 !important',

      svg: {
         fill: '#0072E5',
      },
   },
});

export default Authentication;
