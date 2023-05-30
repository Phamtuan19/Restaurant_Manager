/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { Box, Stack, TextField, styled } from '@mui/material';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';
import { Delete } from '~/component/Icons';
import { useCart } from '~/redux/SliceReducer/CartsReducer';

function ProductItem({ data }) {
    const { currencyFormatting } = useContext(SkeletonLoading);
    const { useQuantityCartItem, useDeleteCartItem } = useCart();

    const handleChangeQuantity = (e, data) => {
        useQuantityCartItem({ ...data, quantityVal: e.target.value });
    };

    const handleClickDelete = (data) => {
        useDeleteCartItem(data);
    };

    return (
        <WrapProductItem sx={{ flexDirection: { xs: 'column', sm: 'row' }, position: 'relative' }}>
            <Box sx={{ marginRight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={data.img} alt={data.title} />
            </Box>

            <Box sx={{ flex: '1 1', padding: '1rem' }}>
                <Stack
                    sx={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: '100%',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid #e3e1e1',
                    }}
                >
                    <Box sx={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flex: 2 }}>
                            <ProductTitle>{data.title}</ProductTitle>
                            <Box sx={{ fontSize: '14px', color: 'rgb(149 152 149 / 75%)', marginBottom: '1rem' }}>
                                <span style={{ marginRight: '12px' }}>Status : </span>
                                <span style={{ color: 'var(--toastify-color-success)' }}>Còn hàng</span>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 1, fontSize: '16px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '12px', fontWeight: 500 }}>
                                {currencyFormatting(data.price)}
                            </span>
                            <span style={{ fontSize: '14px', color: 'red', textDecoration: 'line-through' }}>
                                {currencyFormatting(data.price)}
                            </span>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0 12px' }}>
                        <TextField
                            type="number"
                            variant="outlined"
                            size="small"
                            value={data.quantity}
                            onChange={(e) => handleChangeQuantity(e, data)}
                            sx={{ width: '70px' }}
                        />
                    </Box>
                </Stack>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '-.5rem',
                    right: '-.5rem',
                    cursor: 'pointer',
                }}
                onClick={() => handleClickDelete(data)}
            >
                <Delete />
            </Box>
        </WrapProductItem>
    );
}

const WrapProductItem = styled('div')({
    padding: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    border: '1px solid #fff',
    borderRadius: '1.5rem',
});

const Image = styled('img')({
    width: '120px',
    height: '120px',
    border: '1px solid #fff',
    borderRadius: '50%',
    cursor: 'pointer',
});

const ProductTitle = styled('h3')({
    marginBottom: '1rem',
    fontFamily: '"Roboto Slab",serif',
    display: 'initial-block',
    cursor: 'pointer',

    '&:hover': {
        color: '#0072E5',
    },
});

export default ProductItem;
