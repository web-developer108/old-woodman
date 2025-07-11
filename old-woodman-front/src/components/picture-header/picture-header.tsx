import React from 'react';
import { useTranslation } from 'react-i18next';
import type { PictureHeaderProps } from './picture-header.types.ts';
import styles from './picture-header.module.scss'

export const PictureHeader: React.FC<PictureHeaderProps> = ({ title, label, color = 'white', images }) => {
  const { t } = useTranslation('common');
  const containerClass = `${styles.imageTitleContainer} ${
    color === 'black' ? styles.darkContainer : ''
  }`;
  return (
    <div className={styles.imageContainer}>
      <picture className={styles.picture}>
        <source srcSet={images.large} media="(min-width: 1142px)" />
        <source srcSet={images.medium} media="(min-width: 811px)" />
        <source srcSet={images.small} media="(max-width: 810px)" />
        <img
          className={styles.backgroundImage}
          src={images.large}
          alt={t('aria-label-picture-bg')}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </picture>
      <div className={containerClass}>
        <h1 className={styles.imageTitle}>{title.toUpperCase()}</h1>
        <div className={styles.imageLabel}>{label}</div>
      </div>
    </div>
  );
};