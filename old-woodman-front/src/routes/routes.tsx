import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import Temporary from '../pages/temporary/temporary';

//const Home = lazy(() => import('../pages/temporary/temporary'));
const Home = Temporary;
// Doors
const DoorsOverview = lazy(() => import('../pages/temporary/temporary'));
const Classica = lazy(() => import('../pages/temporary/temporary'));
const Loft = lazy(() => import('../pages/temporary/temporary'));
const Balcony = lazy(() => import('../pages/temporary/temporary'));
const DoorCollectionItem = lazy(() => import('../pages/temporary/temporary'));

// Furniture
const FurnitureOverview = lazy(() => import('../pages/temporary/temporary'));
const Consoles = lazy(() => import('../pages/temporary/temporary'));
const Wardrobes = lazy(() => import('../pages/temporary/temporary'));
const Beds = lazy(() => import('../pages/temporary/temporary'));
const Chairs = lazy(() => import('../pages/temporary/temporary'));
const FurnitureCollectionItem = lazy(() => import('../pages/temporary/temporary'));

// Other pages
const Facades = lazy(() => import('../pages/temporary/temporary'));
const Gifts = lazy(() => import('../pages/temporary/temporary'));
const Promotions = lazy(() => import('../pages/temporary/temporary'));
const Contacts = lazy(() => import('../pages/temporary/temporary'));
const Cart = lazy(() => import('../pages/temporary/temporary'));
const FAQ = lazy(() => import('../pages/temporary/temporary'));
const Info = lazy(() => import('../pages/temporary/temporary'));
const Terms = lazy(() => import('../pages/temporary/temporary'));
const Favorites = lazy(() => import('../pages/temporary/temporary'));

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },

  // Doors
  { path: '/doors', element: <DoorsOverview /> },
  { path: '/doors/classica', element: <Classica /> },
  { path: '/doors/classica/:id', element: <DoorCollectionItem /> },
  { path: '/doors/loft', element: <Loft /> },
  { path: '/doors/loft/:id', element: <DoorCollectionItem /> },
  { path: '/doors/balcony', element: <Balcony /> },
  { path: '/doors/balcony/:id', element: <DoorCollectionItem /> },

  // Furniture
  { path: '/furniture', element: <FurnitureOverview /> },
  { path: '/furniture/consoles', element: <Consoles /> },
  { path: '/furniture/consoles/:id', element: <FurnitureCollectionItem /> },
  { path: '/furniture/wardrobes', element: <Wardrobes /> },
  { path: '/furniture/wardrobes/:id', element: <FurnitureCollectionItem /> },
  { path: '/furniture/beds', element: <Beds /> },
  { path: '/furniture/beds/:id', element: <FurnitureCollectionItem/> },
  { path: '/furniture/chairs', element: <Chairs /> },
  { path: '/furniture/chairs/:id', element: <FurnitureCollectionItem/> },

  // Other
  { path: '/facades', element: <Facades /> },
  { path: '/gifts', element: <Gifts /> },
  { path: '/promotions', element: <Promotions /> },
  { path: '/contacts', element: <Contacts /> },
  { path: '/cart', element: <Cart /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/info', element: <Info /> },
  { path: '/terms', element: <Terms /> },
  { path: '/favorites', element: <Favorites /> },
];

export default routes;
