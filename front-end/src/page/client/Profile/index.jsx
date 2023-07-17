import { Box, Button, Grid, TextField, Typography, styled } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import useAuth from '~/hooks/useAuth';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';
import FieldItem from './component/FieldItem';
import { useState } from 'react';
import ProfileDetail from './component/ProfileDetail';
import ChangePassword from './component/ChangePassword';

const Profile = () => {
   const [content, setContent] = useState(1);
   const { user } = useAuth();

   return (
      <Box mx="auto" sx={{ width: { lg: '80%' } }}>
         <WrapBanner sx={{ paddingBottom: '35%' }}>
            <BannerImage sx={{ '&::before': { zIndex: { xs: 0, sm: 1 } } }}>
               <ImageLazyLoading
                  src="https://templates.iqonic.design/aprycot/react/build/static/media/01.adcc5f80.png"
                  alt="banner-image"
                  sx={{ borderRadius: '1.5rem' }}
               />
            </BannerImage>
            <ProfileUser>
               <ProfileAvatar>
                  <ImageLazyLoading src={user.image || ''} alt="banner-image" sx={{ borderRadius: '50%' }} />
               </ProfileAvatar>
               <ProfileName>
                  <Box component="span">{user.name}</Box>
               </ProfileName>
            </ProfileUser>
         </WrapBanner>

         <Box sx={{ bgcolor: '#fff', mt: '120px', borderRadius: '10px', p: '24px' }}>
            <Grid container spacing={2}>
               <Grid item md={3}>
                  <Typography component="h2" variant="h5" sx={{ fontWeight: 'bold', my: '12px' }}>
                     Cài đặt
                  </Typography>
                  <ExtendButtom fullWidth variant="text" startIcon={<PersonIcon />} onClick={() => setContent(1)}>
                     Cài đặt tài khoản
                  </ExtendButtom>
                  <ExtendButtom
                     fullWidth
                     variant="text"
                     startIcon={<AdminPanelSettingsIcon />}
                     onClick={() => setContent(2)}
                  >
                     Bảo mật và đăng nhập
                  </ExtendButtom>
               </Grid>

               <Grid item md={9}>
                  {content === 1 && <ProfileDetail user={user} />}
                  {content === 2 && <ChangePassword />}
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
};

const WrapBanner = styled(Box)({
   width: '100%',
   marginBottom: '2rem',
   background: 'hsla(0,0%,100%,.6)',
   position: 'relative',
   borderRadius: '1.5rem',
   boxShadow: 'var(--box-shadow-fa)',
});

const BannerImage = styled('div')({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   overflow: 'hidden',
});

const ProfileUser = styled(Box)(({ theme }) => {
   return {
      position: 'absolute',
      bottom: -70,
      left: 40,
      backgroundColor: 'transparent',
      display: 'flex',
   };
});

const ProfileAvatar = styled(Box)(({ theme }) => {
   return {
      width: 172,
      height: 172,
      borderRadius: '50%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #FFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   };
});

const ProfileName = styled(Box)(({ theme }) => {
   return {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: 16,
      marginLeft: 16,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      textTransform: 'capitalize',
   };
});

const ExtendButtom = styled(Button)(({ theme }) => {
   return {
      fontSize: '1rem',
      fontWeight: 400,
      padding: '8px 14px',
      justifyContent: 'flex-start',
      color: theme.palette.text.primary,
   };
});

export default Profile;
