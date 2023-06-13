import { Box, Grid, MenuItem, Pagination, PaginationItem, Select, Stack, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import productSeviver from '~/services/product.service';
import Product from './Product';

function Content() {
    const [valueSelect, setValueSelect] = useState('');
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getProductList = async (page) => {
            const res = await productSeviver.getMenuProducts(page);
            setProductList(res.products);
        };

        getProductList(page);
    }, [page]);

    const handleChange = (event) => {
        setValueSelect(event.target.value);
    };

    return (
        <Box className={{ backgroundColor: 'transparent' }}>
            <HeaderContent sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Box>Có {productList?.data?.length || 0} sản phẩm</Box>

                <Box sx={{ minWidth: 120 }}>
                    <Select
                        value={valueSelect}
                        onChange={handleChange}
                        sx={{ backgroundColor: 'var(--white)' }}
                        fullWidth
                        size="small"
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="Twenty">Twenty</MenuItem>
                        <MenuItem value="Thirty">Thirty</MenuItem>
                    </Select>
                </Box>
            </HeaderContent>

            <Grid container spacing={2} gap="12px 0" sx={{ marginTop: '12px', marginBottom: '2rem' }}>
                {(productList?.data || []).map((data) => {
                    return (
                        <Grid key={v4()} item xs={12} sm={6} md={4} lg={3}>
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

export default Content;
