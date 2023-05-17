import { Grid } from '@mui/material';

import Banner from './Banner';
import { TitleViewAll } from '~/component/client/TitleViewAll';
import Trending from './Trending';
import BannerDiscount from './BannerDiscount/BannerDiscount';
import { ProductItem } from './MenuCategories/ProductItem';
import SwiperItem from './MenuCategories/SwiperItem';
import Categories from './Categories';

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

const productTrendingList = [
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

function ContentHome() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8}>
                {/* Banner trang home */}
                <Banner />

                {/* Menu category */}
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

                {/* Trending orders */}
                <TitleViewAll title="Trending orders" styleWrap={{ marginTop: '12px' }} />
                <Grid container spacing={2}>
                    {productTrendingList.map((item, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={6} lg={4}>
                                <Trending data={item} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <BannerDiscount />
                    </Grid>
                    <Grid item xs={12}>
                        <Categories />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ContentHome;
