import { Box, Button, Grid, Stack, Typography } from '@mui/material';

import TitleComponent from '../HomePage/component/TitleComponent';
import { useCart } from '~/redux/SliceReducer/carts.reducer';
import { lazy, useEffect, useState } from 'react';
import TableProducts from './component/TableProducts';
import styled from '@emotion/styled';
import fomatMoney from '~/Helpers/fomatMoney';
import Loadable from '~/routes/component/Loadable';

const DialogSuccess = Loadable(lazy(() => import('./component/DialogSuccess')));
const ModalConfig = Loadable(lazy(() => import('./component/ModalConfig')));
const DialogComfirmDelete = Loadable(lazy(() => import('./component/DialogComfirmDelete')));

function CartPage() {
   const [openDialog, setOpenDialog] = useState(false);
   const [openModalOrder, setOpenModalOrder] = useState(false);
   const [openDialogComfirm, setOpenDialogComfirm] = useState(false);
   const [DeleteProductId, setDeleteProductId] = useState('');
   const [totalPrice, setTotalPrice] = useState(0);

   const { listCart, handleDown } = useCart();

   useEffect(() => {
      const total = listCart.reduce((accumulator, currentValue) => {
         return accumulator + (currentValue.price_sale || currentValue.price) * currentValue.quantity;
      }, 0);
      setTotalPrice(total);
   }, [listCart]);

   const handleClickDown = (quantity, id) => {
      if (quantity === 1) {
         setDeleteProductId(id);
         return setOpenDialogComfirm(true);
      }

      return handleDown({ id });
   };

   return (
      <>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               {listCart.length > 0 ? (
                  <Box mb="1rem">
                     <TitleComponent
                        title="Giỏ hàng"
                        sx={{
                           padding: '1rem 1.5rem',
                           backgroundColor: 'rgba(255, 255, 255,0.5)',
                           border: '1px solid #fff',
                           borderRadius: '1.5rem',
                           marginBottom: '1rem',
                        }}
                     />
                  </Box>
               ) : (
                  <Typography variant="h4" component="h1">
                     Không có sản phẩm nào trong giỏ hàng.
                  </Typography>
               )}
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
               <Box mb="2rem">
                  <TableProducts handleClickDown={handleClickDown} />
               </Box>
            </Grid>
            {listCart.length > 0 && (
               <Grid item xs={12} md={3} lg={4}>
                  <Box
                     sx={{
                        bgcolor: 'rgb(255 255 255 / 50%)',
                        border: '1px solid #fff',
                        p: '1.5rem',
                        borderRadius: '1rem',
                     }}
                  >
                     <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
                        Hóa đơn xem trước
                     </Typography>
                     <Stack direction="row" sx={{ borderBottom: '1px dashed  rgb(227, 225, 225)', pb: '2rem' }}>
                        <InputPromocode placeholder="Promo Code ..." />
                        <Button sx={{ borderRadius: '0 10px 10px 0', boxShadow: 'none' }} variant="contained">
                           Áp dụng
                        </Button>
                     </Stack>

                     <Box>
                        <Stack sx={{ cursor: 'pointer', borderBottom: '1px dashed  rgb(227, 225, 225)' }}>
                           <Box sx={{ padding: '1rem 0' }}>
                              <p style={{ float: 'left' }}>Giá</p>
                              <p style={{ float: 'right' }}>{fomatMoney(totalPrice)}</p>
                           </Box>
                           <Box sx={{ padding: '.7rem 0', color: '#989898' }}>
                              <p style={{ float: 'left' }}>Giảm</p>
                              <p style={{ float: 'right' }}>$0.00</p>
                           </Box>
                           <Box sx={{ padding: '.7rem 0', color: '#989898' }}>
                              <p style={{ float: 'left' }}>Phí Ship</p>
                              <p style={{ float: 'right' }}>$0.00</p>
                           </Box>
                        </Stack>
                        <Stack
                           sx={{
                              marginBottom: '2rem',
                              cursor: 'pointer',
                              borderBottom: '1px dashed  rgb(227, 225, 225)',
                           }}
                        >
                           <Box sx={{ padding: '1rem 0' }}>
                              <p style={{ float: 'left' }}>Tổng:</p>
                              <p style={{ float: 'right' }}>{fomatMoney(totalPrice)}</p>
                           </Box>
                        </Stack>

                        <Button variant="contained" fullWidth onClick={() => setOpenModalOrder(true)}>
                           Đặt hàng
                        </Button>
                     </Box>
                  </Box>
               </Grid>
            )}
         </Grid>
         <ModalConfig
            openModalOrder={openModalOrder}
            setOpenModalOrder={setOpenModalOrder}
            setOpenDialog={setOpenDialog}
            listCart={listCart}
            totalPrice={totalPrice}
         />
         <DialogSuccess openDialog={openDialog} setOpenDialog={setOpenDialog} />
         <DialogComfirmDelete
            productId={DeleteProductId}
            openDialogComfirm={openDialogComfirm}
            setOpenDialogComfirm={setOpenDialogComfirm}
         />
      </>
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

export default CartPage;
