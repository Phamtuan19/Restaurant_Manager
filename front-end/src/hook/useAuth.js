import { useDispatch, useSelector } from 'react-redux';
import { actionGetCurrentUser, actionLogin } from '~/redux/SliceReducer/authReducer';

export default function useAuth() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);

    const getUser = () => {
        dispatch(actionGetCurrentUser());
    };

    const loginAccount = (data) => {
        dispatch(actionLogin(data));
    };

    return { ...state, getUser, loginAccount };
}
