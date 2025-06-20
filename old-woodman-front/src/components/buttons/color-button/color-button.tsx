import React from 'react';
import type { ColorButtonProps } from './color-button.types.ts';
import styles from './color-button.module.scss';

export const ColorButton: React.FC<ColorButtonProps> = ({
  label,
  variant = 'yellow',
  icon,
  onClick,
  disabled = false
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass}
            onClick={onClick}
            disabled={disabled}
    >
      <span className={styles.label}>{label}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};