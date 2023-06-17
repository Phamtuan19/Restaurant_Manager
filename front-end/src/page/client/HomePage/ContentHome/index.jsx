/* eslint-disable react/jsx-pascal-case */
import { Grid } from '@mui/material';

import Banner from './Banner';
import Categories from './Categories';
import Feedback from './Feedback';
import MenuCategories from './MenuCategories';
import TrendingOrders from './TrendingOrders';
import BannerDiscount from './BannerDiscount/BannerDiscount';
import { createContext, useEffect, useState } from 'react';
import homePageService from '~/services/homePage.service';

export const ContextData = createContext();

function ContentHome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const api = async () => {
            const res = await homePageService.getMenuCategories();
            console.log(res)
            setData(res);
        };

        api();
    }, []);

    return (
        <ContextData.Provider
            value={{ menuProducts: data.menuProducts, categories: data.categories, topProducts: data.topProducts }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={8}>
                    {/* Banner trang home */}
                    <Banner
                        imageUrl={'https://templates.iqonic.design/aprycot/react/build/static/media/01.adcc5f80.png'}
                    />

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
        </ContextData.Provider>
    );
}

export default ContentHome;
