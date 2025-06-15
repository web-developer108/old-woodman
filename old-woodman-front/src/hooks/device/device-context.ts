import { createContext } from 'react';

export type Device = 'mobile' | 'tablet' | 'desktop' | null;

export type IDeviceContext = {
  device: Device;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
}

export const DeviceContext = createContext<IDeviceContext | null>(null);