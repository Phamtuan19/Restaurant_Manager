import { Box, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import AvatarHeader from '~/component/customs/AvatartHeader';
import useAuth from '~/hooks/useAuth';

function Header() {
   const { user } = useAuth();
   return (
      <WrapHeader>
         <Stack>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
               <Box component="span" sx={{ pr: '0.55rem', fontWeight: 400, fontSize: '.9rem', color: '#959cb6' }}>
                  Xin chào:
               </Box>
               <Box component="span" sx={{ pr: '0.55rem', fontWeight: 'Bold', fontSize: '.9rem' }}>
                  {user?.name}
               </Box>
            </Box>

            <RedirectAdmin to="/">Tới trang bán hàng </RedirectAdmin>
         </Stack>
         <AvatarHeader />
      </WrapHeader>
   );
}

const WrapHeader = styled(Box)(({ theme }) => {
   return {
      position: 'fixed',
      top: 0,
      right: 0,
      height: theme.palette.layoutAdmin.sidebar.height,
      width: 'calc(100% - ' + theme.palette.layoutAdmin.sidebar.width + 'px)',
      padding: '8px 24px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '0 24px',
      backgroundColor: theme.palette.layoutAdmin.text.white,
      boxShadow: 'var(--box-shadow-fa)',
      transition: 'all .5s ease',
   };
});

const RedirectAdmin = styled(Link)({
   pr: '0.55rem',
   fontWeight: 400,
   fontSize: '.9rem',
   color: 'var(--black)',

   '&:hover': {
      color: '#0072E5',
   },
});

export default Header;
