import { HeartIcon } from '../icons/heart-icon/heart-icon.tsx';
import { CartIcon } from '../icons/cart-icon/cart-icon.tsx';
import { BurgerIcon } from '../icons/burger-icon/burger-icon.tsx';
import { Logo } from '../logo/logo.tsx';
import styles from './header-bar.module.scss'


export const HeaderBar = ()=>{

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
         <Logo/>
        </div>

        {/* МЕНЮ — видно только на desktop */}
        <nav className={styles.menu}>
          <a>Двери</a>
          <a>Мебель</a>
          <a>Фасады и панели</a>
          <a>Подарки и декор</a>
          <a>Акции</a>
          <a>Контакты</a>
        </nav>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className={styles.right}>
          <div className={styles.lang}>Рус | Каз</div>

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