import React from 'react';
import { AppColors } from '../../../styles.ts';

type ArrowRightIconProps = {
  color?: string;
  size?: 'large' | 'small';
};

export const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({
  color = AppColors.text.light,
  size = 'large'
}) => {

  return (
    <svg width={size === 'large' ? "22" : "14"} height={size === 'large' ? "18" : "12"} viewBox="0 0 22 18" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M12.9799 1.08048L20.8995 9.00008M20.8995 9.00008L12.9799 16.9197M20.8995 9.00008H1.1005" stroke={color}
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};
