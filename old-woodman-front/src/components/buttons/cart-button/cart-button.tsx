import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../../hooks/cart/cart.tsx';
import { CloseIcon } from '../../icons/close-icon/close-icon.tsx';
import { PlusIcon } from '../../icons/plus-icon/plus-icon.tsx';
import type { CartButtonProps } from './cart-button.types.ts';
import styles from './cart-button.module.scss';

export const CartButton: React.FC<CartButtonProps> = ({ productId }) => {
  const { t } = useTranslation('common')
  const { isInCart, addToCart, removeFromCart } = useCart();
  const inCart = isInCart(productId);

  const handleClick = () => {
    if (inCart) {
      removeFromCart(productId);
    } else {
      addToCart(productId);
    }
  };
  return (
    <button
      className={`${styles.button} ${inCart ? styles.inCart : ''}`}
      onClick={handleClick}
      aria-label={inCart ? t('aria-label-in') : t('aria-label-out')}
    >
      <span className={styles.icon}>
       {inCart ? <CloseIcon/> : <PlusIcon/>}
      </span>
      <span className={styles.text}>
        {inCart ? t('cart-label-out') : t('cart-label-in')}
      </span>
    </button>
  );
};