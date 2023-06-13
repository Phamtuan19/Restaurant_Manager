import SwiperItem from './SwiperItem';
import { Grid } from '@mui/material';
import Product from '~/component/client/Product';
import TitleComponent from '../TitleComponent';

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
    return (
        <>
            <TitleComponent title="Menu Category" titleRoute="View Title" />
            <SwiperItem />

            {/* Product Item Menu */}
            <Grid container spacing={2}>
                {productList.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Product data={item} turn={true} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}

export default MenuCategories;
