/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import { v4 } from 'uuid';

import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Categories from '../Categories';
import ordersService from '~/services/orders.service';

function ComponentMenu({ component }) {
    const [listProducts, setListProducts] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const apiGetMenu = async (query) => {
            console.log(query);
            const res = await ordersService.getMenuOrderProducts(query);
            setListProducts(res.products);
        };

        apiGetMenu(query);
    }, [query]);

    return (
        <>
            <Categories component={component} setQuery={setQuery} />

            <Box sx={{ ...styleModalChild }}>
                {listProducts.length > 0 ? (
                    listProducts.map((item) => {
                        return <ProductItem key={v4()} data={item} />;
                    })
                ) : (
                    <h3>Chưa có sản phẩm</h3>
                )}
            </Box>
        </>
    );
}

const styleModalChild = {
    maxHeight: 450,
    overflow: 'scroll',

    '::-webkit-scrollbar': {
        width: '0',
    },
};

export default ComponentMenu;
