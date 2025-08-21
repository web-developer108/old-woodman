import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DeviceProvider from './hooks/device/device.provider.tsx';
import { GTMProvider } from './hooks/gtm/gtm-provider.tsx';
import { CartProvider } from './hooks/cart/cart.tsx';
import { FavoritesProvider } from './hooks/favorites/favorites.tsx';
import { ModalProvider } from './hooks/modal/modal.provider.tsx';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top.tsx';
import { FooterRefProvider } from './hooks/footer-ref/footer-ref.provider.tsx';
import './i18n/index.ts';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GTMProvider gtmId="GTM-W4Q26KB9">
      <ScrollToTop/>
      <DeviceProvider>
        <CartProvider>
          <FavoritesProvider>
            <FooterRefProvider>
              <ModalProvider>
                <App/>
              </ModalProvider>
            </FooterRefProvider>
          </FavoritesProvider>
        </CartProvider>
      </DeviceProvider>
      </GTMProvider>
    </BrowserRouter>
  </React.StrictMode>
)