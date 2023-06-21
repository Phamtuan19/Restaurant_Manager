import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './SliceReducer/auth.reducer';
import cartsReducer from './SliceReducer/carts.reducer';
import bookingReducer from './SliceReducer/booking.reducer';

const rootReducer = combineReducers({
   [authReducer.name]: authReducer.reducer,
   [cartsReducer.name]: cartsReducer.reducer,
   [bookingReducer.name]: bookingReducer.reducer,
});

export default rootReducer;
