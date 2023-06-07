import { Box, Stack, TextField, styled } from '@mui/material';
import { memo, useContext } from 'react';
import fomatMoney from '~/Helpers/fomatMoney';
import { AddNewIcon, Delete } from '~/component/Icons';
import { ContentModal } from '..';

function ProductItem({ data, type = null }) {
    const { setOrders } = useContext(ContentModal);

    const handleAddToCart = (data) => {
        setOrders((prev) => {
            const product = prev.find((item) => item.id === data.id);
            if (product) {
                return prev.map((item) => {
                    if (item.id === data.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }

                    return item;
                });
            }

            return [...prev, { ...data, quantity: 1 }];
        });
    };

    const handleDelete = (data) => {
        setOrders((prev) => {
            return prev.filter((item) => item.id !== data.id);
        });
    };

    const handleSetQuantity = (data, number) => {
        setOrders((prev) => {
            const orders = prev.map((item) => {
                if (item.id === data.id) {
                    if (number < 1) {
                        return { ...item, quantity: 1 };
                    }
                    return { ...item, quantity: number };
                }
                return item;
            });

            return orders;
        });
    };

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
                    {type ? (
                        <TextField
                            type="number"
                            sx={{ width: '70px ', bottom: '10px', height: '20px' }}
                            value={data.quantity}
                            size="small"
                            onChange={(e) => handleSetQuantity(data, e.target.value)}
                        />
                    ) : (
                        ''
                    )}

                    <Box>
                        {type ? (
                            <Box onClick={() => handleDelete(data)}>
                                <Delete style={{ color: '#fff' }} />
                            </Box>
                        ) : (
                            <Box onClick={() => handleAddToCart(data)}>
                                <AddNewIcon style={{ color: '#fff' }} />
                            </Box>
                        )}
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
