import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { PictureHeaderProps } from './picture-header.types.ts';
import styles from './picture-header.module.scss'

export const PictureHeader: React.FC<PictureHeaderProps> = ({
    title,
    label,
    color = 'white',
    imageBg,
    imageSmall,
    imageBig,
    reverseImages = false,
}) => {
    const {t} = useTranslation('common');
    const [showImages, setShowImages] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    const containerClass = `${styles.imageTitleContainer} ${color === 'black' ? styles.darkContainer : ''}`;
    useEffect(() => {
        if (imageRef.current?.complete) {
            setShowImages(true);
        }
    }, []);

    return (<div className={styles.imageContainer}>
            <img
                ref={imageRef}
                className={styles.backgroundImage}
                src={imageBg}
                alt={t('aria-label-picture-bg')}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                onLoad={() => setShowImages(true)}

            />

            <div className={containerClass}>
                <h1 className={styles.imageTitle}>{title.toUpperCase()}</h1>
                <div className={styles.imageLabel}>{label}</div>
            </div>
            <div
                className={`${styles.imagesWrap} ${reverseImages ? styles.reversed : ''} ${showImages ? styles.animateIn : ''}`}
            >

                <img
                    className={styles.imageSmall}
                    src={imageSmall.src}
                    alt={imageSmall.alt}

                />
                <img
                    className={styles.imageBig}
                    src={imageBig.src}
                    alt={imageBig.alt}
                />
            </div>
        </div>);
};