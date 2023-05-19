import MenuPage from '~/page/MenuPage';
import HomePage from '~/page/HomePage';
import CartPage from '~/page/CartPage';

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
];

export default routeClient;
