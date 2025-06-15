import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DeviceProvider from './hooks/device/device.provider.tsx';
import { CartProvider } from './hooks/cart/cart.tsx';
import { FavoritesProvider } from './hooks/favorites/favorites.tsx';
import { ModalProvider } from './hooks/modal/modal.provider.tsx';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top.tsx';
import './i18n/index.ts';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <DeviceProvider>
        <CartProvider>
          <FavoritesProvider>
            <ModalProvider>
              <App/>
            </ModalProvider>
          </FavoritesProvider>
        </CartProvider>
      </DeviceProvider>
    </BrowserRouter>
  </React.StrictMode>
)