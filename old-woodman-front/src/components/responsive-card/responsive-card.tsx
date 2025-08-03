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
  const { t } = useTranslation('common');
  const { isMobile, screenWidth } = useDevice();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isMobile && descriptionRef.current) {
      const el = descriptionRef.current;
      setIsOverflowing(el.scrollHeight > el.offsetHeight);
    }
  }, [isMobile, description, screenWidth]);
  useLayoutEffect(() => {
    const overlayEl = overlayRef.current;
    const cardEl = cardRef.current;

    if (isMobile && isExpanded && overlayEl && cardEl) {

      overlayEl.classList.remove(styles.visible, styles.hidden);
      overlayEl.style.transform = 'none';
      overlayEl.style.opacity = '1';
      overlayEl.style.pointerEvents = 'auto';

      const realHeight = overlayEl.scrollHeight + 100;

      if ((realHeight - 100) > 382) {
        cardEl.style.minHeight = `${realHeight}px`;
      } else {
        cardEl.style.minHeight = '';
      }

      overlayEl.style.transform = '';
      overlayEl.style.opacity = '';
      overlayEl.style.pointerEvents = '';
      overlayEl.classList.add(styles.visible);

    } else if (cardEl) {
      cardEl.style.minHeight = '';
    }
  }, [isExpanded, isMobile, description, screenWidth]);

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.imageContainer}>
        <img src={image} alt={alt} className={styles.image}/>
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
            ref={overlayRef}
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