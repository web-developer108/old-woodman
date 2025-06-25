import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SocialPanel } from '../../social-panel/social-panel.tsx';
import type { BurgerContentProps } from './burger-content.types.ts';
import styles from './burger-content.module.scss';

export const BurgerContent: React.FC<BurgerContentProps>  = ({onClose}) => {
  const { t } = useTranslation('common');
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className={styles.burgerMenu}>

      <div className={styles.navigation}>
        <Link to="/doors" onClick={onClose}>{t('footer.doors').toUpperCase()}</Link>
        <Link to="/furniture" onClick={onClose}>{t('footer.furniture').toUpperCase()}</Link>
        <Link to="/facades" onClick={onClose}>{t('facades-panels').toUpperCase()}</Link>
        <Link to="/gifts" onClick={onClose}>{t('gifts-decor').toUpperCase()}</Link>
        <Link to="/favorites" onClick={onClose}>{t('favorites').toUpperCase()}</Link>
        <Link to="/cart" onClick={onClose}>{t('cart').toUpperCase()}</Link>
        <Link to="/promotions" onClick={onClose}>{t('promotions').toUpperCase()}</Link>
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
