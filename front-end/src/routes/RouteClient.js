import MenuPage from '~/page/client/MenuPage';
import HomePage from '~/page/client/HomePage';
import CartPage from '~/page/client/CartPage';
import LoginPage from '~/page/client/LoginPage';
import LoginGoogle from '~/page/client/LoginGoogle';

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
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/auth/google',
        component: LoginGoogle,
    },
];

export default routeClient;
