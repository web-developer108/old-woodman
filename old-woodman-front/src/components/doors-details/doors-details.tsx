import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../hooks/cart/cart.tsx';
import { LikeButton } from '../buttons/like-button/like-button.tsx';
import { ImageSlider } from '../image-slider/image-slider.tsx';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useDevice from '../../hooks/device/use-device.ts';
import { productCatalog } from '../../config/products.config.ts';
import { getDescriptionLines } from '../../utils/get-description-lines.ts';
import { ColorButton } from '../buttons/color-button/color-button.tsx';
import { OrderIcon } from '../icons/order-icon/order-icon.tsx';
import { useModal } from '../../hooks/modal/use-modal.ts';
import { OneClickModal } from '../modal-windows/one-click-order/one-click-order.tsx';
import { CartModal } from '../modal-windows/cart-modal/cart-modal.tsx';
import styles from './doors-details.module.scss';
import { CommonButtonsBlock } from '../buttons/common-buttons-block/common-buttons-block.tsx';

export const DoorsDetails: React.FC = () => {
  const { t, i18n } = useTranslation('doors');
  const { isMobile } = useDevice();
  const { isInCart, addToCart } = useCart();
  const {showModal} = useModal()
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const { collectionId } = useParams();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const lang = i18n.language as 'ru' | 'kk';
  const collection = productCatalog
    .find((cat) => cat.id === 'doors')
    ?.collections?.find((col) => col.id === collectionId);

  const items = collection?.items || [];

  const selectedProduct = productId
    ? items.find((item) => item.id === productId) || items[0]
    : items[0];

  const descriptionLines = getDescriptionLines(collectionId!, t);

  const handleOneClick = () => {
    showModal(<OneClickModal id={selectedProduct.id} />);
  };
  const handleCartClick = () => {
    addToCart(selectedProduct.id)
    showModal(<CartModal id={selectedProduct.id} />);
  };
  useEffect(() => {
    const checkOverflow = () => {
      const el = textRef.current;
      if (!el) return;
      const maxHeight = isMobile ? 202 : 305;

      const overflowing = el.scrollHeight > maxHeight;

      setIsOverflowing(overflowing);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [isMobile]);
  if (!collection || !selectedProduct) return null;
  return (
    <div className={styles.page}>
      <div className={styles.imagesWrap}>
        <div className={styles.imageBlock}>
          <img
            src={selectedProduct.images[0]}
            alt={selectedProduct.title[lang]}
            className={styles.mainImage}
          />
          <div className={styles.likeWrap}>
            <LikeButton productId={selectedProduct.id}/>
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
            {t('price-label')} {selectedProduct.price.toLocaleString()} ₸*
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
            {descriptionLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {isOverflowing &&
            !isExpanded &&
            (
              <button className={styles.readMoreButton} onClick={() => setIsExpanded(true)}>
                {t('button-read.label')}
              </button>
            )}
        </div>

        <div className={styles.actions}>
          <ColorButton
            label = {t('button-order.label')}
            variant='white'
            icon={<OrderIcon/>}
            onClick = {handleOneClick}
          />
          <ColorButton
            label =  {isInCart(selectedProduct.id) ? t('button.in-cart') : t('button.add-to-cart')}
            onClick = {handleCartClick}
          />
          <CommonButtonsBlock/>
        </div>
      </div>
    </div>
  );
};
