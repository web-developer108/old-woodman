import React from 'react';
import { AppColors } from '../../../styles.ts';

export const CartIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
      <path
        d="M8.0125 19.7311C8.46814 19.7311 8.8375 19.3617 8.8375 18.9061C8.8375 18.4504 8.46814 18.0811 8.0125 18.0811C7.55687 18.0811 7.1875 18.4504 7.1875 18.9061C7.1875 19.3617 7.55687 19.7311 8.0125 19.7311Z"
        fill={AppColors.text.main} stroke={AppColors.text.main} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M20.3914 19.7311C20.847 19.7311 21.2164 19.3617 21.2164 18.9061C21.2164 18.4504 20.847 18.0811 20.3914 18.0811C19.9358 18.0811 19.5664 18.4504 19.5664 18.9061C19.5664 19.3617 19.9358 19.7311 20.3914 19.7311Z"
        fill={AppColors.text.main} stroke={AppColors.text.main} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1.08105H4.53548L7.18709 15.531H21.329" stroke={AppColors.text.main} strokeWidth="1.25" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path
        d="M7.18571 12.1308H20.9652C21.0674 12.1309 21.1665 12.0969 21.2456 12.0346C21.3246 11.9723 21.3788 11.8856 21.3989 11.7892L22.9898 4.13926C23.0027 4.07758 23.0011 4.01392 22.9853 3.95289C22.9694 3.89185 22.9397 3.83496 22.8982 3.78632C22.8567 3.73768 22.8045 3.69851 22.7454 3.67162C22.6862 3.64474 22.6216 3.63082 22.5562 3.63086H5.41797"
        stroke={AppColors.text.main} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
