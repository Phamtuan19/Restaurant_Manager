import { Grid } from '@mui/material';
import 'react-loading-skeleton/dist/skeleton.css';

import { Card } from '~/component/client/Card';
import { TitleViewAll } from '~/component/client/TitleViewAll';
import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';

function Cart() {
    const [skeleton, setSkeleton] = useState(true);

    useEffect(() => {
        setTimeout(() => setSkeleton(false), 5000);
    }, []);

    return (
        <Card className={{ padding: '0 1.5rem 1.5rem', marginBottom: '2rem' }}>
            <TitleViewAll
                title="Cart"
                sx={{ borderBottom: '1px solid #e3e1e1', marginBottom: '2rem' }}
                sxLink={{ display: 'none' }}
            />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {skeleton ? <ProductItem.SkeletonProductItem /> : <ProductItem />}
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {skeleton ? <ProductItem.SkeletonProductItem /> : <ProductItem />}
                </Grid>
            </Grid>
        </Card>
    );
}

export default Cart;
