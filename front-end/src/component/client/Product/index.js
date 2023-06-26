/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Rating, Stack, styled } from '@mui/material';
import fomatMoney from '~/Helpers/fomatMoney';
import { AddNewIcon } from '~/component/Icons';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';

function Product({ data, turn = false }) {
   return (
      <Wrap
         sx={{
            marginTop: { md: '85px', xs: '100px' },
            '&:hover': {
               '.Product_Item_Img': {
                  animation: turn ? 'rotate-smooth 14s cubic-bezier(.26,.26,1,1) infinite' : '',
               },
            },
         }}
      >
         <WrapImage>
            <Box sx={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden' }}>
               <ImageLazyLoading className="Product_Item_Img" src={data.image} alt={data.name} />
            </Box>
         </WrapImage>
         <CardBody>
            <Box sx={{ marginTop: '.5rem' }}>
               <Box
                  sx={{
                     ...styleName,
                     '&:hover': {
                        color: '#065fd4',
                     },
                  }}
               >
                  {data.name}
               </Box>

               <Stack spacing={1} sx={{ padding: '12px 0' }}>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
               </Stack>

               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0 24px',
                     }}
                  >
                     <Box component="span" fontSize="1rem" fontWeight="bold">
                        {data?.price_sale !== null ? fomatMoney(data?.price_sale) : fomatMoney(data?.price)}
                     </Box>
                  </Box>
                  <Box
                  // onClick={() => handleAddToCart(data, notifyTypes[0], 'Thêm thành công!')}
                  >
                     <AddNewIcon style={{ color: '#fff' }} />
                  </Box>
               </Box>
            </Box>
         </CardBody>
      </Wrap>
   );
}

const Wrap = styled(Box)({
   width: '100%',
   position: 'relative',
   // marginTop: '85px',
   cursor: 'pointer',
   display: 'flex',
   flexDirection: 'column',
   transition: 'all .4s ease',
   border: '0 solid rgba(0,0,0,.125)',
   color: '#07143b',
});

const styleName = {
   fontSize: '1rem',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   whiteSpace: 'nowrap',
   fontWeight: 'bolder',
   textTransform: 'capitalize',
};

const WrapImage = styled('div')({
   position: 'absolute',
   top: 0,
   left: '50%',
   transform: 'translate(-50%, -50%)',
   alignItems: 'center',
});

const CardBody = styled('div')({
   paddingTop: '85px !important',
   flex: '1 1 auto',
   padding: '1.5rem',
   backgroundColor: 'rgba(255, 255, 255, 0.5)',
   border: '1px solid #fff',
   borderRadius: '1.5rem',

   '&:hover': {
      backgroundColor: 'var(--white)',
   },
});

export default Product;
