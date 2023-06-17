import SwiperItem from './SwiperItem';
import { Box, Grid } from '@mui/material';
import Product from '~/component/client/Product';
import TitleComponent from '../TitleComponent';
import { useContext } from 'react';
import { ContextData } from '..';

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

function MenuCategories() {
    const { menuProducts } = useContext(ContextData);

    return (
        <Box minHeight={500}>
            <TitleComponent title="Menu Category" titleRoute="View Title" />
            <SwiperItem />

            {/* Product Item Menu */}
            <Grid container spacing={2}>
                {(menuProducts || productList).map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Product data={item} turn={true} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default MenuCategories;
