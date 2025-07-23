import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDevice from '../../hooks/device/use-device.ts';
import { useTranslation } from 'react-i18next';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';

import { LikeButton } from '../buttons/like-button/like-button.tsx';
import { CartButton } from '../buttons/cart-button/cart-button.tsx';
import type { CardsPreviewProps } from './cards-preview.types.ts';
import styles from '../cards-preview/cards-preview.module.scss'

export const CardsPreview: React.FC<CardsPreviewProps> = ({
  collectionId,
}) => {
  const navigate = useNavigate();
  const { isMobile } = useDevice();
  const { i18n } = useTranslation();
  const { t } = useTranslation('common');
  const lang = i18n.language as 'ru' | 'kk';
  const { getCollectionById } = useProductCatalog();
  const collection = getCollectionById(collectionId);
  const items = collection?.items || [];

  const handleCardClick = (productId: string) => {
    navigate(`/furniture/${collectionId}?productId=${productId}`, { replace: false });
  };

  return (
    <div className={styles.cardsContainer}>

        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper} onClick={() => handleCardClick(item.id)}>
              <img
                src={item.images[0]}
                alt={item.title[lang]}
                className={styles.image}
              />
            </div>
            <div className={styles.likeWrap}>
              <LikeButton productId={item.id}/>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.textBlock}>
                <p className={styles.title}>{item.title[lang]}</p>
                <p className={styles.description}>{item.shortName[lang]}</p>
                <p className={styles.price}>{t('price-label')} {item.price.toLocaleString()} ₸*</p>
              </div>
              <CartButton productId={item.id}/>
            </div>
          </div>
        ))}


    </div>
  );
};