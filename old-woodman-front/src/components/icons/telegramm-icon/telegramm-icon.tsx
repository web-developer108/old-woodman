import React from 'react';
import {AppColors} from '../../../styles.ts';
import styles from '../icons.module.scss';

type TelegramIconProps = {
  backgroundColor?: string;
  arrowColor?: string;
  size?: string;
};

export const TelegramIcon: React.FC<TelegramIconProps> = ({
  backgroundColor = AppColors.text.grey,
  arrowColor = AppColors.background.gray,
  size = '24',
}) => {
  console.log('backgroundColor', backgroundColor)
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill={backgroundColor}/>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M5.42733 11.87C8.92441 10.3513 11.2525 9.34209 12.4215 8.8525C15.7487 7.46366 16.4481 7.22386 16.8978 7.21387C16.9977 7.21387 17.2175 7.23385 17.3674 7.35375C17.4873 7.45367 17.5173 7.58356 17.5372 7.68348C17.5572 7.78339 17.5772 7.99322 17.5572 8.15308C17.3774 10.0515 16.598 14.6577 16.1984 16.7759C16.0285 17.6751 15.6988 17.9749 15.379 18.0049C14.6796 18.0648 14.1501 17.5453 13.4806 17.1056C12.4215 16.4162 11.832 15.9866 10.8028 15.3071C9.61384 14.5278 10.3832 14.0981 11.0626 13.3987C11.2425 13.2189 14.3099 10.4212 14.3699 10.1714C14.3799 10.1414 14.3799 10.0215 14.3099 9.96158C14.24 9.90163 14.1401 9.92161 14.0601 9.94159C13.9502 9.96158 12.2716 11.0806 9.00435 13.2888C8.52474 13.6185 8.0951 13.7784 7.70543 13.7684C7.27579 13.7584 6.45647 13.5286 5.83699 13.3288C5.08761 13.089 4.48811 12.9591 4.53807 12.5394C4.56804 12.3196 4.86779 12.0998 5.42733 11.87Z"
            fill={arrowColor}/>
    </svg>
  );
};
