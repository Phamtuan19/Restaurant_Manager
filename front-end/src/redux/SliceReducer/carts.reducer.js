import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import setToastMessage from '~/Helpers/toastMessage';

const cartsReducer = createSlice({
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
      actionUp: (state, action) => {
         const currentItem = state.find((item) => item.id === action.payload.id);

         currentItem.quantity = currentItem.quantity + 1;
      },
      actionDown: (state, action) => {
         const currentItem = state.find((item) => item.id === action.payload.id);

         currentItem.quantity = currentItem.quantity - 1;
      },
      deleteCartItem: (state, action) => {
         return state.filter((item) => item.id !== action.payload.id);
      },

      deleteCart: (state, action) => {
         return (state = []);
      },
   },
});

const { addToCart, actionUp, actionDown, deleteCartItem, deleteCart } = cartsReducer.actions;

export const useCart = () => {
   const dispatch = useDispatch();

   const listCart = useSelector((state) => state.carts);

   const actionAddCart = (payload) => {
      setToastMessage('thêm sản phẩm thành công!', 'success');
      dispatch(addToCart({ ...payload }));
   };

   const handleUp = (payload) => {
      dispatch(actionUp(payload));
   };
   const handleDown = (payload) => {
      dispatch(actionDown(payload));
   };

   const actionDeleteCartItem = (payload) => {
      dispatch(deleteCartItem({ ...payload }));
   };

   const clearCart = (payload) => {
      dispatch(deleteCart(payload));
   };

   return { listCart, actionAddCart, handleUp, handleDown, actionDeleteCartItem, clearCart };
};

export default cartsReducer;
