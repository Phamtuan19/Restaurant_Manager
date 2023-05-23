import { Box, Grid, Skeleton, Stack } from '@mui/material';
import { TitleViewAll } from '~/component/client/TitleViewAll';
import ProductItem from './ProductItem';
import { useContext } from 'react';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';

// const productList = [
//     {
//         top: 'Top of the day',
//         img: 'https://templates.iqonic.design/aprycot/react/build/static/media/17.938b20db.png',
//         title: 'Tôm Hùm',
//         persons: '4 persons',
//         price: 120000,
//     },
//     {
//         top: 'Top of the week',
//         img: 'https://templates.iqonic.design/aprycot/react/build/static/media/14.e20083c2.png',
//         title: 'Tôm Hùm',
//         persons: '4 persons',
//         price: 120000,
//     },
//     {
//         top: 'Top of the month',
//         img: 'https://templates.iqonic.design/aprycot/react/build/static/media/18.2bcce14e.png',
//         title: 'Tôm Hùm',
//         persons: '4 persons',
//         price: 120000,
//     },
//     {
//         top: 'Top of the week',
//         img: 'https://templates.iqonic.design/aprycot/react/build/static/media/19.5ab77ed3.png',
//         title: 'Tôm Hùm',
//         persons: '4 persons',
//         price: 120000,
//     },
//     {
//         top: 'Top of the week',
//         img: 'https://templates.iqonic.design/aprycot/react/build/static/media/20.d3d93362.png',
//         title: 'Tôm Hùm',
//         persons: '4 persons',
//         price: 120000,
//     },
//     {
//         top: 'Top of the week',
//         img: 'https://templates.iqonic.design/aprycot/react/build/static/media/21.8b39acdf.png',
//         title: 'Tôm Hùm',
//         persons: '4 persons',
//         price: 120000,
//     },
// ];

const productTrendingList = [
    {
        top: 'Top of the week',
        title: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
        persons: '4 persons',
    },
    {
        top: 'Top of the week',
        title: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
        persons: '4 persons',
    },
    {
        top: 'Top of the week',
        title: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
        persons: '4 persons',
    },
    {
        top: 'Top of the week',
        title: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
        persons: '4 persons',
    },
    {
        top: 'Top of the week',
        title: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
        persons: '4 persons',
    },
    {
        top: 'Top of the week',
        title: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 120000,
        persons: '4 persons',
    },
];

const dataSkeleton = [1, 2, 3, 4, 5, 6];

function TrendingOrders() {
    const {skeleton} = useContext(SkeletonLoading);

    return (
        <Box>
            {skeleton ? (
                <Stack sx={{ padding: '1.5rem 0', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Skeleton variant="text" width={400} height={50} sx={{ padding: '1.5rem' }} />
                    <Skeleton variant="text" width={200} height={50} sx={{ padding: '1.5rem' }} />
                </Stack>
            ) : (
                <TitleViewAll title="Trending orders" sx={{ marginTop: '12px' }} />
            )}

            <Grid container spacing={2}>
                {skeleton
                    ? dataSkeleton.map((item) => (
                          <Grid item key={item} xs={12} sm={6} lg={4}>
                              <ProductItem.LoadingProduct />
                          </Grid>
                      ))
                    : productTrendingList.map((item, index) => {
                          return (
                              <Grid item key={index} xs={12} sm={6} lg={4}>
                                  <ProductItem data={item} />
                              </Grid>
                          );
                      })}
            </Grid>
        </Box>
    );
}

export default TrendingOrders;
