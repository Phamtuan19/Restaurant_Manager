import { useDispatch, useSelector } from 'react-redux';
import { actionGetCurrentUser, actionLogin, actionLogout } from '~/redux/SliceReducer/auth.reducer';

export default function useAuth() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);

    const getUser = () => {
        dispatch(actionGetCurrentUser());
    };

    const loginAccount = (data) => {
        dispatch(actionLogin(data));
    };

    const logoutAccount = () => {
        dispatch(actionLogout());
    };

    return { ...state, getUser, loginAccount, logoutAccount };
}
