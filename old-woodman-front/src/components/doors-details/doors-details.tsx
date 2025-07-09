import { useTranslation } from 'react-i18next';
import styles from './doors.details.module.scss'
import type { DoorsDetailsProps } from './doors-derails.types.ts';
import { useFavorites } from '../../hooks/favorites/favorites.tsx';
import { useCart } from '../../hooks/cart/cart.tsx';
import { LikeButton } from '../buttons/like-button/like-button.tsx';

export const DoorsDetails: React.FC<DoorsDetailsProps> = ({ collection, product, lang }) => {
  const { t } = useTranslation('doors');
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInCart, addToCart, removeFromCart } = useCart();

  return (
    <div className={styles.page}>
      <div className={styles.imageBlock}>
        <img
          src={product.images[0]}
          alt={product.title[lang]}
          className={styles.mainImage}
        />
        {/* TODO: слайдер под изображением, если картинок > 1 */}
      </div>

      <div className={styles.infoBlock}>
        <h1 className={styles.title}>{collection.pageTitle?.[lang]}</h1>
        <p className={styles.description}>{product.description[lang]}</p>
        <p className={styles.price}>
          {t('price-label')} {product.price.toLocaleString()} ₸*
        </p>

        <div className={styles.actions}>
          <LikeButton productId = {product.id}/>

          <button
            onClick={() =>
              isInCart(product.id) ? removeFromCart(product.id) : addToCart(product.id)
            }
            className={styles.cartButton}
          >
            {isInCart(product.id) ? t('in-cart') : t('add-to-cart')}
          </button>
        </div>
      </div>
    </div>
  );
};
