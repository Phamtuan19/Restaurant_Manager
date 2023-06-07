/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import { v4 } from 'uuid';

import ProductItem from '../../ModalDetailTable/ProductItem';
import Categories from '../Categories';
import { useEffect, useState } from 'react';
import tableService from '~/services/tables.service';
import { useCartAdmin } from '~/redux/SliceReducer/cartsTableAdmin';

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
