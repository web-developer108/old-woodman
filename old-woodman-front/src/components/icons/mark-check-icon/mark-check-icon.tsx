import React from 'react';
import { AppColors } from '../../../styles.ts';

export const MarkCheckIcon: React.FC = () => {
  return (
    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2711 0.714438C7.4796 4.18202 3.75957 4.57114 0.999018 4.6148C0.446802 4.62354 -0.000427173 5.07576 0.00336634 5.62803C0.101638 19.9347 2.38786 22.3549 11.6185 26.0344C11.854 26.1283 12.1264 26.1283 12.3619 26.0344C21.5926 22.3549 23.8975 19.9347 23.9966 5.62803C24.0004 5.07576 23.5532 4.62349 23.0009 4.61489C20.2275 4.57168 16.5087 4.1846 12.7453 0.717368C12.3317 0.336368 11.6861 0.334949 11.2711 0.714438Z"
        fill={AppColors.text.grey}/>
      <path d="M7.26953 14.4163L11.2918 18.4386L18.6661 9.72363" stroke="white" strokeWidth="1.25"
            strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};