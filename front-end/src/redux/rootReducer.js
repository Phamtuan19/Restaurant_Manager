import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './SliceReducer/authReducer';
import cartsReducer from './SliceReducer/cartsReducer';

const rootReducer = combineReducers({
    [cartsReducer.name]: cartsReducer.reducer,
    [authReducer.name]: authReducer.reducer,
});

export default rootReducer;
