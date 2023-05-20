import DashboardPage from '~/page/admin/DashboardPage';
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
];

export default routeAdmin;
