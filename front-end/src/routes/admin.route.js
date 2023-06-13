import CategoriesPage from '~/page/admin/Categories';
import DashboardPage from '~/page/admin/DashboardPage';
import MenuPage from '~/page/admin/MenuPage';
import ProductCreate from '~/page/admin/ProductCreate';
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
        path: '/products',
        component: MenuPage,
    },
    {
        path: '/products/create',
        component: ProductCreate,
    },
    {
        path: '/categories',
        component: CategoriesPage,
    },
];

export default routeAdmin;
