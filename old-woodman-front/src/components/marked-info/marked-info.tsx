import React from 'react';
import type { MarkedInfoProps } from './marked-info.types.ts';
import styles from './marked-info.module.scss';

export const MarkedInfo: React.FC<MarkedInfoProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.text}>{children}</div>
    </div>
  );
};