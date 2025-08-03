import React from 'react';
import { useTranslation } from 'react-i18next';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import useDevice from '../../hooks/device/use-device.ts';
import { useCurrentCategory } from '../../hooks/current-category/current-category.ts';
import { CartButton } from '../buttons/cart-button/cart-button.tsx';
import { LikeButton } from '../buttons/like-button/like-button.tsx';
import type { ProductSliderProps } from './product-slider.types.ts';
import styles from './product-slider.module.scss';

export const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  items,
  handleCardClick,
  headingSize = 'small'
}) => {
  const { isMobile } = useDevice();
  const { i18n, t } = useTranslation('common');
  const lang = i18n.language as 'ru' | 'kk';
  const category = useCurrentCategory()

  return (
    <div className={styles.wrapper}>
      <h3 className={`${styles.heading} ${styles[headingSize]}`}>
        {title.toUpperCase()}
      </h3>
      <SimpleBar autoHide={false} className={styles.scrollContainer}>
        <div className={styles.cardRow}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper} onClick={() => handleCardClick(item.id)}>
                <img
                  src={item.images[0]}
                  alt={item.alt}
                  className={styles.image}
                />
              </div>
              <div className={styles.likeWrap}>
                <LikeButton productId={item.id}/>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.textBlock}>
                  <p className={styles.title}>{isMobile && item.titleMob ? item.titleMob[lang] : item.title[lang]}</p>
                  <p
                    className={styles.description}>{item.description ? item.description[lang] : item.shortName[lang]}</p>

                  <p className={styles.price}>
                    {lang === 'ru'
                      ? (
                        <>
                          {t('price-label')} {item.price.toLocaleString()} ₸*
                        </>
                      )
                      : (
                        <>
                          {item.price.toLocaleString()} ₸* {t('price-label')}
                        </>
                      )}
                  </p>
                </div>
                <CartButton productId={item.id}/>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
      {category === "doors" && <div className={styles.comment}> {t('comment')}</div>}
    </div>
  );
};