import React, { useContext } from 'react';
import { contextModal } from '~/page/admin/TablePage';

function ModalMenuProduct() {
    const { tableId, setRenderTables } = useContext(contextModal);
    const { setLoadingEffect } = useContext(ContextModalChild);

    const handleAddProduct = async (dataProduct) => {
        const data = {
            tableId,
            price: dataProduct.price_sale || dataProduct.price,
            productId: dataProduct.id,
        };

        await ordersService.postOrderAdmin(tableId, data);
        setRenderTables((prev) => !prev);
        setLoadingEffect((prev) => !prev);
    };

    return (
        <Box sx={{ padding: '12px 0', display: 'flex', cursor: 'pointer', gap: '0 24px' }}>
            <Box sx={{ width: '70px', height: '70px', overflow: 'hidden' }}>
                <img src={data?.image} alt={data?.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
                <Box sx={{ marginBottom: '12px', fontSize: '1rem', fontFamily: '"Roboto Slab",serif !important' }}>
                    {data?.name}
                </Box>
                <Stack sx={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box>
                        <span style={{ color: 'var(--color-red)', marginRight: '12px' }}>
                            {fomatMoney(data?.price_sale || data?.price)}
                        </span>
                        <span style={{ textDecoration: 'line-through', fontSize: '.9rem' }}>
                            {fomatMoney(data?.price || data?.price_sale)}
                        </span>
                    </Box>
                    <Box onClick={() => handleAddProduct(data)}>
                        <AddNewIcon style={{ color: '#fff' }} />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default ModalMenuProduct;
