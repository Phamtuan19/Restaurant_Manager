import styled from '@emotion/styled';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import fomatMoney from '~/Helpers/fomatMoney';
import TitleComponent from '~/page/client/HomePage/component/TitleComponent';
import { useCart } from '~/redux/SliceReducer/carts.reducer';
import { ContextModalCart } from '.';

function BillDetail() {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const { listCart } = useCart();
   const [totalPrice, setTotalPrice] = useState(0);

   const { handleNextStep, handleCloseStep } = useContext(ContextModalCart);

   useEffect(() => {
      const total = listCart.reduce((accumulator, currentValue) => {
         return accumulator + (currentValue.price_sale || currentValue.price) * currentValue.quantity;
      }, 0);
      setTotalPrice(total);
   }, [listCart]);

   return (
      <Box>
         <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
            Delivery
         </Typography>
         <Stack direction="row" sx={{ borderBottom: '1px dashed  rgb(227, 225, 225)', pb: '2rem' }}>
            <InputPromocode placeholder="Promo Code ..." />
            <Button sx={{ borderRadius: '0 10px 10px 0', boxShadow: 'none' }} variant="contained">
               Apply
            </Button>
         </Stack>

         <Box>
            <Stack sx={{ cursor: 'pointer', borderBottom: '1px dashed  rgb(227, 225, 225)' }}>
               <Box sx={{ padding: '1rem 0' }}>
                  <p style={{ float: 'left' }}>SubTotal</p>
                  <p style={{ float: 'right' }}>$0.00</p>
               </Box>
               <Box sx={{ padding: '.7rem 0', color: '#989898' }}>
                  <p style={{ float: 'left' }}>Discount</p>
                  <p style={{ float: 'right' }}>$0.00</p>
               </Box>
               <Box sx={{ padding: '.7rem 0', color: '#989898' }}>
                  <p style={{ float: 'left' }}>Ship</p>
                  <p style={{ float: 'right' }}>$0.00</p>
               </Box>
            </Stack>
            <Stack sx={{ marginBottom: '2rem', cursor: 'pointer', borderBottom: '1px dashed  rgb(227, 225, 225)' }}>
               <Box sx={{ padding: '1rem 0' }}>
                  <p style={{ float: 'left' }}>Total</p>
                  <p style={{ float: 'right' }}>{fomatMoney(totalPrice)}</p>
               </Box>
            </Stack>

            <Stack direction="row">
               <Button variant="contained" onClick={handleNextStep} sx={{ width: '50%', mr: 1 }}>
                  Continue
               </Button>
               <Button variant="contained" onClick={handleCloseStep} sx={{ width: '50%' }} color="error">
                  Close
               </Button>
            </Stack>
         </Box>
      </Box>
   );
}

const InputPromocode = styled('input')({
   width: '100%',
   borderRadius: '20px 0 0 20px',
   padding: '0.7rem 1rem 0.7rem 1rem',
   fontSize: '1rem',
   fontWeight: 400,
   lineHeight: 1.75,
   color: '#959895',
   backgroundColor: '#fff',
   backgroundClip: 'padding-box',
   border: '1px solid #e3e1e1',
   transition: 'all 0.5s',

   '&:focus': {
      outline: 'none',
      width: '100%',
   },
});

export default BillDetail;
