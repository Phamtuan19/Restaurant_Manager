import { Box, styled, Grid, Stack, Button, FormControl, Select, MenuItem } from '@mui/material';
import { AddNew } from '~/component/Icons';

import { useEffect, useState } from 'react';
import productSeviver from '~/services/product.service';
import Product from './component/Product';

function ProductsList() {
    const [productList, setProductList] = useState([]);
    const [select, setSelect] = useState(10);

    useEffect(() => {
        const productsList = async () => {
            const res = await productSeviver.adminProducts();
            setProductList(res.products);
        };

        productsList();
    }, []);

    return (
        <>
            <Header>
                <Box sx={{ fontSize: '1.6rem' }}>Danh sách sản phẩm</Box>

                <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button variant="contained">
                        <AddNew fill="white" width="1.1rem" height="1.1rem" sx={{ marginLeft: '6px' }} />
                        thêm mới
                    </Button>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <Select
                            id="demo-select-small"
                            value={select}
                            onChange={(event) => setSelect(event.target.value)}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Header>

            <ViewListProductGrid productList={productList} />
        </>
    );
}

const Header = styled('header')({
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const ViewListProductGrid = ({ productList }) => {
    return (
        <Box>
            <Grid container spacing={2}>
                {productList.map((item, index) => {
                    return (
                        <Grid item xs={3} key={index}>
                            <Product data={item} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ProductsList;
