import { Box, Grid } from '@mui/material';
import 'react-loading-skeleton/dist/skeleton.css';

import ProductItem from './ProductItem';
import { useCart } from '~/redux/SliceReducer/cartsReducer';
import TitleComponent from '~/page/client/HomePage/ContentHome/TitleComponent';

function Cart() {
    const { listCart } = useCart();

    return (
        <Box sx={{ padding: '0 1.5rem 1.5rem', marginBottom: '2rem' }}>
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

            <Grid container spacing={2}>
                {listCart.map((item) => {
                    return (
                        <Grid key={item.id} item xs={12}>
                            <ProductItem data={item} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default Cart;
