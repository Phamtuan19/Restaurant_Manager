import AddProducts from '~/page/admin/AddProducts';
import DashboardPage from '~/page/admin/DashboardPage';
import MenuPage from '~/page/admin/MenuPage';
import TablePage from '~/page/admin/TablePage';

const routeAdmin = [
    {
        path: '/dashboard',
        component: DashboardPage,
    },
    {
        path: '/table',
        component: TablePage,
    },
    {
        path: '/menu',
        component: MenuPage,
    },
    {
        path: '/products/create',
        component: AddProducts,
    },
];

export default routeAdmin;
