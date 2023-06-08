import { Box, Stack, TextField, styled } from '@mui/material';
import { memo } from 'react';
import fomatMoney from '~/Helpers/fomatMoney';
import { Delete } from '~/component/Icons';

function ProductItem({ data }) {
    return (
        <ProductItemModal>
            <Box sx={{ width: '70px', height: '70px', overflow: 'hidden' }}>
                <Image src={data?.image} alt={data?.name} />
            </Box>
            <ProductItemModalDetail>
                <h3>{data?.name}</h3>
                <Stack sx={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box>
                        <span style={{ color: 'var(--color-red)', marginRight: '12px' }}>
                            {fomatMoney(data?.price_sale || data?.price)}
                        </span>
                        <span style={{ textDecoration: 'line-through', fontSize: '.9rem' }}>
                            {fomatMoney(data?.price || data?.price_sale)}
                        </span>
                    </Box>
                    <TextField
                        type="number"
                        sx={{ width: '70px ', bottom: '10px', height: '20px' }}
                        value={data.quantity}
                        size="small"
                    />

                    <Box>
                        <Box>
                            <Delete style={{ color: '#fff' }} />
                        </Box>
                    </Box>
                </Stack>
            </ProductItemModalDetail>
        </ProductItemModal>
    );
}

const ProductItemModal = styled('div')({
    padding: '12px 0',
    display: 'flex',
    cursor: 'pointer',
    gap: '0 24px',
});

const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

const ProductItemModalDetail = styled('div')({
    flex: 1,

    h3: {
        marginBottom: '12px',
        fontSize: '1rem',
        fontFamily: '"Roboto Slab",serif !important',
    },
});

export default memo(ProductItem);
