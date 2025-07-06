import React from 'react';
import { useTranslation } from 'react-i18next';
import { productCatalog } from '../../config/products.config.ts';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import type { ProductSliderProps } from './product-slider.types.ts';
import styles from './product-slider.module.scss';

export const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  categoryId,
  collectionId,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'ru' | 'kk';

  const items = productCatalog
    .find((cat) => cat.id === categoryId)
    ?.collections?.find((col) => col.id === collectionId)
    ?.items || [];


  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        {title} ({items.length})
      </h2>
      <SimpleBar className={styles.scrollContainer}>
        <div className={styles.cardRow}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.images[0]}
                  alt={item.title[lang]}
                  className={styles.image}
                />
              </div>
              <div className={styles.textBlock}>
                <p className={styles.title}>{item.title[lang]},</p>
                <p className={styles.description}>{item.description[lang]}</p>
                <p className={styles.price}>от {item.price.toLocaleString()} ₸</p>
              </div>
              <div className={styles.actions}>
                <button className={styles.cartButton}>+ В корзину</button>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
};