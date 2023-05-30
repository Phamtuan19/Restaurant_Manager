import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

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

const { addToCart, setQuantityCartItem, deleteCartItem } = cartSlice.actions;

export const useCart = () => {
    const dispatch = useDispatch();

    const listCart = useSelector((state) => state.carts);

    const useAddCart = (payload) => {
        dispatch(addToCart({ ...payload }));
    };

    const useQuantityCartItem = (payload) => {
        dispatch(setQuantityCartItem({ ...payload }));
    };

    const useDeleteCartItem = (payload) => {
        dispatch(deleteCartItem({ ...payload }));
    };

    return { listCart, useAddCart, useQuantityCartItem, useDeleteCartItem };
};

export default cartSlice;
