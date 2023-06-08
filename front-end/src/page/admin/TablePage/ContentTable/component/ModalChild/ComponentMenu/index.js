/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import { v4 } from 'uuid';

import { useState } from 'react';
import { useCartAdmin } from '~/redux/SliceReducer/cartsTableAdmin';
import ProductItem from './ProductItem';
import Categories from '../Categories';

function ComponentMenu({ component }) {
    const [query, setQuery] = useState('');

    const { menu } = useCartAdmin();

    return (
        <>
            <Categories component={component} setQuery={setQuery} />

            <Box sx={{ ...styleModalChild }}>
                {(menu || []).map((item) => {
                    return <ProductItem key={v4()} data={item} />;
                })}
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
