import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';

type Device = 'mobile' | 'tablet' | 'desktop' | null;

type IDeviceContext = {
  device: Device;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
}

export const DeviceContext = createContext<IDeviceContext | null>(null);

export const DeviceProvider = (props: React.PropsWithChildren) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [device, setDevice] = useState<Device | null>(null);

  useLayoutEffect(() => {
    function updateSize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (screenWidth <= 768) {
      setDevice('mobile');
    } else if (screenWidth <= 960) {
      setDevice('tablet');
    } else {
      setDevice('desktop');
    }
  }, [screenWidth]);

  const context: IDeviceContext = {
    device,
    screenWidth,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  };

  return <DeviceContext.Provider value={{ ...context }}> {device && props.children}</DeviceContext.Provider>;
}

export const useDevice = () => {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error('useDevice must be used within the DeviceProvider');
  }

  return context;
}
