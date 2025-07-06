import React from 'react';
import type { CartButtonProps } from './cart-button.types.ts';
import { useCart } from '../../../hooks/cart/cart.tsx';
import { PlusIcon } from '../../icons/plus-icon/plus-icon.tsx';
import styles from './cart-button.module.scss';
import { useTranslation } from 'react-i18next';

export const CartButton: React.FC<CartButtonProps> = ({ productId }) => {
  const {t} = useTranslation('common')
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
        <PlusIcon />
      </span>
      <span className={styles.text}>
        {inCart ? t('cart-label-out') : t('cart-label-in')}
      </span>
    </button>
  );
};