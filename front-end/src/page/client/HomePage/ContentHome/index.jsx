/* eslint-disable react/jsx-pascal-case */
import { Grid } from '@mui/material';

import Banner from './Banner';
import Categories from './Categories';
import Feedback from './Feedback';
import MenuCategories from './MenuCategories';
import TrendingOrders from './TrendingOrders';
import BannerDiscount from './BannerDiscount/BannerDiscount';

function ContentHome() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8}>
                {/* Banner trang home */}
                <Banner imageUrl={'https://templates.iqonic.design/aprycot/react/build/static/media/01.adcc5f80.png'} />

                {/* Menu category */}
                <MenuCategories />

                {/* Trending orders */}

                <TrendingOrders />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <BannerDiscount />
                    </Grid>
                    <Grid item xs={12}>
                        <Categories />
                    </Grid>
                    <Grid item xs={12}>
                        <Feedback />
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    );
}

export default ContentHome;
