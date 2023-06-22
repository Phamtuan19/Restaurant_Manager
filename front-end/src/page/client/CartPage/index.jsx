import { Box, Grid } from '@mui/material';
import Delivery from './component/Delivery';
import DefaultLayout from '~/layout/client/DefaultLayout';
import TitleComponent from '../HomePage/ContentHome/TitleComponent';
import { useCart } from '~/redux/SliceReducer/carts.reducer';
import Product from './component/Product';

function CartPage() {
   const { listCart, useAddCart } = useCart();

   return (
      <DefaultLayout>
         <Grid container spacing={2}>
            <Grid item xs={12} md={7} lg={8}>
               <Box mb="2rem">
                  <TitleComponent
                     title="Cart"
                     sx={{
                        padding: '1rem 1.5rem',
                        backgroundColor: 'rgba(255, 255, 255,0.5)',
                        border: '1px solid #fff',
                        borderRadius: '1.5rem',
                        marginBottom: '1rem',
                     }}
                  />

                  <Grid
                     container
                     spacing={2}
                     sx={{ maxHeight: 800, overflow: 'auto', '::-webkit-scrollbar': { width: '0' } }}
                  >
                     {listCart.map((item) => {
                        return (
                           <Grid key={item.id} item xs={12} sm={6} md={12} lg={6}>
                              <Product data={item} />
                           </Grid>
                        );
                     })}
                  </Grid>
               </Box>
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
               <Delivery />
            </Grid>
         </Grid>
      </DefaultLayout>
   );
}

export default CartPage;
