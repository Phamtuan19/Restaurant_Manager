// import { createStore } from 'redux';
// import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './SliceReducer/CartsReducer';

// const store = createStore(rootReducer);

const store = configureStore({
    reducer: {
        carts: cartSlice.reducer,
    },
});

export default store;
