import { Box, Grid } from '@mui/material';
import 'react-loading-skeleton/dist/skeleton.css';

import { TitleViewAll } from '~/component/client/TitleViewAll';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { listCartsSelector } from '~/redux/selectors';

function Cart() {
    const carts = useSelector(listCartsSelector);

    return (
        <Box sx={{ padding: '0 1.5rem 1.5rem', marginBottom: '2rem' }}>
            <TitleViewAll
                title="Cart"
                sx={{
                    padding: '1rem 1.5rem',
                    backgroundColor: 'rgba(255, 255, 255,0.5)',
                    border: '1px solid #fff',
                    borderRadius: '1.5rem',
                    marginBottom: '1rem',
                }}
                sxLink={{ display: 'none' }}
            />

            <Grid container spacing={2}>
                {carts.map((item) => {
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
