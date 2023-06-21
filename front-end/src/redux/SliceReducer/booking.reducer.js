/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '~/hook/useAuth';

const bookingReducer = createSlice({
   name: 'booking',
   initialState: {
      user: null,
      products: [],
   },
   reducers: {
      setUser: (state, action) => {
         state.user = action.payload;
      },
      addToCartBooking: (state, action) => {
         console.log(action.payload);

         const item = state.products.find((item) => item.id === action.payload.id);
         if (item) {
            const newCarts = state.products.filter((val) => val.id !== item.id);
            return {
               ...state,
               products: [...newCarts, { ...item, quantity: item.quantity + 1 }],
            };
         }

         return {
            ...state,
            products: [...state.products, { ...action.payload, quantity: 1 }],
         };
      },

      setQuantityCartItem: (state, action) => {
         const updatedCarts = state.products.map((item) => {
            if (item.id === action.payload.id) {
               return {
                  ...item,
                  quantity: action.payload.quantityVal < 1 ? 1 : action.payload.quantityVal,
               };
            }
            return item;
         });

         return { ...state, products: updatedCarts };
      },
      deleteCartItem: (state, action) => {
         const newCarts = state.products.filter((item) => item.id !== action.payload);
         return { ...state, products: newCarts };
      },
   },
});

const { setUser, addToCartBooking, setQuantityCartItem, deleteCartItem } = bookingReducer.actions;

export const useBooking = () => {
   const dispatch = useDispatch();

   const listModalMenu = useSelector((state) => state.booking);

   const bookingAddProduct = (payload) => {
      dispatch(addToCartBooking(payload));
   };

   const setBookingUser = (payload) => {
      dispatch(setUser(payload));
   };

   const actionDeleteCartItem = (payload) => {
      dispatch(deleteCartItem(payload));
   };

   const actionSetQuantityItem = (payload) => {
      dispatch(setQuantityCartItem(payload));
   };

   return { ...listModalMenu, bookingAddProduct, setBookingUser, actionDeleteCartItem, actionSetQuantityItem };
};

export default bookingReducer;
