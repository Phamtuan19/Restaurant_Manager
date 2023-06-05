import { Box, Stack, styled } from '@mui/material';
import { AddNewIcon } from '~/component/Icons';

function ProductItem({ data }) {
    return (
        <ProductItemModal>
            <Box sx={{ width: '70px', overflow: 'hidden' }}>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2Fshopping%20(1).webp71d97b1c-4ce4-4b97-a6f6-646f810ff6ca?alt=media&token=8b71f879-c035-4011-8959-9af168e3bae8"
                    alt="title"
                />
            </Box>
            <ProductItemModalDetail>
                <h3>product name</h3>
                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box>
                        <span style={{ color: 'var(--color-red)', marginRight: '12px' }}>15.000đ</span>
                        <span style={{ textDecoration: 'line-through', fontSize: '.9rem' }}>15.000đ</span>
                    </Box>

                    <Box>
                        <AddNewIcon style={{ color: '#fff' }} />
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

export default ProductItem;
