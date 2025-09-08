import React, {useRef} from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {useSimpleBarRecalc} from '../../hooks/simplebar-recalc/simplebar-recalc.tsx';
import type {GalleryImage, GalleryProps} from './gallery.types.ts';
import styles from './gallery.module.scss'

const Gallery: React.FC<GalleryProps> = ({images, layout = 'default'}) => {
    const simpleBarRef = useRef<any>(null);
    useSimpleBarRecalc(simpleBarRef);

    const layoutClass =
        layout === 'complex'
            ? styles.layoutComplex
            : layout === 'repeatingBlock'
                ? styles.layoutRepeatingBlock
                : styles.layoutDefault;

    const chunkedImages =
        layout === 'repeatingBlock'
            ? images.reduce<GalleryImage[][]>((acc, img, index) => {
                if (index % 5 === 0) acc.push([]);
                acc[acc.length - 1].push(img);
                return acc;
            }, [])
            : [images];

    return (

        <SimpleBar ref={simpleBarRef} className={styles.galleryWrapper} autoHide={false}>
            <div className={`${styles.galleryTrack} ${layoutClass}`}>
                {layout === 'repeatingBlock'
                    ? chunkedImages!.map((block, blockIndex) => (
                        <div key={blockIndex} className={styles.galleryBlock}>
                            {block.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.src}
                                    alt={img.alt}
                                    className={styles.galleryImage}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    ))
                    : images.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            className={styles.galleryImage}
                            loading="lazy"
                        />
                    ))}
            </div>
        </SimpleBar>

    );
};

export default Gallery;