import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/home.tsx'));

const DoorsOverview = lazy(() => import('../pages/temporary/temporary'));
const Classic = lazy(() => import('../pages/temporary/temporary'));
const Loft = lazy(() => import('../pages/temporary/temporary'));
const Balcony = lazy(() => import('../pages/temporary/temporary'));
const DoorCollectionItem = lazy(() => import('../pages/temporary/temporary'));

const FurnitureOverview = lazy(() => import('../pages/temporary/temporary'));
const Consoles = lazy(() => import('../pages/temporary/temporary'));
const Wardrobes = lazy(() => import('../pages/temporary/temporary'));
const Beds = lazy(() => import('../pages/temporary/temporary'));
const Chairs = lazy(() => import('../pages/temporary/temporary'));
const FurnitureCollectionItem = lazy(() => import('../pages/temporary/temporary'));

const Facades = lazy(() => import('../pages/temporary/temporary'));
const Gifts = lazy(() => import('../pages/temporary/temporary'));
const Promotions = lazy(() => import('../pages/temporary/temporary'));
const Contacts = lazy(() => import('../pages/temporary/temporary'));
const Cart = lazy(() => import('../pages/cart/cart.tsx'));
const FAQ = lazy(() => import('../pages/temporary/temporary'));
const Info = lazy(() => import('../pages/temporary/temporary'));
const Terms = lazy(() => import('../pages/terms/terms'));
const Favorites = lazy(() => import('../pages/favorites/favorites.tsx'));
const Privacy = lazy(() => import('../pages/privacy-policy/privacy-policy'));
const Ordered = lazy(() => import('../pages/temporary/temporary'));

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },

  { path: '/doors', element: <DoorsOverview /> },
  { path: '/doors/classic', element: <Classic /> },
  { path: '/doors/classic/:id', element: <DoorCollectionItem /> },
  { path: '/doors/loft', element: <Loft /> },
  { path: '/doors/loft/:id', element: <DoorCollectionItem /> },
  { path: '/doors/balcony', element: <Balcony /> },
  { path: '/doors/balcony/:id', element: <DoorCollectionItem /> },

  { path: '/furniture', element: <FurnitureOverview /> },
  { path: '/furniture/consoles', element: <Consoles /> },
  { path: '/furniture/consoles/:id', element: <FurnitureCollectionItem /> },
  { path: '/furniture/wardrobes', element: <Wardrobes /> },
  { path: '/furniture/wardrobes/:id', element: <FurnitureCollectionItem /> },
  { path: '/furniture/beds', element: <Beds /> },
  { path: '/furniture/beds/:id', element: <FurnitureCollectionItem/> },
  { path: '/furniture/chairs', element: <Chairs /> },
  { path: '/furniture/chairs/:id', element: <FurnitureCollectionItem/> },

  { path: '/facades', element: <Facades /> },
  { path: '/gifts', element: <Gifts /> },
  { path: '/promotions', element: <Promotions /> },
  { path: '/contacts', element: <Contacts /> },
  { path: '/cart', element: <Cart /> },
  { path: '/cart/booked', element: <Ordered /> },
  { path: '/faq', element: <FAQ /> },//пока нет такой странички
  { path: '/info', element: <Info /> },
  { path: '/terms', element: <Terms /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/privacy-policy', element: <Privacy /> },
];

export default routes;
