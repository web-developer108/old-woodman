import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SocialPanel } from '../../social-panel/social-panel.tsx';
import type { BurgerContentProps } from './burger-content.types.ts';
import styles from './burger-content.module.scss';

export const BurgerContent: React.FC<BurgerContentProps> = ({ onClose }) => {
  const { t } = useTranslation('common');
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
  useEffect(() => {
    if (location.pathname !== prevPathRef.current) {
      onClose();
    }
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <div className={styles.burgerMenu}>

      <div className={styles.navigation}>
        <Link to="/doors">{t('footer.doors').toUpperCase()}</Link>
        <Link to="/furniture">{t('footer.furniture').toUpperCase()}</Link>
        <Link to="/facades">{t('facades-panels').toUpperCase()}</Link>
        <Link to="/gifts">{t('gifts-decor').toUpperCase()}</Link>
        <Link to="/favorites">{t('favorites').toUpperCase()}</Link>
        <Link to="/cart">{t('cart').toUpperCase()}</Link>
        <Link to="/promotions">{t('promotions').toUpperCase()}</Link>
      </div>
      <div className={styles.footerLinks}>
        <Link to="/#faq" onClick={onClose}>{t('footer.questions')}</Link>
        <Link to="/info" onClick={onClose}>{t('footer.info')}</Link>
        <Link to="/terms" onClick={onClose}>{t('footer.terms')}</Link>
        <Link to="/contacts" onClick={onClose}>{t('contacts')}</Link>
      </div>
      <div className={styles.social}>
        <SocialPanel/>
      </div>
    </div>
  );
};
