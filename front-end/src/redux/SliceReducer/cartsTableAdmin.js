/* eslint-disable react-hooks/rules-of-hooks */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import productSeviver from '~/services/product.service';
import tableService from '~/services/tables.service';

export const fetchTables = createAsyncThunk('tableAdmin/fetchTables', async (params, thunkAPI) => {
    const getAdminTables = await tableService.getAdminTables();
    const getMenu = await tableService.getTableModalMenuProducts();
    const getcategories = await productSeviver.adminProductsCategories();
    return {
        tables: getAdminTables.tables,
        menu: getMenu.products,
        categories: getcategories.categories,
    };
});

const cartsTableAdmin = createSlice({
    name: 'cartAdmin',
    initialState: {
        tables: null,
        menu: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTables.fulfilled, (state, action) => {
                state.tables = action.payload.tables;
                state.menu = action.payload.menu;
                state.categories = action.payload.categories;
            })
            .addCase(fetchTables.rejected, (state, action) => {
                console.error(action.error.message);
            });
    },
});

export const useCartAdmin = () => {
    const dispatch = useDispatch();

    const tables = useSelector((state) => state.cartAdmin.tables);
    const menu = useSelector((state) => state.cartAdmin.menu);
    const categories = useSelector((state) => state.cartAdmin.categories);

    const dispatchFetchTables = () => {
        dispatch(fetchTables());
    };

    return { tables, menu, categories, dispatchFetchTables };
};

export default cartsTableAdmin;
