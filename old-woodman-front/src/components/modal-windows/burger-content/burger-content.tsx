import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SocialPanel } from '../../social-panel/social-panel.tsx';
import type { BurgerContentProps } from './burger-content.types.ts';
import styles from './burger-content.module.scss';

export const BurgerContent: React.FC<BurgerContentProps>  = ({onClose}) => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const goTo = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className={styles.burgerMenu}>

      <ul className={styles.navigation}>
        {/*<li onClick={() => goTo('/')}>Наш столярный цех</li>*/}
        <li onClick={() => goTo('/doors')}>{t('footer.doors').toUpperCase()}</li>
        <li onClick={() => goTo('/furniture')}>{t('footer.furniture').toUpperCase()}</li>
        <li onClick={() => goTo('/facades')}>{t('facades-panels').toUpperCase()}</li>
        <li onClick={() => goTo('/gifts')}>{t('gifts-decor').toUpperCase()}</li>
        <li onClick={() => goTo('/favorites')}>{t('favorites').toUpperCase()}</li>
        <li onClick={() => goTo('/cart')}>{t('cart').toUpperCase()}</li>
        <li onClick={() => goTo('/promotions')}>{t('promotions').toUpperCase()}</li>
      </ul>

      <div className={styles.footerLinks}>
        <a href="/faq">Частые вопросы</a>
        <a href="/info">{t('footer.info')}</a>
        <a href="/terms">{t('footer.terms')}</a>
        <a href="/contacts">{t('contacts')}</a>
      </div>

      <div className={styles.social}>
        <SocialPanel/>
      </div>

    </div>
  );
};
