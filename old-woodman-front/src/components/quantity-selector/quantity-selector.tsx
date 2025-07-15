import React from 'react';
import styles from './quantity-selector.module.scss'

export const QuantitySelector: React.FC<{
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}> = ({ quantity, onIncrease, onDecrease }) => (
  <div className={styles.quantitySelector}>
    <button onClick={onDecrease} className={styles.button}>−</button>
    <span className={styles.value}>{quantity}</span>
    <button onClick={onIncrease} className={styles.button}>+</button>
  </div>
);