import React, { useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDevice from '../../hooks/device/use-device.ts';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { ArrowDownIcon } from '../icons/arrow-down-icon/arrow-down-icon.tsx';
import type { ResponsiveCardProps } from './responsive-card.types.ts';
import { AppColors } from '../../styles.ts';
import styles from './responsive-card.module.scss';

export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
    image,
    title,
    description,
    comment,
    alt
}) => {
    const {t} = useTranslation('common');
    const {
        isMobile,
        screenWidth
    } = useDevice();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);


    useLayoutEffect(() => {
        if (descriptionRef.current) {
            const el = descriptionRef.current;
            setIsOverflowing(el.scrollHeight > el.offsetHeight);
        }
    }, [isMobile, description, screenWidth]);

    return (
        <div className={styles.card} >
            <div className={styles.imageContainer}>
                <img src={image} alt={alt} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title.toUpperCase()}</h2>

                <div className={styles.descriptionWrapper}>
                    <p
                        ref={descriptionRef}
                        className={`${styles.description} ${isExpanded ? styles.expanded : ''}`}
                    >
                        {Array.isArray(description)
                            ? description.map((line, idx) => (
                                <span key={idx}>
              {line}
                                    <br />
            </span>
                            ))
                            : description}
                    </p>
                    {!isExpanded && (isMobile || isOverflowing) && <div className={styles.fadeOverlay}/>}

                    {!isExpanded && !isMobile && isOverflowing && (
                        <button className={styles.readMore} onClick={() => setIsExpanded(true)}>
                            {t('button-read.label')}
                        </button>
                    )}


                </div>
                {(isExpanded || !isMobile) && (
                    <p className={styles.comment}>{comment}</p>
                )}
                {isMobile && (
                    isExpanded ? (
                        <span className={styles.readMoreCircle}>
                        <CircleButton
                        icon = {<ArrowDownIcon/>}
                        //убрать t('button.aria-label.open')
                        bgColor={AppColors.text.light}
                        ariaLabel = { t('button.aria-label.close')}
                        onClick={() => setIsExpanded(false)}
                        />
                            </span>

                    ) : (
                        <button
                            className={styles.readMoreMobile}
                            onClick={() => setIsExpanded(true)}
                        >
                            {t('button-read.label')}
                        </button>
                    )
                )}
            </div>
        </div>

    );
};