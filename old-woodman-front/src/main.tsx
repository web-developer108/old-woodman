import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { DeviceProvider } from './hooks/device/device.tsx';
import { CartProvider } from './hooks/cart/cart.tsx';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DeviceProvider>
          <CartProvider>
            <App/>
          </CartProvider>
        </DeviceProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)