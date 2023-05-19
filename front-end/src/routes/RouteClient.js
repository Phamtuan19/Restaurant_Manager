import MenuPage from '~/page/MenuPage';
import HomePage from '~/page/HomePage';
import CartPage from '~/page/CartPage';
import LoginPage from '~/page/LoginPage';
import LoginGoogle from '~/page/LoginGoogle';

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
