import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { DoorsDetailsProps } from './doors-derails.types.ts';
import { useCart } from '../../hooks/cart/cart.tsx';
import { LikeButton } from '../buttons/like-button/like-button.tsx';
import { ImageSlider } from '../image-slider/image-slider.tsx';
import { useNavigate } from 'react-router-dom';
import useDevice from '../../hooks/device/use-device.ts';
import styles from './doors-details.module.scss';

export const DoorsDetails: React.FC<DoorsDetailsProps> = ({ collection, product, lang }) => {
  const { t } = useTranslation('doors');
  const { isMobile } = useDevice();
  const { isInCart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const items = collection?.items || [];
  const selectedProduct = product.id
    ? items.find((item) => item.id === product.id) || items[0]
    : items[0];
  const text = 'Три сценария работы:\n' +
    '            1.\tВы можете выбрать дверь или мебель из нашей галереи и посчитать у нас стоимость изготовления по вашим параметрам: размер, цвет, фурнитура.\n' +
    '            2.\tВы можете отправить нам эскиз двери или мебели, указать размеры и желаемый цвет, а мы посчитаем стоимость производства.\n' +
    '            3.\tВы можете описать стиль вашего интерьера, а мы предложим подходящие варианты дверей и предметов мебели и посчитаем стоимость.\n'+
    '            3.\tВы можете описать стиль вашего интерьера, а мы предложим подходящие варианты дверей и предметов мебели и посчитаем стоимость.\n'+
    '            3.\tВы можете описать стиль вашего интерьера, а мы предложим подходящие варианты дверей и предметов мебели и посчитаем стоимость.\n'+
    '            3.\tВы можете описать стиль вашего интерьера, а мы предложим подходящие варианты дверей и предметов мебели и посчитаем стоимость.\n'+
    '            3.\tВы можете описать стиль вашего интерьера, а мы предложим подходящие варианты дверей и предметов мебели и посчитаем стоимость.\n'

  useEffect(() => {
    const checkOverflow = () => {
      const el = textRef.current;
      if (!el) return;
      const maxHeight = isMobile ? 202 : 405;

      const overflowing = el.scrollHeight > maxHeight;
      console.log('scrollHeight:', el.scrollHeight);
      console.log('maxHeight:', maxHeight);
      console.log('isMobile:', isMobile);
      setIsOverflowing(overflowing);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [isMobile]);

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
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{collection.pageTitle?.[lang]}</h1>
          <div className={styles.price}>
            {t('price-label')} {product.price.toLocaleString()} ₸*
            <div className={styles.tooltipWrapper}>
              <div className={styles.icon}>i</div>
              <div className={styles.tooltip}>{t('info-text')}</div>
            </div>
          </div>

        </div>
        <div className={styles.descriptionContainer}>
          <div
            ref={textRef}
            className={[
              styles.textBlock,
              isExpanded ? styles.expanded : '',
              isOverflowing && !isExpanded ? styles.showFade : ''
            ].join(' ')}
          >
            {text}
          </div>

          {isOverflowing &&
            !isExpanded &&
            (
            <button className={styles.readMoreButton} onClick={() => setIsExpanded(true)}>
              Читать дальше
            </button>
          )}
        </div>

        <div className={styles.actions}>

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
