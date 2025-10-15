import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { BreadcrumbsProps } from './breadcrumbs.types.ts';
import styles from './breadcrumbs.module.scss'

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ current, categoryId, categoryTitle }) => {
    const { t, i18n } = useTranslation('common');
    const lang = i18n.language as 'ru' | 'kk';

    const categoryTitleMap: Record<string, LanguageText> = {
        doors: { ru: 'Двери', kk: 'Есіктер' },
        furniture: { ru: 'Мебель', kk: 'Жиһаз' },
        facades: { ru: 'Фасады', kk: 'Фасадтар' },
        gifts: { ru: 'Подарки', kk: 'Сыйлықтар' },
    };

    const categoryTitleFinal =
        categoryTitle ?? (categoryId ? categoryTitleMap[categoryId]?.[lang] : null);

    return (
        <nav className={styles.breadcrumbs} aria-label="breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>
                {t('main')}
            </Link>

            {categoryId && (
                <>
                    <span className={styles.breadcrumbSeparator}>›</span>
                    <Link to={`/${categoryId}`} className={styles.breadcrumbLink}>
                        {categoryTitleFinal}
                    </Link>
                </>
            )}

            <span className={styles.breadcrumbSeparator}>›</span>
            <span className={styles.breadcrumbCurrent}>{current}</span>
        </nav>
    );
};
