import { Box, Grid } from '@mui/material';

import Product from './Product';
import TitleComponent from '../TitleComponent';

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

function TrendingOrders() {
    return (
        <Box>
            <TitleComponent title="Trending orders" sx={{ marginTop: '12px' }} />

            <Grid container spacing={2}>
                {productTrendingList.map((item, index) => {
                    return (
                        <Grid item key={index} xs={12} sm={6} lg={4}>
                            <Product data={item} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default TrendingOrders;
