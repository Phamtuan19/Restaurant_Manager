import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const a = [
   {
      category_id: 20,
      code: 51960,
      cost_capital: 1,
      created_at: '2023-06-18 22:27:44',
      description: '',
      id: 6,
      image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2Fca-phe-den-da.webp252f177a-72b0-4b65-953a-332ae8705221?alt=media&token=96fa9310-fe0c-4fb0-a227-b58e06e4d3e8',
      name: 'Cafe đen1',
      price: 2,
      price_sale: null,
      quantity: 1,
      updated_at: '2023-06-18 22:27:44',
      user_id: 1,
   },
   {
      category_id: 20,
      code: 51960,
      cost_capital: 1,
      created_at: '2023-06-18 22:27:44',
      description: '',
      id: 61,
      image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2Fca-phe-den-da.webp252f177a-72b0-4b65-953a-332ae8705221?alt=media&token=96fa9310-fe0c-4fb0-a227-b58e06e4d3e8',
      name: 'Cafe đen2',
      price: 2,
      price_sale: null,
      quantity: 1,
      updated_at: '2023-06-18 22:27:44',
      user_id: 1,
   },
   {
      category_id: 20,
      code: 51960,
      cost_capital: 1,
      created_at: '2023-06-18 22:27:44',
      description: '',
      id: 62,
      image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2Fca-phe-den-da.webp252f177a-72b0-4b65-953a-332ae8705221?alt=media&token=96fa9310-fe0c-4fb0-a227-b58e06e4d3e8',
      name: 'Cafe đen3',
      price: 2,
      price_sale: null,
      quantity: 1,
      updated_at: '2023-06-18 22:27:44',
      user_id: 1,
   },
   {
      category_id: 20,
      code: 51960,
      cost_capital: 1,
      created_at: '2023-06-18 22:27:44',
      description: '',
      id: 64,
      image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2Fca-phe-den-da.webp252f177a-72b0-4b65-953a-332ae8705221?alt=media&token=96fa9310-fe0c-4fb0-a227-b58e06e4d3e8',
      name: 'Cafe đen4',
      price: 2,
      price_sale: null,
      quantity: 1,
      updated_at: '2023-06-18 22:27:44',
      user_id: 1,
   },
   {
      category_id: 20,
      code: 51960,
      cost_capital: 1,
      created_at: '2023-06-18 22:27:44',
      description: '',
      id: 65,
      image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2Fca-phe-den-da.webp252f177a-72b0-4b65-953a-332ae8705221?alt=media&token=96fa9310-fe0c-4fb0-a227-b58e06e4d3e8',
      name: 'Cafe đen5',
      price: 2,
      price_sale: null,
      quantity: 1,
      updated_at: '2023-06-18 22:27:44',
      user_id: 1,
   },
   {
      category_id: 20,
      code: 51960,
      cost_capital: 1,
      created_at: '2023-06-18 22:27:44',
      description: '',
      id: 66,
      image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2Fca-phe-den-da.webp252f177a-72b0-4b65-953a-332ae8705221?alt=media&token=96fa9310-fe0c-4fb0-a227-b58e06e4d3e8',
      name: 'Cafe đen6',
      price: 2,
      price_sale: null,
      quantity: 1,
      updated_at: '2023-06-18 22:27:44',
      user_id: 1,
   },
];

const cartsReducer = createSlice({
   name: 'carts',
   initialState: a,

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

   const useAddCart = (payload) => {
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

   return { listCart, useAddCart, handleUp, handleDown, actionDeleteCartItem, clearCart };
};

export default cartsReducer;
