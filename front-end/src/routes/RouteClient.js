import MenuPage from '~/page/client/MenuPage';
import HomePage from '~/page/client/HomePage';
import CartPage from '~/page/client/CartPage';
import LoginPage from '~/page/client/LoginPage';
import LoginGoogle from '~/page/client/LoginGoogle';
import BookingPage from '~/page/client/BookingPage';
import ProtectedRoute from '~/component/ProtectedRoute';
import SignUpPage from '~/page/client/SignUpPage';

const routeClient = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/menu',
        component: MenuPage,
    },
    {
        path: '/shopping-cart',
        component: CartPage,
    },
    {
        path: '/booking',
        component: BookingPage,
    },
    {
        path: '/login',
        component: LoginPage,
        gurad: ProtectedRoute,
    },
    {
        path: '/sing-up',
        component: SignUpPage,
        gurad: ProtectedRoute,
    },
    {
        path: '/auth/google',
        component: LoginGoogle,
    },
];

export default routeClient;
