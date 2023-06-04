import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const notifyTypes = ['success', 'info', 'warning', 'error'];

const setToastMessage = (message, type) => {
    if (message && type) {
        return toast[type](message, {
            theme: 'colored',
        });
    }
};
export default setToastMessage;
