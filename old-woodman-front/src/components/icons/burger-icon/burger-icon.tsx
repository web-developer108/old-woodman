import React from 'react';
import { AppColors } from '../../../styles.ts';

export const BurgerIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 32 14" fill="none">
      <path d="M1 1H31" stroke={AppColors.text.main} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M1 7H31" stroke={AppColors.text.main} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M1 13H31" stroke={AppColors.text.main} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};
