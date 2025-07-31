import React from 'react';
import { useTranslation } from 'react-i18next';
import type { PictureHeaderProps } from './picture-header.types.ts';
import styles from './picture-header.module.scss'

export const PictureHeader: React.FC<PictureHeaderProps> = ({ title, label, color = 'white', imageBg, imageSmall, imageBig }) => {
  const { t } = useTranslation('common');
  const containerClass = `${styles.imageTitleContainer} ${
    color === 'black' ? styles.darkContainer : ''
  }`;
  return (
    <div className={styles.imageContainer}>

      <img
        className={styles.backgroundImage}
        src={imageBg}
        alt={t('aria-label-picture-bg')}
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      <div className={containerClass}>
        <h1 className={styles.imageTitle}>{title.toUpperCase()}</h1>
        <div className={styles.imageLabel}>{label}</div>
      </div>
      <div className={styles.imagesWrap}>
        <img
          className={styles.backgroundImage}
          src={imageSmall}
          alt={t('aria-label-picture-bg')}

        />
        <img
          className={styles.backgroundImage}
          src={imageBig}
          alt={t('aria-label-picture-bg')}

        />
      </div>
    </div>
  );
};