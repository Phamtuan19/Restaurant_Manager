import { Box, styled, Grid, Stack, Button, FormControl, Select, MenuItem, Menu } from '@mui/material';
import { AddNew } from '~/component/Icons';

import React, { createContext, useEffect, useState } from 'react';
import productSeviver from '~/services/product.service';
import Product from './component/Product';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import ModalConfig from './component/ModalConfig';

const CONTENTMODAL = {
    addProduct: 'addProduct',
    addCategory: 'addCategory',
    detailProduct: 'detailProduct',
};

export const ContextModalMenu = createContext();

function ProductsList() {
    const [productList, setProductList] = useState([]);
    const [select, setSelect] = useState(10);
    const [openModal, setOpenModal] = useState(false);
    const [contentModal, setContentModal] = useState({ component: 'addProduct', data: null });

    const [reRender, setReRender] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await productSeviver.adminProducts();
            console.log(res);
            setProductList(res.products);
        })();
    }, [reRender]);

    const handleOpenModal = (value, data = null) => {
        setOpenModal(true);
        setContentModal((prev) => ({ component: value, data }));
    };

    return (
        <ContextModalMenu.Provider value={{ setReRender }}>
            <Header>
                <Box sx={{ fontSize: '1.6rem' }}>Danh sách sản phẩm</Box>

                <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <Button variant="contained" {...bindTrigger(popupState)}>
                                    <AddNew width="16px" height="16px" fill="#fff" sx={{ marginRight: '6px' }} />
                                    Thêm mới
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem
                                        onClick={() => {
                                            popupState.close();
                                            handleOpenModal(CONTENTMODAL.addProduct);
                                        }}
                                    >
                                        <AddNew width="16px" height="16px" fill="#000" sx={{ marginRight: '6px' }} />
                                        Thêm sản phẩm
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            popupState.close();
                                            handleOpenModal(CONTENTMODAL.addCategory);
                                        }}
                                    >
                                        <AddNew width="16px" height="16px" fill="#000" sx={{ marginRight: '6px' }} />
                                        Thêm danh mục
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </PopupState>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <Select
                            id="demo-select-small"
                            value={select}
                            onChange={(event) => setSelect(event.target.value)}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Header>

            <Box>
                <Grid container spacing={2}>
                    {productList.map((item, index) => {
                        return (
                            <Grid
                                item
                                xs={3}
                                key={index}
                                onClick={() => handleOpenModal(CONTENTMODAL.detailProduct, item.id)}
                            >
                                <Product data={item} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <ModalConfig openModal={openModal} setOpenModal={setOpenModal} contentModal={contentModal} />
        </ContextModalMenu.Provider>
    );
}

const Header = styled('header')({
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export default ProductsList;
