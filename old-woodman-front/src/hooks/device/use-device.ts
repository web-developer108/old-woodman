import { useContext } from 'react';
import { DeviceContext } from './device-context.ts';

const useDevice = () => {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error('useDevice must be used within the DeviceProvider');
  }

  return context;
}
export default useDevice;