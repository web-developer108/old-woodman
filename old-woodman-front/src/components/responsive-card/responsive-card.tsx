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
}) => {
  const { t } = useTranslation('common');
  const { isMobile, screenWidth } = useDevice();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (!isMobile && descriptionRef.current) {
      const el = descriptionRef.current;
      setIsOverflowing(el.scrollHeight > el.offsetHeight);
    }
  }, [isMobile, description, screenWidth]);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image}/>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title.toUpperCase()}</h2>
        <div className={styles.descriptionWrapper}>
          <p
            className={`${styles.description} ${isExpanded ? styles.expanded : ''}`}
            ref={descriptionRef}
          >
            {Array.isArray(description)
              ? description.map((line, idx) => (
                <span key={idx}>
          {line}
                  <br/>
        </span>
              ))
              : description}
          </p>
          {!isExpanded && isOverflowing && <div className={styles.fadeOverlay}/>}
          {isOverflowing && !isExpanded && (
            <button
              className={styles.readMore}
              onClick={() => setIsExpanded(true)}
            >
              {t('button-read.label')}
            </button>
          )}
        </div>
        <p className={styles.comment}>{comment}</p>
      </div>

      {isMobile && (
        <>
          <div
            className={`${styles.mobileOverlay} ${
              isExpanded ? styles.visible : styles.hidden
            }`}
          >
            <div className={styles.contentMob}>
              <h2 className={styles.title}>{title.toUpperCase()}</h2>
              <p className={styles.description}>{Array.isArray(description)
                ? description.map((line, idx) => (
                  <span key={idx}>
          {line}
                    <br/>
        </span>
                ))
                : description}</p>
              <p className={styles.comment}>{comment}</p>
            </div>

          </div>

          <div className={styles.mobileButton}>
            <CircleButton
              bgColor={AppColors.text.light}
              icon={
                <div
                  className={`${styles.iconWrapper} ${
                    isExpanded ? styles.rotateUp : ''
                  }`}
                >
                  <ArrowDownIcon/>
                </div>
              }
              ariaLabel={
                isExpanded
                  ? t('button.aria-label.open')
                  : t('button.aria-label.close')
              }
              onClick={() => setIsExpanded((prev) => !prev)}
            />
          </div>
        </>
      )}
    </div>
  );
};