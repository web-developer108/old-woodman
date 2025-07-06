import React from 'react';
import type { LikeButtonProps } from './like-button.types.ts';
import { useFavorites } from '../../../hooks/favorites/favorites.tsx';
import useDevice from '../../../hooks/device/use-device.ts';
import { LikeIcon } from '../../icons/like-icon/like-icon.tsx';
import styles from './like-button.module.scss'
import { useTranslation } from 'react-i18next';

export const LikeButton: React.FC<LikeButtonProps> = ({ productId }) => {
  const { t } = useTranslation('common');
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isMobile } = useDevice();
  const active = isFavorite(productId);

  const handleClick = () => {
    toggleFavorite(productId);
  };

  return (
    <button
      className={`${styles.likeButton} ${active ? styles.active : ''} ${isMobile ? styles.mobile : ''}`}
      onClick={handleClick}
      aria-label={active ? t('aria-label-like-out') : t('aria-label-like-in')}
    >
      <LikeIcon  active={isFavorite(productId)}/>
    </button>
  );
};