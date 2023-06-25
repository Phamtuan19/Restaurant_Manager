/* eslint-disable react-hooks/rules-of-hooks */
import { Box, styled } from '@mui/material';
import fomatMoney from '~/Helpers/fomatMoney';
import { AddNewIcon } from '~/component/Icons';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';
import { useBooking } from '~/redux/SliceReducer/booking.reducer';

function ProductMenu({ data }) {
   const { bookingAddProduct } = useBooking();

   const handleAddCart = (data) => {
      bookingAddProduct(data);
   };

   return (
      <Box sx={{ position: 'relative', cursor: 'pointer', marginTop: { md: '75px', xs: '75px' } }}>
         <Box sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Box
               sx={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 0.3125rem 0.3125rem 0 rgba(82,63,105,.05)',
               }}
            >
               <ImageLazyLoading src={data?.image} alt={data.name} />
            </Box>
         </Box>
         <CardBody>
            <Box sx={{ marginTop: '.5rem' }}>
               <Box sx={styleName}>{data.name}</Box>

               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '0 24px' }}>
                     <Price>{data?.price_sale ? fomatMoney(data?.price_sale) : fomatMoney(data?.price)}</Price>
                     {data.price_sale && <PriceSale>{fomatMoney(data.price)}</PriceSale>}
                  </Box>
                  <Box onClick={() => handleAddCart(data)}>
                     <AddNewIcon style={{ color: '#fff' }} />
                  </Box>
               </Box>
            </Box>
         </CardBody>
      </Box>
   );
}

const CardBody = styled('div')({
   paddingTop: '70px !important',
   flex: '1 1 auto',
   padding: '1.5rem',
   backgroundColor: 'rgba(255, 255, 255, 0.5)',
   border: '1px solid #fff',
   borderRadius: '1.5rem',
   boxShadow: '0 4px 18px rgba(47, 43, 61 ,.1), 0 0 transparent, 0 0 transparent',

   '&:hover': {
      backgroundColor: 'rgba(255, 255, 255)',
   },
});

const styleName = {
   padding: '12px 0',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   whiteSpace: 'nowrap',
   fontWeight: 'bolder',
   textTransform: 'capitalize',
   '&:hover': {
      color: '#065fd4',
   },
};

const Price = styled('span')({
   fontSize: '1rem',
   fontWeight: 'bold',
});

const PriceSale = styled('small')({
   fontSize: '0.9rem',
   fontWeight: 'bold',
   textDecoration: 'line-through',
});

export default ProductMenu;
