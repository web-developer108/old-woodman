import React, { useLayoutEffect, useState } from 'react';
import { DeviceContext, type Device, type IDeviceContext } from './device-context';


const DeviceProvider = (props: React.PropsWithChildren) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [device, setDevice] = useState<Device>(null);

  useLayoutEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setDevice(
        width <= 810 ? 'mobile' :
          width <= 1200 ? 'tablet' : 'desktop'
      );
    };

    updateSize(); // инициализируем сразу
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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