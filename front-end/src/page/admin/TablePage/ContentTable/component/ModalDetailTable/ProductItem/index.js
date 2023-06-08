import { Box, Stack, styled } from '@mui/material';
import { memo } from 'react';
import fomatMoney from '~/Helpers/fomatMoney';
import { Delete } from '~/component/Icons';

function ProductItem({ data }) {
    return (
        <ProductItemModal>
            <Box sx={{ width: '70px', height: '70px', overflow: 'hidden' }}>
                <Image src={data?.products?.image} alt={data?.products?.name} />
            </Box>
            <ProductItemModalDetail>
                <h3 style={{ marginTop: '8px' }}>{data?.products?.name}</h3>
                <Stack sx={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <span style={{ color: 'var(--color-red)', marginRight: '12px' }}>
                            {fomatMoney(data?.products?.price_sale || data?.products?.price)}
                        </span>
                    </Box>

                    <Box>x{data.quantity}</Box>

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h3: {
        marginBottom: '12px',
        fontSize: '1rem',
        fontFamily: '"Roboto Slab",serif !important',
    },
});

export default memo(ProductItem);
