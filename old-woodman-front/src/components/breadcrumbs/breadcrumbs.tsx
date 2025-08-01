import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { BreadcrumbsProps } from './breadcrumbs.types.ts';
import styles from './breadcrumbs.module.scss'

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ current, categoryTitle, categoryId }) => {
const {t} = useTranslation('common')

  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <Link to="/" className={styles.breadcrumbLink}>{t('main')}</Link>

      {categoryTitle && categoryId && (
        <>
          <span className={styles.breadcrumbSeparator}>›</span>
          <Link to={`/${categoryId}`} className={styles.breadcrumbLink}>{categoryTitle}</Link>
        </>
      )}

      <span className={styles.breadcrumbSeparator}>›</span>
      <span className={styles.breadcrumbCurrent}>{current}</span>
    </nav>
  );
};
