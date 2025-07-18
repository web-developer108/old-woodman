import React from 'react';
import type { ProductSummaryProps } from './product-summary.types.ts';
import { useTranslation } from 'react-i18next';
import { QuantitySelector } from '../quantity-selector/quantity-selector.tsx';
import styles from './product-summary.module.scss';

export const ProductSummary: React.FC<ProductSummaryProps> = ({
  product,
  quantity,
  lang,
  onIncrease,
  onDecrease,
}) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.productSummary}>
      <div className={styles.imageWrapper}>
        <img src={product.images[0]} alt={product.title[lang]}/>
      </div>

      <div className={styles.productName}>
        <div>{product.title[lang]},</div>
        <div>{product.description[lang]}</div>
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