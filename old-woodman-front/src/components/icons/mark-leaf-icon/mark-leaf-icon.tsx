import React from 'react';
import { AppColors } from '../../../styles.ts';

export const MarkLeafIcon: React.FC = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3529_8088)">
        <path
          d="M18.7137 19.3017C11.5212 26.4941 4.49224 19.4652 4.49224 19.4652C4.49224 19.4652 -2.53675 12.4362 4.6557 5.24371C7.96412 1.93529 19.0568 0.594357 22.6721 0.238558C23.2807 0.178665 23.7787 0.676675 23.7188 1.28525C23.363 4.90056 22.0221 15.9933 18.7137 19.3017Z"
          fill={AppColors.text.grey}/>
        <path d="M0.981389 22.9805L22.0684 1.89355" stroke={AppColors.text.grey} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M5.12839 18.8267L15.6719 8.2832" stroke={AppColors.background.grey} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_3529_8088">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  );
}