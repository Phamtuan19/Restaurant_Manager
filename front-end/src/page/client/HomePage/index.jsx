/* eslint-disable react/jsx-pascal-case */
import { Box, Grid, Typography } from '@mui/material';
import { createContext } from 'react';
import TrendingOrders from './component/TrendingOrders';
import BannerDiscount from './component/BannerDiscount';
import FavoriteFood from './component/FavoriteFood';
import Feedback from './component/Feedback';
import styled from 'styled-components';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';
import { Button } from '~/component/client/Button';
import Categories from './component/Categories';

export const ContextData = createContext();

function ContentHome() {
   return (
      <>
         <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8}>
               {/* Banner trang home */}
               <WrapBanner sx={{ paddingBottom: { xs: '50%', md: '35%' } }}>
                  <BannerImage
                     sx={{
                        '&::before': {
                           zIndex: { xs: 0, sm: 1 },
                        },
                     }}
                  >
                     <ImageLazyLoading
                        src="https://templates.iqonic.design/aprycot/react/build/static/media/01.adcc5f80.png"
                        alt="banner-image"
                     />
                  </BannerImage>
                  <BannerTitle sx={{ display: { xs: 'none', sm: 'block' } }}>
                     <Box component="span">
                        <Box component="span" color="#ea6a12" fontSize={16}>
                           Deal of the weekend
                        </Box>
                        <Typography variant="h5" component="h3" mb="1.5rem" p="1rem" fontWeight="700">
                           Hello, Austine Robertson
                        </Typography>
                        <Box component="p">
                           Get <span>FREE delivery </span>on every weekend.
                        </Box>
                        <Button variant="contained" sx={{ borderRadius: '1.5rem', p: '.5rem 1.5rem' }}>
                           Check Menu
                        </Button>
                     </Box>
                  </BannerTitle>
               </WrapBanner>

               {/* Menu category */}
               <Categories />

               {/* Trending orders */}

               <TrendingOrders />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <BannerDiscount />
                  </Grid>
                  <Grid item xs={12}>
                     <FavoriteFood />
                  </Grid>
                  <Grid item xs={12}>
                     <Feedback />
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </>
   );
}

const WrapBanner = styled(Box)({
   width: '100%',
   marginBottom: '2rem',
   background: 'hsla(0,0%,100%,.6)',
   position: 'relative',
   borderRadius: '1.5rem',
   boxShadow: 'var(--box-shadow-fa)',
   overflow: 'hidden',
});

const BannerImage = styled('div')({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   overflow: 'hidden',

   '&::before': {
      display: 'block',
      position: 'absolute',
      backgroundImage: ' linear-gradient(90deg,#fff,#fff 65%,rgba(83,100,141,0))',
      height: '100%',
      left: 0,
      top: 0,
      width: '60%',
      opacity: '.9',
      borderRadius: '1.6rem',
      content: '""',
      zIndex: 1,
   },
});

const BannerTitle = styled('div')({
   width: '100%',
   height: '100%',
   position: 'absolute',
   padding: '4rem',
   fontFamily: '"Playfair Display",serif',
   zIndex: 2,
   h1: {
      paddingTop: '1rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
   },

   p: {
      marginBottom: '24px',

      span: {
         color: 'rgba(var(--bs-primary-rgb),var(--bs-text-opacity))',
      },
   },
});

export default ContentHome;
