import React, { useRef, useState } from "react";
import type { CardImageSliderProps } from "./card-image-slider.types.ts";
import styles from "./card-image-slider.module.scss";

export const CardImageSlider: React.FC<CardImageSliderProps> = ({images, alt, categoryId}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHover, setIsHover] = useState(false);
    const startXRef = useRef<number | null>(null);

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        startXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (startXRef.current === null) return;
        const diff = e.touches[0].clientX - startXRef.current;

        if (Math.abs(diff) > 50)
        {
            if (diff > 0)
            {
                prev();
            } else
            {
                next();
            }
            startXRef.current = null;
        }
    };

    const handleTouchEnd = () => {
        startXRef.current = null;
    };

    const sliderClass = `${styles.slider} ${categoryId === 'doors' ? styles.doors : ''}`;
    return (
        <div
            className={sliderClass}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img src={images[currentIndex]} alt={alt} className={styles.image}/>

            {isHover && window.innerWidth > 810 && images.length > 1 && (
                <>
                    <button className={`${styles.arrow} ${styles.prev}`} onClick={(e) => {
                        e.stopPropagation();
                        prev();
                    }}>
                        &#10094;
                    </button>
                    <button className={`${styles.arrow} ${styles.next}`} onClick={(e) => {
                        e.stopPropagation();
                        next();
                    }}>
                        &#10095;
                    </button>
                </>
            )}

            <div className={styles.dots}>
                {images.map((_,
                    i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            goTo(i)
                        }}
                    />
                ))}
            </div>
        </div>
    );
};