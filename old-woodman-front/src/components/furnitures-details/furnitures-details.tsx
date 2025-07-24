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

export const FurnituresDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation('doors');
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
  useEffect(() => {
    if (!productId || !images?.length) return;

    const index = images.findIndex((img) =>
      img.includes(productId)
    );

    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, [productId, images]);
  console.log('images', images)

  if (!productId) return <div>Product not found</div>;
  const product = getProductById(productId)
  if (!product) return <div>Product not found</div>;

  return (
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

    </div>
  )
}