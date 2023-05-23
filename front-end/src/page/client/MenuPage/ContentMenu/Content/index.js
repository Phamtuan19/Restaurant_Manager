import { Box, Grid, MenuItem, Pagination, Select, Skeleton, Stack, styled } from '@mui/material';
import { useContext, useState } from 'react';
import Product from '~/component/client/Product';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';

const productList = [
    {
        top: 'Top of the day',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/17.938b20db.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        top: 'Top of the week',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/14.e20083c2.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        top: 'Top of the month',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/18.2bcce14e.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        top: 'Top of the week',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/19.5ab77ed3.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        top: 'Top of the week',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/20.d3d93362.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        top: 'Top of the week',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/21.8b39acdf.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
];

// const loads = [1, 2, 3, 4, 5, 6, 7, 8];

function Content() {
    const [valueSelect, setValueSelect] = useState('Ten');
    const { skeleton } = useContext(SkeletonLoading);

    const handleChange = (event) => {
        setValueSelect(event.target.value);
    };

    return (
        <Box className={{ backgroundColor: 'transparent' }}>
            <HeaderContent sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {skeleton ? (
                    <>
                        <Skeleton variant="text" width={150} height={50} />
                        <Skeleton variant="text" width={150} height={50} />
                    </>
                ) : (
                    <>
                        <HeaderContentTitle>Có {productList.length} sản phẩm</HeaderContentTitle>

                        <Box sx={{ minWidth: 120 }}>
                            <Select
                                value={valueSelect}
                                onChange={handleChange}
                                sx={{ backgroundColor: 'var(--white)' }}
                                fullWidth
                                size="small"
                            >
                                <MenuItem value="Ten">Ten</MenuItem>
                                <MenuItem value="Twenty">Twenty</MenuItem>
                                <MenuItem value="Thirty">Thirty</MenuItem>
                            </Select>
                        </Box>
                    </>
                )}
            </HeaderContent>

            <Grid container spacing={2} gap="12px 0" sx={{ marginTop: '12px', marginBottom: '2rem' }}>
                {productList.map((data, index) => {
                    return (
                        <>
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <Product data={data} />
                            </Grid>
                        </>
                    );
                })}
            </Grid>

            <Stack spacing={2} sx={{ alignItems: 'center' }}>
                <Pagination count={10} />
            </Stack>
        </Box>
    );
}

const HeaderContent = styled('div')({
    paddingBottom: '.5rem',
    borderBottom: '2px solid rgb(255, 255, 255)',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const HeaderContentTitle = styled('span')({});

export default Content;
