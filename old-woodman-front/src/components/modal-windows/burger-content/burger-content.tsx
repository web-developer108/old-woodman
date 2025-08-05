import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SocialPanel } from '../../social-panel/social-panel.tsx';
import type { BurgerContentProps } from './burger-content.types.ts';
import styles from './burger-content.module.scss';

export const BurgerContent: React.FC<BurgerContentProps> = ({ onClose }) => {
  const { t } = useTranslation('common');
  const location = useLocation();
  const prevPathRef = useRef({ pathname: location.pathname, hash: location.hash });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const { pathname, hash } = location;
    const prev = prevPathRef.current;

    if (pathname !== prev.pathname || hash !== prev.hash) {
      onClose();
    }

    prevPathRef.current = { pathname, hash };
  }, [location.pathname, location.hash]);

  const handleLinkClick = (path: string) => {
    const url = new URL(path, window.location.origin);
    const isSamePath = url.pathname === location.pathname;
    const isSameHash = url.hash === location.hash;

    if (isSamePath && isSameHash) {
      onClose();
    }
  };

  return (
    <div className={styles.burgerMenu}>

      <div className={styles.navigation}>
        <Link to="/doors"  onClick={() => handleLinkClick('/doors')}>{t('footer.doors').toUpperCase()}</Link>
        <Link to="/furniture" onClick={() => handleLinkClick('/furniture')}>{t('footer.furniture').toUpperCase()}</Link>
        <Link to="/facades" onClick={() => handleLinkClick('/facades')}>{t('facades-panels').toUpperCase()}</Link>
        <Link to="/gifts" onClick={() => handleLinkClick('/gifts')}>{t('gifts-decor').toUpperCase()}</Link>
        <Link to="/favorites" onClick={() => handleLinkClick('/favorites')}>{t('favorites').toUpperCase()}</Link>
        <Link to="/cart" onClick={() => handleLinkClick('/cart')}>{t('cart').toUpperCase()}</Link>
        <Link to="/promotions" onClick={() => handleLinkClick('/promotions')}>{t('promotions').toUpperCase()}</Link>
      </div>
      <div className={styles.footerLinks}>
        <Link to="/#faq" onClick={() => handleLinkClick('/#faq')}>{t('footer.questions')}</Link>
        <Link to="/info" onClick={() => handleLinkClick('/info')}>{t('footer.info')}</Link>
        <Link to="/terms" onClick={() => handleLinkClick('/terms')}>{t('footer.terms')}</Link>
        <Link to="/contacts"onClick={() => handleLinkClick('/contacts')}>{t('contacts')}</Link>
      </div>
      <div className={styles.social}>
        <SocialPanel/>
      </div>
    </div>
  );
};
