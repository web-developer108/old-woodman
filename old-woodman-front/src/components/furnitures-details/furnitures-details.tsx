import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ToolPageLayout } from '../tool-page-layout/tool-page-layout.tsx';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useDevice from '../../hooks/device/use-device.ts';
import { useCart } from '../../hooks/cart/cart.tsx';
import { useModal } from '../../hooks/modal/use-modal.ts';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import styles from '../doors-details/doors-details.module.scss';
import { LikeButton } from '../buttons/like-button/like-button.tsx';
import { ImageSlider } from '../image-slider/image-slider.tsx';
import { useCurrentCollectionItems } from '../../hooks/current-collection/current-collection-items.tsx';
import { ColorButton } from '../buttons/color-button/color-button.tsx';
import { OrderIcon } from '../icons/order-icon/order-icon.tsx';
import { CommonButtonsBlock } from '../buttons/common-buttons-block/common-buttons-block.tsx';
import { getDescriptionLines } from '../../utils/get-description-lines.ts';
import { OneClickModal } from '../modal-windows/one-click-order/one-click-order.tsx';
import { CartModal } from '../modal-windows/cart-modal/cart-modal.tsx';
import SimpleBar from 'simplebar-react';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { AppColors } from '../../styles.ts';
import { ArrowRightIcon } from '../icons/arrow-right-icon/arrow-right-icon.tsx';
import { OvalButton } from '../buttons/oval-button/oval-button.tsx';
import { ProductSlider } from '../product-slider/product-slider.tsx';

export const FurnituresDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation('furniture');
  const { isMobile } = useDevice();
  const { isInCart, addToCart } = useCart();
  const { showModal } = useModal()
  const { collectionId } = useParams();
  const { id: productId } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const simpleBarRef = useRef<any>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const {
    getCollectionById,
    getCollectionTitleById,
    getProductDetailsById,
    getItemById,
    getProductById,
  } = useProductCatalog();
  const lang = i18n.language as 'ru' | 'kk';
  const item = getItemById(collectionId!, productId!);
  const images = item!.images;
  const descriptionLines = useMemo(() => getDescriptionLines( productId!, t), [ productId, t]);
  const handleOneClick = () => {
    showModal(<OneClickModal id={productId!}/>);
  };
  const handleCartClick = () => {
    addToCart(productId!)
    showModal(<CartModal id={productId!}/>);
  };
  useEffect(() => {
    if (!productId || !images?.length) return;
    const index = images.findIndex((img) =>
      img.includes(productId)
    );
    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, [productId, images]);
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

  if (!productId) return <div>Product not found</div>;
  const product = getProductById(productId)
  if (!product) return <div>Product not found</div>;
  const items = getCollectionById(collectionId!);
  const filteredCollections = items?.items.filter(item => item.id !== productId)
  console.log('filteredCollections', filteredCollections)
  return (
    <>
      <div className={styles.page}>
        <section className={styles.imagesWrap}>
          <div className={styles.imageBlock}>
            <img
              className={styles.mainImage}
              src={product.images[selectedIndex]}
              alt={product.title[lang]}
            />
            <div className={styles.likeWrap}>
              <LikeButton productId={product.id}/>
            </div>
          </div>
          <div className={styles.sliderContainer}>
            <ImageSlider
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            />
          </div>
        </section>
        <section className={styles.infoBlock}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>{product.pageHeader?.[lang]}</h1>
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
              label={t('button-order.label')}
              variant='white'
              icon={<OrderIcon/>}
              onClick={handleOneClick}
            />
            <ColorButton
              label={isInCart(productId) ? t('button.in-cart') : t('button.add-to-cart')}
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
            <span>{`${t('parameter-header.period.text-1')} ${product.time}  ${t('parameter-header.period.text-2')}`}</span>
            <h2>{t('parameter-header.price').toUpperCase()}</h2>
            <span>{t('parameter-header.price.text')}</span>
          </div>
          <div className={styles.column}>
            <h2>{t('parameter-header.materials').toUpperCase()}</h2>
            <span>{t('parameter-header.materials.text')}</span>
            <h2>{t('parameter-header.color').toUpperCase()}</h2>
            <span>{t('parameter-header.color.text')}</span>
          </div>
        </div>
      </section>
      <section className={styles.slider}>

                <ProductSlider
                title ='dsdss'
                collectionId = {collectionId!}
                />

      </section>
    </>
  )
}