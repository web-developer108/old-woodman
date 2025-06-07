import { NavLink } from 'react-router-dom';
import { HeartIcon } from '../icons/heart-icon/heart-icon.tsx';
import { CartIcon } from '../icons/cart-icon/cart-icon.tsx';
import { BurgerIcon } from '../icons/burger-icon/burger-icon.tsx';
import { Logo } from '../logo/logo.tsx';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './language-switcher/language-switcher.tsx';
import styles from './header-bar.module.scss'

export const HeaderBar = () => {
  const { t } = useTranslation('common');

  const getNavLinkClass = (isActive: boolean) =>
    `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo/>
        </div>
        <div className={styles.menu}>
          <NavLink to="/doors"    className={({ isActive }) => getNavLinkClass(isActive)}>{t('doors')}</NavLink>
          <NavLink to="/furniture"  className={({ isActive }) => getNavLinkClass(isActive)}>{t('furniture')}</NavLink>
          <NavLink to="/facades"  className={({ isActive }) => getNavLinkClass(isActive)}>{t('facades-panels')}</NavLink>
          <NavLink to="/gifts"  className={({ isActive }) => getNavLinkClass(isActive)}>{t('gifts-decor')}</NavLink>
          <NavLink to="/promotions"  className={({ isActive }) => getNavLinkClass(isActive)}>{t('promotions')}</NavLink>
          <NavLink to="/contacts"  className={({ isActive }) => getNavLinkClass(isActive)}>{t('contacts')}</NavLink>
        </div>
        {/* ПРАВАЯ ЧАСТЬ */}
        <div className={styles.right}>
          <div className={styles.lang}>
            <LanguageSwitcher />
          </div>

          {/* Кнопка "Связаться" — только на mobile */}
          <div className={styles.contactBtn}>
            {/* <CircleButton icon={<TelegramIcon/>}/>*/}
            {/* Или обычная кнопка "Связаться" */}
          </div>

          <div className={styles.icons}>
            <HeartIcon/> <span>4</span>
            <CartIcon/> <span>3</span>
          </div>

          <div className={styles.burger}>
            <BurgerIcon/>
          </div>
        </div>
      </div>
    </header>
  )
}