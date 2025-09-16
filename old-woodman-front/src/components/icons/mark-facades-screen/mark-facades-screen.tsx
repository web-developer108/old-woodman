import React from 'react';
import { AppColors } from '../../../styles.ts';

export const MarkFacadesScreen: React.FC = () => {
    return (<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 3.91667C0 1.75356 1.75356 0 3.91667 0H22.1944C24.3576 0 26.1111 1.75356 26.1111 3.91667V15.6667C26.1111 17.8298 24.3576 19.5833 22.1944 19.5833H3.91667C1.75356 19.5833 0 17.8298 0 15.6667V3.91667Z"
                fill={AppColors.text.grey}/>
            <path
                d="M5.22157 20.8906C4.50054 20.8906 3.91602 21.4751 3.91602 22.1962C3.91602 22.9172 4.50054 23.5017 5.22157 23.5017H20.8882C21.6093 23.5017 22.1938 22.9172 22.1938 22.1962C22.1938 21.4751 21.6093 20.8906 20.8882 20.8906H5.22157Z"
                fill={AppColors.text.grey}/>
        </svg>


    );
}