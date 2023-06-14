import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './SliceReducer/auth.reducer';
import cartsReducer from './SliceReducer/carts.reducer';
import modalMenuReducer from './SliceReducer/menuModal.reducer';

const rootReducer = combineReducers({
    [authReducer.name]: authReducer.reducer,
    [cartsReducer.name]: cartsReducer.reducer,
    [modalMenuReducer.name]: modalMenuReducer.reducer,
});

export default rootReducer;
