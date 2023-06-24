import { Box, Skeleton, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { CategoryIcon } from '~/component/Icons';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';

function Item({ data }) {
   return (
      <Wrap>
         <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Box width={100} pb="50%" position="relative" overflow="hidden">
               <Box position="absolute" top={0} left={0} width="100%" height="100%">
                  <ImageLazyLoading src={data.image} alt={data.name} />
               </Box>
            </Box>
         </Box>

         <CategoryItemTitle className="Category_Item_Title">
            <Box sx={styleName}>{data.name}</Box>
         </CategoryItemTitle>
         <CategoryItemIcon to="/menu">
            <CategoryIcon />
         </CategoryItemIcon>
      </Wrap>
   );
}

const Wrap = styled('div')({
   width: '100%',
   overflow: 'hidden',
   cursor: 'pointer',

   '&:hover': {
      '.Category_Item_Title': {
         '&:before': {
            width: '50%',
         },
      },
   },
});

const styleName = {
   padding: '0 12px 12px',
   fontSize: '1rem',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   whiteSpace: 'nowrap',
   fontWeight: 'bolder',
   textTransform: 'capitalize',
};

const CategoryItemTitle = styled('div')({
   position: 'relative',

   '&:before': {
      content: '""',
      borderBottom: '1px solid #ea6a12',
      width: '32px',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      margin: '0 auto',
      textAlign: 'center',
      transition: 'all .4s ease',
   },
});

const CategoryItemIcon = styled(Link)({
   padding: '1.5rem',
   display: 'flex',
   justifyContent: 'center',

   '&:hover': {
      svg: {
         rect: {
            fill: 'rgb(230, 10, 10, .5)',
            transition: 'all 0.5s',
         },
      },
   },
});

function LoadingItem() {
   return (
      <Wrap>
         <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Skeleton variant="circular" width="100%" />
         </Box>
         <CategoryItemTitle className="Category_Item_Title">
            <Typography
               variant="h1"
               sx={{
                  textTransform: 'capitalize',
                  transition: 'all .4s ease',
                  fontWeight: 'bolder',
                  fontSize: '1.5rem',
                  paddingBottom: '1.5rem',
                  display: 'block',
               }}
            >
               <Skeleton variant="text" width="100%" height={32} />
            </Typography>
         </CategoryItemTitle>
         <CategoryItemIcon>
            <Skeleton variant="circular" width={32} height={32} />
         </CategoryItemIcon>
      </Wrap>
   );
}

Item.LoadingItem = LoadingItem;

export default Item;
