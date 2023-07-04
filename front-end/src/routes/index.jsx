import React from 'react';
import { lazy } from 'react';
import Loadable from './component/Loadable';
import { Outlet, useRoutes } from 'react-router-dom';
import DefaultLayout from '~/layout/client/DefaultLayout';
import clientRoute from './client.route';
import { element } from 'prop-types';
import PublicRouter from './component/PublicRouter';
import DefaultLayoutAdmin from '~/layout/admin/DefaultLayoutAdmin';
import routeAdmin from './admin.route';
import PrivateRouter from './component/PrivateRouter';

const MenuPage = Loadable(lazy(() => import('~/page/client/MenuPage')));
const HomePage = Loadable(lazy(() => import('~/page/client/HomePage')));
const CartPage = Loadable(lazy(() => import('~/page/client/CartPage')));
const SigninPage = Loadable(lazy(() => import('~/page/client/LoginPage')));
const LoginGoogle = Loadable(lazy(() => import('~/page/client/LoginGoogle')));

const SignUpPage = Loadable(lazy(() => import('~/page/client/SignUpPage')));
const BookingPage = Loadable(lazy(() => import('~/page/client/BookingPage')));
const NotFound = Loadable(lazy(() => import('~/page/error/NotFound')));

const routers = [
   {
      path: '/',
      element: <DefaultLayout />,
      children: [clientRoute],
   },
   {
      path: '/admin',
      element: (
         <PrivateRouter>
            <DefaultLayoutAdmin />
         </PrivateRouter>
      ),
      children: [routeAdmin],
   },
   {
      path: '/login',
      element: (
         <PublicRouter>
            <SigninPage />
         </PublicRouter>
      ),
   },
   {
      path: 'sign-up',
      element: (
         <PublicRouter>
            <SignUpPage />
         </PublicRouter>
      ),
   },

   {
      path: '*',
      exact: true,
      children: <NotFound />,
   },
];

export default function Routers() {
   return useRoutes(routers);
}
