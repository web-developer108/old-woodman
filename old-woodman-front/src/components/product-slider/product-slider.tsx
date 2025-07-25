import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useNavigate } from 'react-router-dom';
import useDevice from '../../hooks/device/use-device.ts';
import { useTranslation } from 'react-i18next';
import { productCatalog } from '../../config/products.config.ts';
import { CartButton } from '../buttons/cart-button/cart-button.tsx';
import { LikeButton } from '../buttons/like-button/like-button.tsx';
import type { ProductSliderProps } from './product-slider.types.ts';
import styles from './product-slider.module.scss';

export const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  categoryId,
  collectionId,
}) => {
  const navigate = useNavigate();
  const { isMobile } = useDevice();
  const { i18n } = useTranslation();
  const { t } = useTranslation('common');
  const lang = i18n.language as 'ru' | 'kk';

  const items = productCatalog
    .find((cat) => cat.id === categoryId)
    ?.collections?.find((col) => col.id === collectionId)
    ?.items || [];

  const handleCardClick = (productId: string) => {
    navigate(`/doors/${collectionId}?productId=${productId}`, { replace: false });
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>
        {title.toUpperCase()}
      </h3>
      <SimpleBar autoHide={false} className={styles.scrollContainer}>
        <div className={styles.cardRow}>
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
                  <p className={styles.title}>{isMobile ? item.titleMob[lang] : item.title[lang]}</p>
                  <p className={styles.description}>{item.description[lang]}</p>
                  <p className={styles.price}>{t('price-label')} {item.price.toLocaleString()} ₸*</p>
                </div>
                <CartButton productId={item.id}/>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
      <div className={styles.comment}> {t('comment')}</div>
    </div>
  );
};