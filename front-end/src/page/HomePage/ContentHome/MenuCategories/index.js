import { TitleViewAll } from '~/component/client/TitleViewAll';
import SwiperItem from './SwiperItem';
import { Grid } from '@mui/material';
import { ProductItem } from './ProductItem';

const productCategoriesList = [
    {
        name: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 7.65,
    },
    {
        name: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 7.65,
        price_sale: 10.21,
    },
    {
        name: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 7.65,
    },
    {
        name: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 7.65,
        price_sale: 10.21,
    },
];

function MenuCategories({ data }) {
    return (
        <>
            <TitleViewAll title="Menu Category" titleRoute="View Title" />
            <SwiperItem />

            {/* Product Item Menu */}
            <Grid container spacing={2}>
                {productCategoriesList.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ProductItem data={item} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default MenuCategories;
