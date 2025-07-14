import React from 'react';
import useDevice from '../../../hooks/device/use-device.ts';

export const TermsIcon: React.FC = () => {
  const { isMobile } = useDevice();
  return (
    <svg width={isMobile ? "12" : "13"} height={isMobile ? "14" : "16"} viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.81396 0C7.07904 0.000102339 7.33355 0.105523 7.521 0.292969L12.0259 4.79785C12.2134 4.98534 12.3188 5.23974 12.3188 5.50488V15C12.3188 15.5522 11.871 15.9999 11.3188 16H1.68213C1.12999 15.9999 0.682176 15.5522 0.682129 15V1C0.682129 0.447797 1.12996 0.000131923 1.68213 0H6.81396ZM6.50049 6H11.5005L6.50049 1V6Z"
        fill="#666666"/>
    </svg>

  );
}