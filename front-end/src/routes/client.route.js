import MenuPage from '~/page/client/MenuPage';
import HomePage from '~/page/client/HomePage';
import CartPage from '~/page/client/CartPage';
import LoginPage from '~/page/client/LoginPage';
import LoginGoogle from '~/page/client/LoginGoogle';

import SignUpPage from '~/page/client/SignUpPage';
import PublicRouter from './component/PublicRouter';
import BookingPage from '~/page/client/BookingPage';
import NotFound from '~/page/error/NotFound';

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
        gurad: PublicRouter,
    },
    {
        path: '/sign-up',
        component: SignUpPage,
        gurad: PublicRouter,
    },
    {
        path: '/auth/google',
        component: LoginGoogle,
        gurad: PublicRouter,
    },
    {
        path: '/*',
        component: NotFound,
    },
];

export default routeClient;
