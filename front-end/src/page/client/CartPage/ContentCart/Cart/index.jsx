import { Box, Grid } from '@mui/material';
import 'react-loading-skeleton/dist/skeleton.css';

import ProductItem from './ProductItem';
import { useCart } from '~/redux/SliceReducer/carts.reducer';
import TitleComponent from '~/page/client/HomePage/ContentHome/TitleComponent';
import { v4 } from 'uuid';
import { Delete } from '~/component/Icons';

function Cart() {
    const { listCart, useAddCart } = useCart();

    return (
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
                sx={{ maxHeight: 800, overflow: 'scroll', '::-webkit-scrollbar': { width: '0' } }}
            >
                {listCart.map((item) => {
                    return (
                        <Grid key={v4()} item xs={12} sm={6} md={12} lg={6}>
                            <ProductItem data={item} />
                        </Grid>
                    );
                })}
            </Grid>
            
        </Box>
    );
}

export default Cart;
