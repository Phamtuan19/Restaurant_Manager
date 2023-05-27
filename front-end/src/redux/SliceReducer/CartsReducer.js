
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'carts',
    initialState: [],

    reducers: {
        addToCart: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id);
            if (item) {
                const newCarts = state.filter((val) => val.id !== item.id);
                return [...newCarts, { ...item, quantity: item.quantity + 1 }];
            }
            return [...state, { ...action.payload, quantity: 1 }];
        },
        setQuantityCartItem: (state, action) => {
            const currentItem = state.find((item) => item.id === action.payload.id);

            currentItem.quantity = action.payload.quantityVal < 1 ? 1 : action.payload.quantityVal;
        },
        deleteCartItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

export default cartSlice;
