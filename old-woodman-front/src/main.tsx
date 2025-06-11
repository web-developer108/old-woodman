import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DeviceProvider } from './hooks/device/device.tsx';
import { CartProvider } from './hooks/cart/cart.tsx';
import { FavoritesProvider } from './hooks/favorites/favorites.tsx';
import './i18n/index.ts';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <DeviceProvider>
          <CartProvider>
            <FavoritesProvider>
              <App/>
            </FavoritesProvider>
          </CartProvider>
        </DeviceProvider>
      </BrowserRouter>
  </React.StrictMode>
)