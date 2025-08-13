import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { NavigationBlockProps } from './navigation-block.types.ts';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { ArrowRightIcon } from '../icons/arrow-right-icon/arrow-right-icon.tsx';
import { useTranslation } from 'react-i18next';
import useDevice from '../../hooks/device/use-device.ts';
import door1 from '@assets/images/home/door-1.webp';
import door2 from '@assets/images/home/door-2.webp';
import facade1 from '@assets/images/home/facade-1.webp';
import facade2 from '@assets/images/home/facade-2.webp';
import shelf from '@assets/images/home/furniture-1.webp';
import console from '@assets/images/home/furniture-2.webp';
import gift1 from '@assets/images/home/gift-1.webp';
import gift2 from '@assets/images/home/gift-2.webp';
import { AppColors } from '../../styles.ts';
import styles from './navigation-block.module.scss'

export const NavigationBlock: React.FC<NavigationBlockProps> = ({
  blocks = ['doors', 'furniture', 'facades', 'gifts'],
  isHome = false,
}) => {
  const { t } = useTranslation('common');
  const { screenWidth } = useDevice();
  const navigate = useNavigate();

  return (
    <div className={`${styles.navigation}  ${!isHome && screenWidth >= 1200 ? styles.navigationCustom : ''}`}>
      {blocks.includes('doors') && (
        <div className={`${styles.background} ${styles.brown}`}>
          <h3 className={`${styles.bgTitle} ${styles.light}`}>{t('background-title1').toUpperCase()}</h3>
          <div className={`${styles.bgDescription} ${styles.light}`}>{t('background-description1')}</div>

          <div className={styles.buttonContainer}>
            <CircleButton ariaLabel={t('aria-label.door')} icon={<ArrowRightIcon/>}
                          bgColor={AppColors.background.circleButton40}
                          onClick={() => {
                            navigate('/doors');
                          }}/>
          </div>
          <img className={styles.imageSmall} src={door1} loading={'lazy'} alt="Деревянная дверь со стеклопакетом на коричневом фоне"/>
          <img className={styles.imageBig} src={door2} loading={'lazy'} alt="Белая классическа дверь с наличником на коричневом фоне"/>
        </div>
      )}
      {blocks.includes('furniture') && (
        <div className={`${styles.background} ${styles.blue}`}>
          <h3 className={`${styles.bgTitle} ${styles.light}`}>{t('background-title2').toUpperCase()}</h3>
          <div className={`${styles.bgDescription} ${styles.light}`}>{t('background-description2')}</div>

          <div className={styles.buttonContainer}>
            <CircleButton ariaLabel={t('aria-label.furniture')} icon={<ArrowRightIcon/>}
                          bgColor={AppColors.background.circleButton40}
                          onClick={() => {
                            navigate('/furniture');
                          }}/>
          </div>
          <img className={styles.imageBig} src={shelf} loading={'lazy'} alt="Книжная полка из бука, двойная, на голубом фоне"/>
          <img className={styles.imageSmall} src={console} loading={'lazy'}
               alt="Деревянная консоль с винтажной окраской, на голубом фоне"/>
        </div>

      )}
      {blocks.includes('facades') && (
        <div className={`${styles.background} ${styles.yellow}`}>
          <h3 className={styles.bgTitle}>{t('background-title3').toUpperCase()}</h3>
          <div className={styles.bgDescription}>{t('background-description3')}</div>

          <div className={styles.buttonContainer}>
            <CircleButton ariaLabel={t('aria-label.facades')} icon={<ArrowRightIcon/>}
                          bgColor={AppColors.background.circleButton40}
                          onClick={() => {
                            navigate('/facades');
                          }}/>
          </div>
          <img className={styles.imageSmall} src={facade1} loading={'lazy'} alt="Декоративная стеновая панель с готической росписью"/>
          <img className={styles.imageBig} src={facade2} loading={'lazy'} alt="Деревянный мебельный фасад из массива соны "/>
        </div>
      )}
      {blocks.includes('gifts') && (
        <div className={`${styles.background} ${styles.orange}`}>
          <h3 className={`${styles.bgTitle} ${styles.light}`}>{t('background-title4').toUpperCase()}</h3>
          <div className={`${styles.bgDescription} ${styles.light}`}>{t('background-description4')}</div>

          <div className={styles.buttonContainer}>
            <CircleButton ariaLabel={t('aria-label.door')} icon={<ArrowRightIcon/>}
                          bgColor={AppColors.background.circleButton40}
                          onClick={() => {
                            navigate('/gifts');
                          }}/>
          </div>
          <img className={styles.imageSmall} src={gift1} loading={'lazy'} alt="Деревянный светильник эксклюзивный подарок алматы"/>
          <img className={styles.imageBig} src={gift2} loading={'lazy'} alt="Эксклюзивные часы из древесины карагача"/>
        </div>
      )}
    </div>
  );
};