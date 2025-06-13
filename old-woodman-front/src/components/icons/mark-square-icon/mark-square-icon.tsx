import React from 'react';
import { AppColors } from '../../../styles.ts';

export const MarkSquareIcon: React.FC = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10.9091" height="10.9091" rx="1" fill={AppColors.text.grey}/>
      <rect x="13.0898" width="10.9091" height="10.9091" rx="1" fill={AppColors.text.grey}/>
      <rect y="13.0908" width="10.9091" height="10.9091" rx="1" fill={AppColors.text.grey}/>
      <rect x="13.0898" y="13.0908" width="10.9091" height="10.9091" rx="1" fill={AppColors.text.grey}/>
    </svg>

  );
};