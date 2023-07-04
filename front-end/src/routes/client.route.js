import { lazy } from 'react';
import Loadable from './component/Loadable';
import { element } from 'prop-types';
import { Outlet } from 'react-router-dom';
import routeConfig from '~/configs/routeConfig';
import Profile from '~/page/client/Profile';

const MenuPage = Loadable(lazy(() => import('~/page/client/MenuPage')));
const HomePage = Loadable(lazy(() => import('~/page/client/HomePage')));
const CartPage = Loadable(lazy(() => import('~/page/client/CartPage')));

const BookingPage = Loadable(lazy(() => import('~/page/client/BookingPage')));

const clientRoute = {
   path: '/',
   element: <Outlet />,
   children: [
      {
         index: true,
         element: <HomePage />,
      },
      {
         path: routeConfig.menu,
         element: <MenuPage />,
      },
      {
         path: routeConfig.cart,
         element: <CartPage />,
      },
      {
         path: routeConfig.booking,
         element: <BookingPage />,
      },
      {
         path: routeConfig.profile,
         element: <Profile />,
      },
   ],
};
export default clientRoute;
