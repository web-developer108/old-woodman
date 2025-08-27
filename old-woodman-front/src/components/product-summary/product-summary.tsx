import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrentCategory } from '../../hooks/current-category/current-category.ts';
import { QuantitySelector } from '../quantity-selector/quantity-selector.tsx';
import type { ProductSummaryProps } from './product-summary.types.ts';
import styles from './product-summary.module.scss';

export const ProductSummary: React.FC<ProductSummaryProps> = ({
  product,
  quantity,
  lang,
  onIncrease,
  onDecrease,
}) => {
  const { t } = useTranslation('common');
  const category = useCurrentCategory();
  return (
    <div className={styles.productSummary}>
      <div className={styles.imageWrapper}>
        <img src={product.images[0]} alt={product.title[lang]}/>
      </div>

      <div className={styles.productName}>
        <div>{product.title[lang]},</div>
       { category === 'doors' && <div>{product.description[lang] || product.shortName[lang] }</div>}
        <div className={styles.shotName}>{product.shortName[lang]}</div>
      </div>

      <span className={styles.hiddenTitle}>{t('modal-order.quantity')}</span>
      <div className={styles.quantitySelector}>
        <QuantitySelector
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
      <span className={styles.hiddenSum}>{t('modal-order.sum')}</span>
      <div className={styles.price}>{(product.price * quantity).toLocaleString()} ₸</div>
    </div>
  );
};