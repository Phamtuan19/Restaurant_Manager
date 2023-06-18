import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const notifyTypes = ['success', 'info', 'warning', 'error'];

const setToastMessage = (message, type = 'success') => {
    if (message && type) {
        return toast[type](message, {
            theme: 'colored',
        });
    }
};
export default setToastMessage;
