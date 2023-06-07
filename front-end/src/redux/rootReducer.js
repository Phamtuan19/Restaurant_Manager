import { combineReducers } from '@reduxjs/toolkit';
import cartsReducer from './SliceReducer/cartsReducer';
import authReducer from './SliceReducer/authReducer';
import cartsTableAdmin from './SliceReducer/cartsTableAdmin';

const rootReducer = combineReducers({
    [cartsReducer.name]: cartsReducer.reducer,
    [authReducer.name]: authReducer.reducer,
    [cartsTableAdmin.name]: cartsTableAdmin.reducer,
});

export default rootReducer;
