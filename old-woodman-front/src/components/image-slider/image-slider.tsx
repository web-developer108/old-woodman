import useDevice from '../../hooks/device/use-device.ts';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { SliderProps } from './image-slider.types.ts';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { DirectionLeftIcon } from '../icons/direction-left-icon/direction-left-icon.tsx';
import { useTranslation } from 'react-i18next';
import { DirectionRightIcon } from '../icons/direction-right-icon/direction-right-icon.tsx';
import { useCurrentCollectionItems } from '../../hooks/current-collection/current-collection-items.tsx'
import { AppColors } from '../../styles.ts';
import styles from './image-slider.module.scss'

export const ImageSlider: React.FC<SliderProps> = ({
  selectedIndex,
  onSelect,
}) => {
  const images = useCurrentCollectionItems();
  const { isMobile } = useDevice();
  const { t } = useTranslation('common')
  const simpleBarRef = useRef<any>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const getScrollElement = () => simpleBarRef.current?.getScrollElement?.() as HTMLDivElement | null;
  const checkOverflow = useCallback(() => {
    const el = getScrollElement();
    if (el) {
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    }
  }, []);
  useEffect(() => {
    if (
      selectedIndex !== undefined &&
      selectedIndex >= 0 &&
      selectedIndex < images.length
    ) {
      scrollToIndex(selectedIndex);
    }
  }, [selectedIndex, images.length]);
  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [images, checkOverflow]);

  const scrollToIndex = (index: number) => {
    const target = itemRefs.current[index];
    const scrollEl = simpleBarRef.current?.getScrollElement?.();

    if (target && scrollEl) {
      const { left: targetLeft, width: targetWidth } = target.getBoundingClientRect();
      const { left: scrollLeft, width: scrollWidth } = scrollEl.getBoundingClientRect();
      const offset = targetLeft - scrollLeft - (scrollWidth - targetWidth) / 2;

      scrollEl.scrollBy({ left: offset, behavior: 'smooth' });
      onSelect?.(index);
    }
  };

  const handlePrev = () => {
    if (selectedIndex === undefined || selectedIndex <= 0) return;
    scrollToIndex(selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex === undefined || selectedIndex >= images.length - 1) return;
    scrollToIndex(selectedIndex + 1);
  };
  return (
    <div className={styles.sliderWrapper}>
      <SimpleBar autoHide={false} className={styles.simpleBar} ref={simpleBarRef}>
        <div className={styles.scrollContainer}>
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`${styles.card} ${selectedIndex === i ? styles.selected : ''}`}
              onClick={() => scrollToIndex(i)}
            >
              <img src={img.src} alt={img.label} className={styles.image}/>
            </div>
          ))}
        </div>
      </SimpleBar>

      <div className={styles.textWrap}>
        {selectedIndex !== undefined && (
          <div className={styles.caption}>{images[selectedIndex]?.label}</div>
        )}

        {isOverflowing && !isMobile && (
          <div className={styles.navButton}>
            <CircleButton
              bgColor={AppColors.background.grey}
              ariaLabel={t('aria-label-left')}
              icon={<DirectionLeftIcon/>}
              onClick={handlePrev}
              disabledColor={AppColors.background.circleButton}
              disabled={selectedIndex === 0}
            />
            <CircleButton
              bgColor={AppColors.background.grey}
              ariaLabel={t('aria-label-right')}
              icon={<DirectionRightIcon/>}
              onClick={handleNext}
              disabledColor={AppColors.background.circleButton}
              disabled={selectedIndex === images.length - 1}
            />
          </div>
        )}
      </div>
    </div>
  );
};