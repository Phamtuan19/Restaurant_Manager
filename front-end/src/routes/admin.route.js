import CategoriesList from '~/page/admin/Categories/CategoriesList';
import CategoriesCreate from '~/page/admin/Categories/CategoriesCreate';
import DashboardPage from '~/page/admin/DashboardPage';
import MenuPage from '~/page/admin/MenuPage';
import ProductCreate from '~/page/admin/Products/ProductsCreate';
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
        component: CategoriesList,
    },
    {
        path: '/categories/create',
        component: CategoriesCreate,
    },
];

export default routeAdmin;
