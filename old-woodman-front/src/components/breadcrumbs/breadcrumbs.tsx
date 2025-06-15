import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumbs.module.scss'
import { useTranslation } from 'react-i18next';

type BreadcrumbsProps = {
  current: string;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ current }) => {
const {t} = useTranslation('common')
  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <Link to="/" className={styles.breadcrumbLink}>{t('main')}</Link>
      <span className={styles.breadcrumbSeparator}>›</span>
      <span className={styles.breadcrumbCurrent}>{current}</span>
    </nav>
  );
};
