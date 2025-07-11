import React from 'react';
import type { CircleButtonProps } from './circle-button.types.ts';
import styles from './circle-button.module.scss';

export const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  ariaLabel,
  bgColor = '#e3e3e3',
  onClick,
  disabled,
  disabledColor = '#ffffff'
}) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      aria-label={ariaLabel}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
      disabled={disabled}
    >
      <span style={{ color: disabled ? disabledColor : 'inherit' }}>{icon}</span>
    </button>
  );
};