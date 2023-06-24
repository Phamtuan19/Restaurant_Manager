import { Box, Typography, styled } from '@mui/material';
import { Card } from '~/component/client/Card';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';

function BannerDiscount() {
   return (
      <Card className={{ backgroundColor: 'transparent', width: '100%' }}>
         <WrapSaleOf sx={{ paddingBottom: { xs: '50%', lg: '60%' } }}>
            <DivImage>
               <Box width="70%" height="70%">
                  <ImageLazyLoading
                     src="https://templates.iqonic.design/aprycot/react/build/static/media/8.74cad6a3.png"
                     alt="profile-img"
                  />
               </Box>
            </DivImage>
            <Box
               sx={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
               }}
            >
               <Typography sx={{ mb: 1, fontFamily: '"Playfair Display",serif' }} variant="h2" component="h2">
                  50 % off
               </Typography>
               <Box sx={{ color: '#959895' }}>The full price of burgers</Box>
            </Box>
         </WrapSaleOf>
      </Card>
   );
}

const WrapSaleOf = styled('div')({
   position: 'relative',
   marginTop: '2rem',
   padding: '1.5rem',
   backgroundColor: 'rgba(255, 255, 255,0.5)',
   border: '1px solid #fff',
   borderRadius: '1.5rem',
});

const DivImage = styled('div')({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   textAlign: 'center',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   transform: 'translateY(-20%)',
});

// const Image = styled('img')({
//    maxWidth: '65%',

//    '@media (min-width: 576px)': {
//       maxWidth: '50%',
//    },

//    '@media (min-width: 768px)': {
//       maxWidth: '45%',
//    },

//    '@media (min-width: 992px)': {
//       maxWidth: '35% ',
//    },

//    '@media (min-width: 1200px)': {
//       maxWidth: '65%',
//    },
// });

export default BannerDiscount;
