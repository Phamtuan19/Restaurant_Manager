import { combineReducers } from '@reduxjs/toolkit';
import cartsReducer from './SliceReducer/cartsReducer';
import authReducer from './SliceReducer/authReducer';

const rootReducer = combineReducers({
    [cartsReducer.name]: cartsReducer.reducer,
    [authReducer.name]: authReducer.reducer,
});

export default rootReducer;
