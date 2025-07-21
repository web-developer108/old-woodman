import React, { useEffect, useMemo, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
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
import { CommonButtonsBlock } from '../buttons/common-buttons-block/common-buttons-block.tsx';
import heroImageClassica from '@assets/images/doors/classica/classica-hero-wide.webp';
import heroImageLoft from '@assets/images/doors/loft/loft-hero.webp';
import heroImageDeco from '@assets/images/doors/deco/deco-hero.webp';
import heroImageCabinet from '@assets/images/doors/cabinet/cabinet-hero.webp';
import heroImageRustic from '@assets/images/doors/rustic/rustic-hero.webp';
import heroImageExclusive from '@assets/images/doors/exclusive/exclusive-hero.webp';
import heroImageBalcony from '@assets/images/doors/balcony/balcony-hero.webp';
import styles from './doors-details.module.scss';

export const DoorsDetails: React.FC = () => {
  const { t, i18n } = useTranslation('doors');
  const { isMobile } = useDevice();
  const { isInCart, addToCart } = useCart();
  const { showModal } = useModal()
  const navigate = useNavigate();
  const { collectionId } = useParams();
  const [searchParams] = useSearchParams();
  const textRef = useRef<HTMLDivElement>(null);
  const simpleBarRef = useRef<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const lang = i18n.language as 'ru' | 'kk';

  const productId = searchParams.get('productId');
  const collection = productCatalog
    .find((cat) => cat.id === 'doors')
    ?.collections?.find((col) => col.id === collectionId);

  const items = collection?.items || [];

  const selectedProduct = useMemo(() => {
    return productId
      ? items.find((item) => item.id === productId) || items[0]
      : items[0];
  }, [productId, items]);

  const descriptionLines = useMemo(() => getDescriptionLines(collectionId!, t), [collectionId, t]);

  const handleOneClick = () => {
    showModal(<OneClickModal id={selectedProduct.id}/>);
  };
  const handleCartClick = () => {
    addToCart(selectedProduct.id)
    showModal(<CartModal id={selectedProduct.id}/>);
  };
  const doorCollections = [
    { id: 'classica', src: heroImageClassica },
    { id: 'loft', src: heroImageLoft },
    { id: 'deco', src: heroImageDeco },
    { id: 'cabinet', src: heroImageCabinet },
    { id: 'rustic', src: heroImageRustic },
    { id: 'exclusive', src: heroImageExclusive },
    { id: 'balcony', src: heroImageBalcony },
  ];
  const filteredCollections = doorCollections.filter(
    (item) => item.id !== collection?.id
  );
  useEffect(() => {
    const checkOverflow = () => {
      const el = textRef.current;
      if (!el) return;
      const maxHeight = isMobile ? 202 : 305;

      const overflowing = el.scrollHeight > maxHeight;

      setIsOverflowing((prev) => prev !== overflowing ? overflowing : prev);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [isMobile]);

  if (!collection || !selectedProduct) return null;
  return (
    <>
      <div className={styles.page}>
        <section className={styles.imagesWrap}>
          <div className={styles.imageBlock}>
            <img
              className={styles.mainImage}
              src={selectedProduct.images[0]}
              alt={selectedProduct.title[lang]}
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
        </section>
        <section className={styles.infoBlock}>
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
              <p>{t('common.description')}</p>
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
              label={t('button-order.label')}
              variant='white'
              icon={<OrderIcon/>}
              onClick={handleOneClick}
            />
            <ColorButton
              label={isInCart(selectedProduct.id) ? t('button.in-cart') : t('button.add-to-cart')}
              onClick={handleCartClick}
            />
            <CommonButtonsBlock/>
          </div>
        </section>
      </div>
      <section className={styles.article}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2>{t('parameter-header.period').toUpperCase()}</h2>
            <span>{t('parameter-header.period.text')}</span>
            <h2>{t('parameter-header.price').toUpperCase()}</h2>
            <span>{t('parameter-header.price.text-1')}</span>
            <span>{t('parameter-header.price.text-2')}</span>
          </div>
          <div className={styles.column}>
            <h2>{t('parameter-header.materials').toUpperCase()}</h2>
            <span>{t('parameter-header.materials.text')}</span>
            <h2>{t('parameter-header.sizes').toUpperCase()}</h2>
            <span>{t('parameter-header.sizes.text-1')}</span>
            <span>{t('parameter-header.sizes.text-2')}</span>
            <h2>{t('parameter-header.color').toUpperCase()}</h2>
            <span>{t('parameter-header.color.text')}</span>
          </div>
        </div>
      </section>
      <section className={styles.slider}>
        <SimpleBar  ref={simpleBarRef} className={styles.wrapper} autoHide={false}>
          <div className={styles.track}>
            {
              filteredCollections.map((img, index) => (
                <img key={index} src={img.src} alt={img.id} className={styles.image} loading="lazy"/>
              ))
            }
          </div>
        </SimpleBar>
      </section>
    </>
  );
};
