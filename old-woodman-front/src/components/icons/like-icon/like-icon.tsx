import React from 'react';
import useDevice from '../../../hooks/device/use-device.ts';

type Props = {
  active?: boolean;
};

export const LikeIcon: React.FC<Props> = ({ active = false }) => {
  const { isMobile } = useDevice();

  if (active){
    return (
      <svg width={isMobile ? "18.33" : "24"} height={isMobile ? "15" : "20"} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.8539 5.23529C23.261 6.82353 22.8539 8.94118 21.1681 10.5141L12 19L2.83194 10.5141C1.14605 8.94118 0.73903 6.82353 1.14605 5.23529C1.68875 3.11765 3.60759 1 6.64398 1C8.31427 1 9.89389 1.73509 10.9373 2.99783L12 4.17647L13.0628 2.99783C14.1061 1.73509 15.6857 1 17.356 1C20.3924 1 22.3112 3.11765 22.8539 5.23529Z"
          fill="#222222" stroke="#222222" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>

    )
  }
  return (
    <svg width={isMobile ? "18.33" : "24"} height={isMobile ? "15" : "20"} viewBox="0 0 24 20" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.8539 5.23529C23.261 6.82353 22.8539 8.94118 21.1681 10.5141L12 19L2.83194 10.5141C1.14605 8.94118 0.73903 6.82353 1.14605 5.23529C1.68875 3.11765 3.60759 1 6.64398 1C8.31427 1 9.89389 1.73509 10.9373 2.99783L12 4.17647L13.0628 2.99783C14.1061 1.73509 15.6857 1 17.356 1C20.3924 1 22.3112 3.11765 22.8539 5.23529Z"
        stroke="#666666"
        strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>

  );
};
