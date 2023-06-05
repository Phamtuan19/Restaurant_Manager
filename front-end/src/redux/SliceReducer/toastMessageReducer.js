import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { createSlice } = require('@reduxjs/toolkit');

// const notifyTypes = ['success', 'info', 'warning', 'error'];

const showToast = (message, type) => {
    return toast[type](message);
};

const toastMessageReducer = createSlice({
    name: 'toastMessage',
    initialState: {
        message: 'Message Toast',
        type: 'info',
    },

    reducers: {
        setToastMessage: (state, account) => {
            showToast(account?.payload?.message || state.message, account?.payload?.type || state.type);
        },
    },
});

export const { setToastMessage } = toastMessageReducer.actions;

export const useSetNotifyState = () => {
    const dispatch = useDispatch();
    const setToastInformation = (payload) => {
        dispatch(setToastMessage(payload));
    };
    return { setToastInformation };
};

export default toastMessageReducer;
