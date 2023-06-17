/* eslint-disable array-callback-return */
import { Box, Stack, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import fomatMoney from '~/Helpers/fomatMoney';
import { AddNewIcon, Delete } from '~/component/Icons';
// import Categories from '~/page/admin/TablePage/component/ModalChild/Categories';
import ordersService from '~/services/orders.service';
import { ContextModalBooking } from '..';

function ChildMenu({ openModalMenu, setOpenModelMenu }) {
    const [listProducts, setListProducts] = useState([]);
    const [searchMenu, setSearchMenu] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        const apiGetMenu = async (query) => {
            console.log(query);
            const res = await ordersService.getMenuOrderProducts(query);
            setListProducts(res.products);
        };

        apiGetMenu(query);
    }, [query]);

    if (openModalMenu) {
        return (
            <Box
                sx={{
                    minHeight: { xs: 580, md: 'auto' },
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: '#fff',
                    borderRadius: '5px',
                    width: { xs: '100%', md: 500 },
                    transform: { xs: 'translate(0%, -0.2%)', lg: 'translate(102%, -0.2%)' },
                }}
            >
                <Box sx={{ position: 'relative', borderBottom: '1px solid rgb(224, 227, 231)', padding: '12px' }}>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            transform: 'translate(50%, -50%)',
                        }}
                        onClick={() => setOpenModelMenu(false)}
                    >
                        <Delete />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ fontSize: '1.3rem' }}>Danh sách sản phẩm</Box>
                        <TextField
                            variant="standard"
                            size="small"
                            value={searchMenu}
                            onChange={(e) => setSearchMenu(e.target.value)}
                        />
                    </Box>
                </Box>
                <Box sx={{ height: 540, px: '1rem' }}>
                    {/* <Categories setQuery={setQuery} /> */}

                    <Box sx={{ ...styleModalChild }}>
                        {listProducts.length > 0 ? (
                            listProducts.map((item) => {
                                if (item.name.includes(searchMenu)) {
                                    return <Product key={v4()} data={item} />;
                                }
                            })
                        ) : (
                            <Box mt={3}>Không có sản phẩm</Box>
                        )}
                    </Box>
                </Box>
            </Box>
        );
    }
}

const styleModalChild = {
    maxHeight: 540,
    overflow: 'scroll',
    '::-webkit-scrollbar': {
        width: '0',
    },
};

const Product = ({ data }) => {
    const { cartBooking, setCartBooking } = useContext(ContextModalBooking);

    const handleAddCart = (data) => {
        const { id } = data;

        const existingItem = cartBooking.find((item) => item.id === id);

        if (existingItem) {
            const updatedCart = cartBooking.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
            );
            setCartBooking(updatedCart);
        } else {
            const newItem = { ...data, quantity: 1 };
            setCartBooking([...cartBooking, newItem]);
        }
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
                    <Box onClick={() => handleAddCart(data)}>
                        <AddNewIcon style={{ color: '#fff' }} />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default ChildMenu;
