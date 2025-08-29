import React from 'react';
import {
    useTranslation
} from 'react-i18next';
import {
    LikeButton
} from '../buttons/like-button/like-button.tsx';
import {
    CartButton
} from '../buttons/cart-button/cart-button.tsx';
import {
    CardImageSlider
} from "../card-image-slider/card-image-slider.tsx";
import type {
    CardsPreviewProps
} from './cards-preview.types.ts';
import styles from '../cards-preview/cards-preview.module.scss'

export const CardsPreview: React.FC<CardsPreviewProps> = ({
    items, handleCardClick, showPlug = true,
}) => {
    const {
        t, i18n
    } = useTranslation('common');
    const lang = i18n.language as 'ru' | 'kk';
    return (<div
        className={styles.cardsContainer}>

        {items.map((item) => (<div
            key={item.id}
            className={styles.card}>
            <div
                className={styles.imageWrapper}
                onClick={() => handleCardClick(item.id)}>
                <CardImageSlider
                    images={item.images}
                    alt={item.alt}/>
            </div>
            <div
                className={styles.likeWrap}>
                <LikeButton
                    productId={item.id}/>
            </div>
            <div
                className={styles.cardContent}>
                <div
                    className={styles.textBlock}>
                    <p className={styles.title}>{item.title[lang]}</p>
                    <p className={styles.description}>{item.shortName[lang]}</p>
                    <p className={styles.price}>{t('price-label')} {item.price.toLocaleString()} ₸*</p>
                </div>
                <CartButton
                    productId={item.id}/>
            </div>
        </div>))}
        {showPlug && (<div
            className={styles.card}>
            <div
                className={styles.imageWrapper}
                style={{cursor: 'default'}}>
                <img
                    src="/images/furniture/plug.svg"
                    alt={t("plug-alt")}
                    className={styles.image}
                />

            </div>
            <div
                className={styles.cardContent}>
                <div
                    className={styles.textBlock}>
                    <p className={styles.title}>{t('plug-title')}</p>
                    <p className={styles.price}>{t('plug-label')}</p>

                </div>

            </div>
        </div>)}
    </div>);
};