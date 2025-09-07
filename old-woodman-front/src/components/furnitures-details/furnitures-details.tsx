import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import useDevice from '../../hooks/device/use-device.ts';
import {useCart} from '../../hooks/cart/cart.tsx';
import {useModal} from '../../hooks/modal/use-modal.ts';
import {useProductCatalog} from '../../hooks/catalog/use-product-catalog.ts';
import {useCurrentCategory} from '../../hooks/current-category/current-category.ts';
import {LikeButton} from '../buttons/like-button/like-button.tsx';
import {ImageSlider} from '../image-slider/image-slider.tsx';
import {ColorButton} from '../buttons/color-button/color-button.tsx';
import {OrderIcon} from '../icons/order-icon/order-icon.tsx';
import {CommonButtonsBlock} from '../buttons/common-buttons-block/common-buttons-block.tsx';
import {getDescriptionLines} from '../../utils/get-description-lines.ts';
import {OneClickModal} from '../modal-windows/one-click-order/one-click-order.tsx';
import {CartModal} from '../modal-windows/cart-modal/cart-modal.tsx';
import {ProductSlider} from '../product-slider/product-slider.tsx';
import {getRandomProducts} from '../../utils/get-random-item.ts';
import {formatSet, formatData, formatMaterialsText} from "../../utils/format-data.ts";
import styles from '../doors-details/doors-details.module.scss';

export const FurnituresDetails: React.FC = () => {
    const navigate = useNavigate();
    const {t, i18n} = useTranslation('furniture');
    const {isMobile} = useDevice();
    const {isInCart, addToCart} = useCart();
    const {showModal} = useModal()
    const {collectionId} = useParams();
    const {id: productId} = useParams();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const {
        getCollectionById,
        getItemById,
        getProductById,
        getProductDetailsById
    } = useProductCatalog();
    const category = useCurrentCategory();
    const lang = i18n.language as 'ru' | 'kk';
    const item = getItemById(collectionId!, productId!);

    const images = item!.images;
    const descriptionLines = useMemo(() => getDescriptionLines(productId!, t), [productId, t]);
    const handleOneClick = () => {
        showModal(<OneClickModal id={productId!}/>);
    };
    const handleCartClick = () => {
        addToCart(productId!)
        showModal(<CartModal id={productId!}/>);
    };
    const randomCollection = useMemo(() => {
        if (!productId) {
            return [];
        }
        const details = getProductDetailsById(productId);
        const excludeIds = details?.collection?.items.map((item) => item.id) ?? [];
        return getRandomProducts({
            count: 5,
            excludeProductId: excludeIds,
        });
    }, [productId]);

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

    return (
        <>
            <div className={`${styles.page} ${styles.furniture} `}>
                <section className={styles.imagesWrap}>
                    <div
                        className={`${styles.imageBlock} ${/*selectedIndex !== 0 && */category === 'furniture' ? styles.full : ''}`}>

                        <img
                            className={styles.mainImage}
                            src={product.images[selectedIndex]}
                            alt={product.alt}
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
                            {lang === 'ru'
                                ? (
                                    <>
                                        {t('price-label')} {product.price.toLocaleString()} ₸*
                                    </>
                                )
                                : (
                                    <>
                                        {product.price.toLocaleString()} ₸* {t('price-label')}
                                    </>
                                )}
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
                        <h2>{t('parameter-header.color').toUpperCase()}</h2>
                        <span>{t('parameter-header.color.text')}</span>
                    </div>
                    <div className={styles.column}>
                        <h2>{t('parameter-header.materials').toUpperCase()}</h2>
                        <span>{formatMaterialsText(product, i18n.language as 'ru' | 'kk')}</span>

                        <h2>{t('parameter-header.sizes').toUpperCase()}
                            {product.set && (
                                <span className={styles.setDescription}>
                                    : {formatSet(product.set, i18n.language as 'ru' | 'kk').toUpperCase()}
                                 </span>
                            )}</h2>

                        <span
                            className={styles.sizeSpan}><b>{t('parameter-header.sizes.height')}</b>{`: ${formatData(product.sizes?.height)}`}</span>
                        <span
                            className={styles.sizeSpan}><b>{t('parameter-header.sizes.length')}</b>{`: ${formatData(product.sizes?.width)}`}</span>
                        <span
                            className={styles.sizeSpan}><b>{t('parameter-header.sizes.depth')}</b>{`: ${formatData(product.sizes?.depth)}`}</span>
                    </div>
                </div>
            </section>
            {filteredCollections && filteredCollections.length >= 1 &&
                <section className={styles.slider}>
                    <ProductSlider
                        title={`${t('slider-header.same')} ${t(`title-${collectionId}`)}`.toUpperCase()}
                        items={filteredCollections}
                        headingSize='large'
                        handleCardClick={(productId) => {
                            navigate(`/furniture/${collectionId}/${productId}`);
                        }}

                    />

                </section>
            }

            <section className={styles.slider}>
                <ProductSlider
                    title={t('random-title').toUpperCase()}
                    items={randomCollection}
                    headingSize='large'
                    handleCardClick={(productId) => {
                        const productDetails = getProductDetailsById(productId);
                        if (!productDetails) return;
                        const {collection} = productDetails;
                        navigate(`/furniture/${collection.id}/${productId}`);
                    }}
                />
            </section>
        </>
    )
}