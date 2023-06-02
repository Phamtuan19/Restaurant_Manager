import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './SliceReducer/CartsReducer';
import authReducer from './SliceReducer/AuthReducer';

const rootReducer = combineReducers({
    [cartReducer.name]: cartReducer.reducer,
    [authReducer.name]: authReducer.reducer,
});

export default rootReducer;
