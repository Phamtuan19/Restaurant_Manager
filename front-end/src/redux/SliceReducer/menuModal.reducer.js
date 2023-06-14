import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import ordersService from '~/services/orders.service';

const actionGetModalMenu = createAsyncThunk('modalMenu/actionGetModalMenu', async (action, payload) => {
    const dataCategories = await ordersService.getMenuOrderCategories();
    const dataProducts = await ordersService.getMenuOrderProducts('');
    return {
        categories: dataCategories.categories,
        products: dataProducts.products,
    };
});

const modalMenuReducer = createSlice({
    name: 'modalMenu',
    initialState: {
        categories: null,
        products: null,
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actionGetModalMenu.fulfilled, (state, action) => {
                state.categories = action.payload.categories;
                state.products = action.payload.products;
            })
            .addCase(actionGetModalMenu.rejected, (state, action) => {
                state.categories = null;
                state.products = null;
            });
    },
});

export const useModalMenu = () => {
    const dispatch = useDispatch();

    const listModalMenu = useSelector((state) => state.modalMenu);

    const getModalMenu = () => {
        dispatch(actionGetModalMenu());
    };

    return { ...listModalMenu, getModalMenu };
};

export default modalMenuReducer;
