import React, { useEffect, useLayoutEffect, useState } from 'react';
import { DeviceContext, type Device, type IDeviceContext } from './device-context';

const DeviceProvider = (props: React.PropsWithChildren) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [device, setDevice] = useState<Device>(null);

  useLayoutEffect(() => {
    const updateSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    setDevice(
      screenWidth <= 810 ? 'mobile' :
        screenWidth <= 1200 ? 'tablet' : 'desktop'
    );
  }, [screenWidth]);

  const context: IDeviceContext = {
    device,
    screenWidth,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  };

  return (
    <DeviceContext.Provider value={context}>
      {device && props.children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;