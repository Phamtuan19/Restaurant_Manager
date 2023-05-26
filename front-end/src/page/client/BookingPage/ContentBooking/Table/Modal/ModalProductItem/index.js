import { Box, Stack, styled } from '@mui/material';
import { useContext } from 'react';
import { AddNewIcon, Delete } from '~/component/Icons';
import { ContextModalBooking } from '..';

function ModalProductItem({ data, iconDelete = false }) {
    const { handleClickAddProduct, handleDeleteProduct } = useContext(ContextModalBooking);

    return (
        <ProductItemModal>
            <Box sx={{ width: '70px', flex: 0.3, display: 'flex', justifyContent: 'center' }}>
                <img width="70px" src={data.img} alt={data.title} />
            </Box>
            <ProductItemModalDetail>
                <h3>{data.title}</h3>
                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box>
                        <span style={{ color: 'var(--color-red)', marginRight: '12px' }}>{data.price}</span>
                        <span style={{ textDecoration: 'line-through', fontSize: '.9rem' }}>15.000đ</span>
                    </Box>

                    {iconDelete ? <Box>x{data.quantity}</Box> : ''}

                    {iconDelete ? (
                        <Box onClick={() => handleDeleteProduct(data)}>
                            <Delete style={{ color: '#fff' }} />
                        </Box>
                    ) : (
                        <Box onClick={() => handleClickAddProduct(data)}>
                            <AddNewIcon style={{ color: '#fff' }} />
                        </Box>
                    )}
                </Stack>
            </ProductItemModalDetail>
        </ProductItemModal>
    );
}

const ProductItemModal = styled('div')({
    padding: '12px 1rem',
    display: 'flex',
    cursor: 'pointer',
});

const ProductItemModalDetail = styled('div')({
    flex: 1,

    h3: {
        marginBottom: '12px',
        fontSize: '1rem',
        fontFamily: '"Roboto Slab",serif !important',
    },
});

export default ModalProductItem;
