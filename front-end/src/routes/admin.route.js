import Loadable from './component/Loadable';
import { lazy } from 'react';

const Bartender = Loadable(lazy(() => import('~/page/admin/Bartender')));
const CategoriesPage = Loadable(lazy(() => import('~/page/admin/Categories')));
const DashboardPage = Loadable(lazy(() => import('~/page/admin/DashboardPage')));
const ProductList = Loadable(lazy(() => import('~/page/admin/ProductList')));
const ProductCreate = Loadable(lazy(() => import('~/page/admin/ProductCreate')));
const TablePage = Loadable(lazy(() => import('~/page/admin/TablePage')));

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
      component: ProductList,
   },
   {
      path: '/products/create',
      component: ProductCreate,
   },
   {
      path: '/categories',
      component: CategoriesPage,
   },
   {
      path: '/bartender',
      component: Bartender,
   },
];

export default routeAdmin;
