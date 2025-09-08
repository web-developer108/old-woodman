import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../hooks/modal/use-modal.ts';
import { useFavorites } from '../../hooks/favorites/favorites.tsx';
import { useCart } from '../../hooks/cart/cart.tsx';
import { HeartIcon } from '../icons/heart-icon/heart-icon.tsx';
import { CartIcon } from '../icons/cart-icon/cart-icon.tsx';
import { BurgerIcon } from '../icons/burger-icon/burger-icon.tsx';
import { Logo } from '../logo/logo.tsx';
import { LanguageSwitcher } from './language-switcher/language-switcher.tsx';
import { OvalButton } from '../buttons/oval-button/oval-button.tsx';
import ContactsModal from '../modal-windows/contacts-modal/contacts-modal.tsx';
import { BurgerContent } from '../modal-windows/burger-content/burger-content.tsx';
import { useEffect, useState } from 'react';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { CloseIcon } from '../icons/close-icon/close-icon.tsx';
import useDevice from '../../hooks/device/use-device.ts';
import styles from './header-bar.module.scss'

export const HeaderBar = () => {
  const { t } = useTranslation('common');
  const { favorites } = useFavorites();
  const { cartItems } = useCart();
  const { showModal } = useModal();
  const { isMobile } = useDevice();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  const getNavLinkClass = (isActive: boolean) =>
    `${styles.link} ${isActive ? styles.active : ''}`;

  const showElements = !isMobile || !isMenuOpen

  const handleBurgerOpen = () => {
    setIsClosing(false);
    setMenuOpen(true);
  };

  const handleBurgerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
    }, 400);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {isHome
            ? (<div className={styles.logo}>
              <Logo/>
            </div>)
            : (
              <Link to="/" aria-label={t('logo-link')} style={{ display: 'inline-block' }}>
                <Logo/>
              </Link>
            )
          }
          <div className={styles.menu}>
            <NavLink to="/doors" className={({ isActive }) => getNavLinkClass(isActive)}>{t('doors')}</NavLink>
            <NavLink to="/furniture" className={({ isActive }) => getNavLinkClass(isActive)}>{t('furniture')}</NavLink>
            <NavLink to="/facades"
                     className={({ isActive }) => getNavLinkClass(isActive)}>{t('facades-panels')}</NavLink>
            <NavLink to="/gifts" className={({ isActive }) => getNavLinkClass(isActive)}>
              {t('gifts-decor')}</NavLink>
            <NavLink to="/promotions"
                     className={({ isActive }) => getNavLinkClass(isActive)}>{t('promotions')}</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => getNavLinkClass(isActive)}>{t('contacts')}</NavLink>
          </div>

              <div className={styles.contactBtn}>
                  <OvalButton text={t('connect')} onClick={() => showModal(<ContactsModal/>)}/>
              </div>

          <div className={styles.right}>
            {showElements &&
                <>
                    <div className={styles.lang}>
                        <LanguageSwitcher/>
                    </div>

                    <div className={styles.icons}>
                        <Link to="/favorites"> <HeartIcon/> <span>{favorites.length}</span> </Link>
                        <Link to="/cart"> <CartIcon/> <span>{cartItems.length}</span> </Link>
                    </div>
                </>
            }


            <div className={styles.burger} onClick={isMenuOpen ? handleBurgerClose : handleBurgerOpen}>
              {isMenuOpen
                ? <CircleButton ariaLabel={t('header.aria-label')} icon={<CloseIcon/>} bgColor="transparent"/>
                : <BurgerIcon/>}
            </div>

          </div>
        </div>
      </header>
      {isMenuOpen && (
        <BurgerContent onClose={handleBurgerClose} isClosing={isClosing}/>
      )}

    </>
  )
}