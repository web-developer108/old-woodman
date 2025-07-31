import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { NavigationBlockProps } from './navigation-block.types.ts';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { ArrowRightIcon } from '../icons/arrow-right-icon/arrow-right-icon.tsx';
import { useTranslation } from 'react-i18next';
import useDevice from '../../hooks/device/use-device.ts';
import door1 from '@assets/images/home/door-1.webp';
import door2 from '@assets/images/home/door-2.webp';
import { AppColors } from '../../styles.ts';
import styles from './navigation-block.module.scss'

export const NavigationBlock: React.FC<NavigationBlockProps> = ({
  blocks = ['doors', 'furniture', 'facades'],
  isHome = false,
}) => {
  const { t } = useTranslation('common');
  const {  screenWidth} = useDevice();
  const navigate = useNavigate();


  return (
    <div className={`${styles.navigation}  ${!isHome && screenWidth >= 1200 ? styles.navigationCustom : ''}`}>
      {blocks.includes('doors') && (
        <div className={`${styles.background} ${styles.brown}`}>
            <h3 className={`${styles.bgTitle} ${styles.light}`}>{t('background-title1').toUpperCase()}</h3>
            <div className={`${styles.bgDescription} ${styles.light}`} >{t('background-description1')}</div>

          <div className={styles.buttonContainer}>
            <CircleButton ariaLabel={t('aria-label.door')} icon={<ArrowRightIcon/>}
                          bgColor={AppColors.background.circleButton40}
                          onClick={() => {
                            navigate('/doors');
                          }}/>
          </div>
          <img className={styles.imageSmall} src={door1} alt="Дверь"/>
          <img className={styles.imageBig} src={door2} alt="Дверь"/>
        </div>
      )}
     {/* {blocks.includes('furniture') && (
        <div className={styles.backgroundBlue}>
          <div className={styles.bgContentWrapper}>
            <h3>{t('background-title2').toUpperCase()}</h3>
            <div>{t('background-description2')}</div>
          </div>
          <div className={styles.buttonContainer}>
            <CircleButton ariaLabel={t('aria-label.furniture')} icon={<ArrowRightIcon/>}
                          bgColor={AppColors.background.circleButton40}
                          onClick={() => navigate('/furniture')}/>
          </div>
        </div>
      )}
      {blocks.includes('facades') && (
        <div className={styles.backgroundYellow}>
          <div className={styles.bgContentWrapperLast}>
            <h3>{t('background-title3').toUpperCase()}</h3>
            <div>{t('background-description3')}</div>
          </div>
          <div className={styles.buttonContainer}>
            <CircleButton ariaLabel={t('aria-label.facades')} icon={<ArrowRightIcon/>}
                          bgColor={AppColors.background.circleButton40}
                          onClick={() => navigate('/facades')}/>
          </div>
        </div>
      )}*/}
    </div>
  );
};