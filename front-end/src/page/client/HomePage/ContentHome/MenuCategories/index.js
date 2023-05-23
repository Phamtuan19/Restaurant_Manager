import { TitleViewAll } from '~/component/client/TitleViewAll';
import SwiperItem from './SwiperItem';
import { Grid, Skeleton, Stack } from '@mui/material';
import { useContext } from 'react';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';
import Product from '~/component/client/Product';

const productList = [
    {
        name: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
    },
    {
        name: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
        price_sale: 110000,
    },
    {
        name: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
    },
    {
        name: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
        price_sale: 110000,
    },
];

// const loads = [1, 2, 3, 4];

function MenuCategories() {
    const { skeleton } = useContext(SkeletonLoading);

    return (
        <>
            {skeleton ? (
                <Stack sx={{ padding: '1.5rem 0', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Skeleton variant="text" width={400} height={50} sx={{ padding: '1.5rem' }} />
                    <Skeleton variant="text" width={200} height={50} sx={{ padding: '1.5rem' }} />
                </Stack>
            ) : (
                <TitleViewAll title="Menu Category" titleRoute="View Title" />
            )}
            <SwiperItem />

            {/* Product Item Menu */}
            <Grid container spacing={2}>
                {productList.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Product data={item} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}

export default MenuCategories;
