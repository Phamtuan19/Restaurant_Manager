import { Button, styled } from '@mui/material';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';

function Banner({ imageUrl }) {
   return (
      <Wrap sx={{ paddingBottom: { xs: '50%', md: '35%' } }}>
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
            <span>
               <small>Deal of the weekend</small>
               <h1>Hello, Austine Robertson</h1>
               <p>
                  Get <span>FREE delivery </span>on every weekend.
               </p>
               <Button variant="contained" sx={{ borderRadius: '1.5rem', p: '.5rem 1.5rem' }}>
                  Check Menu
               </Button>
            </span>
         </BannerTitle>
      </Wrap>
   );
}

const Wrap = styled('div')({
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

   small: {
      fontSize: '16px',
      color: '#ea6a12',
   },

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

export default Banner;
