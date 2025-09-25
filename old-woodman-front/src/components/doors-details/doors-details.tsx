import React, { useEffect, useMemo, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../hooks/cart/cart.tsx';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import useDevice from '../../hooks/device/use-device.ts';
import { useModal } from '../../hooks/modal/use-modal.ts';
import { CartModal } from '../modal-windows/cart-modal/cart-modal.tsx';
import { ImageSlider } from '../image-slider/image-slider.tsx';
import { LikeButton } from '../buttons/like-button/like-button.tsx';
import { ColorButton } from '../buttons/color-button/color-button.tsx';
import { OrderIcon } from '../icons/order-icon/order-icon.tsx';
import { OneClickModal } from '../modal-windows/one-click-order/one-click-order.tsx';
import { OvalButton } from '../buttons/oval-button/oval-button.tsx';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { ArrowRightIcon } from '../icons/arrow-right-icon/arrow-right-icon.tsx';
import { CommonButtonsBlock } from '../buttons/common-buttons-block/common-buttons-block.tsx';
import { ProductSlider } from '../product-slider/product-slider.tsx';
import { getRandomProducts } from '../../utils/get-random-item.ts';
import { AppColors } from '../../styles.ts';
import styles from './doors-details.module.scss';

export const DoorsDetails: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {t, i18n} = useTranslation('doors');
    const {isMobile} = useDevice();
    const {isInCart, addToCart} = useCart();
    const {showModal} = useModal()
    const {id: productId, collectionId} = useParams();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);
    const simpleBarRef = useRef<any>(null);

    const {
        getCollectionById,
        getCollectionTitleById,
        getProductById,
        getProductDetailsById,
        getCollectionsByCategoryId
    } = useProductCatalog();


    const lang = i18n.language as 'ru' | 'kk';

    const collection = getCollectionById(collectionId!);

    const items = useMemo(() => collection?.items || [], [collection]);

    const selectedProduct = useMemo(() => {
        return productId ? getProductById(productId) || items[0] : items[0];
    }, [productId, getProductById, items]);

    const productText = selectedProduct.text?.[lang] ?? [];

    const handleOneClick = () => {
        showModal(<OneClickModal id={selectedProduct.id}/>);
    };
    const handleCartClick = () => {
        addToCart(selectedProduct.id)
        showModal(<CartModal id={selectedProduct.id}/>);
    };

    const doorCollections = getCollectionsByCategoryId('doors');
    const filteredCollections = useMemo(
        () =>
            doorCollections.filter(c => c.id !== collection?.id),
        [doorCollections, collection?.id]
    );


    useEffect(() => {
        const handleResize = () => {
            simpleBarRef.current?.recalculate();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [location.pathname, location.hash]);

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
    }, [isMobile, lang]);

    useEffect(() => {
        setIsExpanded(false);
    }, [productId, lang]);

    useEffect(() => {
        simpleBarRef.current?.recalculate();
    }, [filteredCollections]);

    const randomCollection = useMemo(() => {
        if (!productId)
        {
            return [];
        }
        const details = getProductDetailsById(productId);
        const excludeIds = details?.collection?.items.map((item) => item.id) ?? [];
        return getRandomProducts({
            count: 5,
            excludeProductId: excludeIds,
        });
    }, [productId]);

    if (!collection || !selectedProduct) return null;

    return (
        <>
            <div className={styles.page}>
                <section className={styles.imagesWrap}>
                    <div className={styles.imageBlock}>
                        <img
                            className={styles.mainImage}
                            src={selectedProduct.images[0]}
                            alt={selectedProduct.alt}
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
                                navigate(`/doors/${collection.id}/${selected.id}`, {replace: true});
                            }}
                        />
                    </div>
                </section>
                <section className={styles.infoBlock}>
                    <div className={styles.titleBlock}>
                        <h1 className={styles.title}>
                            {selectedProduct.pageHeader?.[lang] ?? selectedProduct.title[lang]}
                        </h1>

                        <div className={styles.price}>
                            {lang === 'ru'
                                ? (
                                    <>
                                        {t('price-label')} {selectedProduct.price.toLocaleString()} ₸*
                                    </>
                                )
                                : (
                                    <>
                                        {selectedProduct.price.toLocaleString()} ₸* {t('price-label')}
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
                            {productText.map((line,
                                i) => (
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
                <h2 className={styles.sliderTitle}>{t('doors-title').toUpperCase()}</h2>
                <SimpleBar ref={simpleBarRef} className={styles.wrapper} autoHide={false}>
                    <div className={styles.track}>
                        {
                            filteredCollections.map((item,
                                index) => (
                                <div className={styles.infoImage} key={index}>

                                    <img src={item.heroImage} alt={item.heroAlt} className={styles.image}
                                         loading="lazy"/>
                                    <div className={styles.infoText}>
                                        <span>{getCollectionTitleById(item.id)}</span>
                                        {isMobile ?
                                            <CircleButton onClick={() => navigate(`/doors/${item.id}`)}
                                                          bgColor={AppColors.background.grey}
                                                          ariaLabel={t('button-transition.label')}
                                                          icon={<ArrowRightIcon color={AppColors.text.main}/>}/>
                                            :
                                            <OvalButton text={t('doors-transition.button')}
                                                        onClick={() => navigate(`/doors/${item.id}`)}/>}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </SimpleBar>
            </section>
            <section className={styles.slider}>

                <ProductSlider
                    title={t('random-title').toUpperCase()}
                    items={randomCollection}
                    headingSize='large'
                    handleCardClick={(productId) => {
                        const productDetails = getProductDetailsById(productId);
                        if (!productDetails) return;
                        const {collection, category} = productDetails;
                        navigate(`/${category.id}/${collection.id}/${productId}`);
                    }}

                />

            </section>
        </>
    );
};
