import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/home.tsx'));

const DoorsOverview = lazy(() => import('../pages/doors/doors'));
const ProductPage = lazy(() => import('../pages/product-page/product-page.tsx'));
const Redirect = lazy(() => import('../components/redirect/redirect'));

const FurnitureOverview = lazy(() => import('../pages/furniture/furniture'));

const Facades = lazy(() => import('../pages/facades/facades'));
const Gifts = lazy(() => import('../pages/gifts/gifts'));
const Promotions = lazy(() => import('../pages/promotions/promotions'));
const Contacts = lazy(() => import('../pages/contacts/contacts'));
const Cart = lazy(() => import('../pages/cart/cart.tsx'));
const Info = lazy(() => import('../pages/info/info'));
const Terms = lazy(() => import('../pages/terms/terms'));
const Favorites = lazy(() => import('../pages/favorites/favorites'));
const Privacy = lazy(() => import('../pages/privacy-policy/privacy-policy'));
const Ordered = lazy(() => import('../pages/ordered/ordered'));
const NotFound = lazy(() => import('../pages/not-found/not-found'));

const routes: RouteObject[] = [
  { path: '/', element: <Home/> },

  { path: '/doors', element: <DoorsOverview/> },
  { path: '/doors/:collectionId', element: <ProductPage/> },
  { path: '/furniture', element: <FurnitureOverview/> },
  { path: '/furniture/:collectionId', element: <Redirect/> },
  { path: '/furniture/:collectionId/:id', element: <ProductPage/> },

  { path: '/facades', element: <Facades/> },
  { path: '/gifts', element: <Gifts/> },
  { path: '/promotions', element: <Promotions/> },
  { path: '/contacts', element: <Contacts/> },
  { path: '/cart', element: <Cart/> },
  { path: '/cart/booked', element: <Ordered/> },
  { path: '/info', element: <Info/> },
  { path: '/terms', element: <Terms/> },
  { path: '/favorites', element: <Favorites/> },
  { path: '/privacy-policy', element: <Privacy/> },
  { path: '*', element: <NotFound/> },
];

export default routes;
