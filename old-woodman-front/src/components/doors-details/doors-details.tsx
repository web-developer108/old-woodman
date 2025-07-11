import React from 'react';
import { useTranslation } from 'react-i18next';
import type { DoorsDetailsProps } from './doors-derails.types.ts';
import { useCart } from '../../hooks/cart/cart.tsx';
import { LikeButton } from '../buttons/like-button/like-button.tsx';
import { ImageSlider } from '../image-slider/image-slider.tsx';
import { useNavigate } from 'react-router-dom';
import styles from './doors-details.module.scss';

export const DoorsDetails: React.FC<DoorsDetailsProps> = ({ collection, product, lang }) => {
  const { t } = useTranslation('doors');
  const { isInCart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const items = collection?.items || [];
  const selectedProduct = product.id
    ? items.find((item) => item.id === product.id) || items[0]
    : items[0];
  return (
    <div className={styles.page}>
      <div className={styles.imagesWrap}>
        <div className={styles.imageBlock}>
          <img
            src={product.images[0]}
            alt={product.title[lang]}
            className={styles.mainImage}
          />
          <div className={styles.likeWrap}>
            <LikeButton productId={product.id}/>
          </div>

        </div>
        <div className={styles.sliderContainer}>
        <ImageSlider
          selectedIndex={items.findIndex((i) => i.id === selectedProduct.id)}
          onSelect={(index) => {
            const selected = collection.items[index];
            navigate(`/doors/${collection.id}?productId=${selected.id}`);
          }}
        />
        </div>
      </div>
      <div className={styles.infoBlock}>
        <h1 className={styles.title}>{collection.pageTitle?.[lang]}</h1>
        <p className={styles.description}>{product.description[lang]}</p>
        <p className={styles.price}>
          {t('price-label')} {product.price.toLocaleString()} ₸*
        </p>

        <div className={styles.actions}>
          <LikeButton productId={product.id}/>

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
