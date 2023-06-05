import { Box, Grid, MenuItem, Pagination, PaginationItem, Select, Skeleton, Stack, styled } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import Product from '~/component/client/Product';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';
import productSeviver from '~/services/product.service';

// const loads = [1, 2, 3, 4, 5, 6, 7, 8];

function Content() {
    const [valueSelect, setValueSelect] = useState('Ten');
    const { skeleton } = useContext(SkeletonLoading);
    const [productList, setProductList] = useState([]);
    
    const [page, setPage] = useState(1);
    useEffect(() => {
        const getProductList = async (page) => {
            const res = await productSeviver.getMenuProducts(page);
            if (res) {
                setProductList(res.products);
            }
        };

        getProductList(page);
    }, [page]);

    
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
                        {/* <HeaderContentTitle>Có {(productList?.data).length} sản phẩm</HeaderContentTitle> */}

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
                {(productList?.data || []).map((data) => {
                    return (
                        <Grid key={v4()} item xs={12} sm={6} md={4} lg={4}>
                            <Product data={data} />
                        </Grid>
                    );
                })}
            </Grid>

            <Stack spacing={2} sx={{ alignItems: 'center' }}>
                <Pagination
                    page={page}
                    count={productList?.last_page || 1}
                    onChange={(event, value) => setPage(value)}
                    renderItem={(item) => <PaginationItem component={Link} to={`?page=${item.page}`} {...item} />}
                />
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
