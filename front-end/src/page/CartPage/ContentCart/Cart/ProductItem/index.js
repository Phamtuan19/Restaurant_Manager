import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Delete } from '~/component/Icons';
import Select from '~/component/Select';

import {
    WrapProductItem,
    StyleTextField,
    ProductItemName,
    PriceDetail,
    BoxStatus,
    Price,
    PriceSale,
    WrapDelete,
} from './styleComponent';

function ProductItem() {
    const [valueNumber, setValueNumber] = useState(1);

    return (
        <WrapProductItem sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box
                sx={{
                    flex: '1 4',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="https://templates.iqonic.design/aprycot/react/build/static/media/4.15e1b34b.png"
                    alt=""
                    style={{ width: '100px' }}
                />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flex: '4 1', flexDirection: 'column', gap: '12px' }}>
                <Stack sx={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', gap: '8px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <ProductItemName>Manchow soup</ProductItemName>
                        <Box sx={{ display: 'flex', gap: '0 12px' }}>
                            <PriceDetail>$12.50</PriceDetail>
                            <BoxStatus>In stock</BoxStatus>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <PriceSale> $12.50</PriceSale>
                        <Price>$14.10</Price>
                    </Box>
                </Stack>
                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        <Select sx={{ width: '70px', height: '32px' }}>
                            <option value="admin">M</option>
                            <option value="admin">XL</option>
                        </Select>

                        <StyleTextField
                            InputProps={{ inputProps: { min: 1, max: 30 } }}
                            type="number"
                            value={valueNumber}
                            onChange={(e) => setValueNumber(e.target.value)}
                            size="small"
                        />
                    </Box>

                    <WrapDelete>
                        <Delete />
                    </WrapDelete>
                </Stack>
            </Box>
        </WrapProductItem>
    );
}

const SkeletonProductItem = () => {
    return (
        <WrapProductItem sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box
                sx={{
                    flex: '1 4',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Skeleton width="100px" height="100px" />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flex: '4 1', flexDirection: 'column', gap: '12px' }}>
                <Stack
                    sx={{
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: '8px',
                    }}
                >
                    <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Skeleton width="100%" height="32px" />
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                            <Skeleton width="70px" height="18px" />
                            <Skeleton width="70px" height="18px" />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Skeleton width="70px" height="32px" />
                        <Skeleton width="70px" height="32px" />
                    </Box>
                </Stack>
                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        <Skeleton width="70px" height="32px" />
                        <Skeleton width="70px" height="32px" />
                    </Box>
                    <WrapDelete>
                        <Skeleton width="40px" height="32px" />
                    </WrapDelete>
                </Stack>
            </Box>
        </WrapProductItem>
    );
};

ProductItem.SkeletonProductItem = SkeletonProductItem;

export default ProductItem;
