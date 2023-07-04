import { Outlet } from 'react-router-dom';
import Loadable from './component/Loadable';
import { lazy } from 'react';

const Bartender = Loadable(lazy(() => import('~/page/admin/Bartender')));
const CategoriesPage = Loadable(lazy(() => import('~/page/admin/Categories')));
const CategoriesCreate = Loadable(lazy(() => import('~/page/admin/Categories-create')));
const DashboardPage = Loadable(lazy(() => import('~/page/admin/DashboardPage')));
const ProductList = Loadable(lazy(() => import('~/page/admin/ProductList')));
const ProductCreate = Loadable(lazy(() => import('~/page/admin/Product-create')));
const TablePage = Loadable(lazy(() => import('~/page/admin/TablePage')));
const TableCreate = Loadable(lazy(() => import('~/page/admin/Table-create')));

const routeAdmin = {
   path: '',
   element: <Outlet />,
   children: [
      {
         path: 'dashboard',
         element: <DashboardPage />,
      },
      {
         path: 'tables',
         element: <Outlet />,
         children: [
            {
               index: true,
               element: <TablePage />,
            },
            {
               path: 'create',
               element: <TableCreate />,
            },
         ],
      },
      {
         path: 'products',
         element: <Outlet />,
         children: [
            {
               index: true,
               element: <ProductList />,
            },
            {
               path: 'create',
               element: <ProductCreate />,
            },
         ],
      },
      {
         path: 'categories',
         element: <Outlet />,
         children: [
            {
               index: true,
               element: <CategoriesPage />,
            },
            {
               path: 'create',
               element: <CategoriesCreate />,
            },
         ],
      },
      {
         path: 'bartender',
         element: <Bartender />,
      },
   ],
};

export default routeAdmin;
