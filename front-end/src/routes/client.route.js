import { lazy } from 'react';
import Loadable from './component/Loadable';

const MenuPage = Loadable(lazy(() => import('~/page/client/MenuPage')));
const HomePage = Loadable(lazy(() => import('~/page/client/HomePage')));
const CartPage = Loadable(lazy(() => import('~/page/client/CartPage')));
const LoginPage = Loadable(lazy(() => import('~/page/client/LoginPage')));
const LoginGoogle = Loadable(lazy(() => import('~/page/client/LoginGoogle')));

const SignUpPage = Loadable(lazy(() => import('~/page/client/SignUpPage')));
const PublicRouter = Loadable(lazy(() => import('./component/PublicRouter')));
const BookingPage = Loadable(lazy(() => import('~/page/client/BookingPage')));
const NotFound = Loadable(lazy(() => import('~/page/error/NotFound')));

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
      path: '/booking',
      component: BookingPage,
   },
   {
      path: '/login',
      component: LoginPage,
      gurad: PublicRouter,
   },
   {
      path: '/sign-up',
      component: SignUpPage,
      gurad: PublicRouter,
   },
   {
      path: '/auth/google',
      component: LoginGoogle,
      gurad: PublicRouter,
   },
   {
      path: '/*',
      component: NotFound,
   },
];

export default routeClient;
