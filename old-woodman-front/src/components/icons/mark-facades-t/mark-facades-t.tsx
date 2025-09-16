import React from 'react';
import { AppColors } from '../../../styles.ts';

export const MarkFacadesT: React.FC = () => {
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="24" y="24" width="11" height="18" rx="1" transform="rotate(180 24 24)" fill={AppColors.text.grey}/>
            <rect x="11" y="24" width="11" height="18" rx="1" transform="rotate(180 11 24)" fill={AppColors.text.grey}/>
            <rect x="24" y="4" width="24" height="4" rx="1" transform="rotate(180 24 4)" fill={AppColors.text.grey}/>
        </svg>


    );
};