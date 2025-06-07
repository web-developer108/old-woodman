import React from 'react';
import type { OvalButtonProps } from './oval-button.types.ts';
import styles from './oval-button.module.scss';

export const OvalButton: React.FC<OvalButtonProps> = ({
  theme = 'light',
  icon,
  text,
  onClick,
}) => {
  const combinedClassName = `${styles.button} ${styles[theme]}`.trim();
  return (
    <button
      onClick={onClick} className={combinedClassName}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{text}</span>
    </button>
  );
};
