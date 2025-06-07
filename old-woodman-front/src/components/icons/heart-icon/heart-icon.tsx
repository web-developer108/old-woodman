import React from 'react';
import { AppColors } from '../../../styles.ts';

export const HeartIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
      <path
        d="M20.8672 5.23529C21.2372 6.82353 20.8672 8.94118 19.3346 10.5141L11 19L2.6654 10.5141C1.13278 8.94118 0.762755 6.82353 1.13278 5.23529C1.62614 3.11765 3.37054 1 6.1309 1C7.64934 1 9.08535 1.73509 10.0339 2.99783L11 4.17647L11.9661 2.99783C12.9146 1.73509 14.3507 1 15.8691 1C18.6295 1 20.3739 3.11765 20.8672 5.23529Z"
        stroke={AppColors.text.main} strokeWidth="1.25" strokeLinejoin="round"/>
    </svg>
  );
};
