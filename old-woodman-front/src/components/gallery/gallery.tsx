import type { GalleryProps } from './gallery.types.ts';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useRef } from 'react';
import { useSimpleBarRecalc } from '../../hooks/simplebar-recalc/simplebar-recalc.tsx';
import styles from './gallery.module.scss'

export const Gallery: React.FC<GalleryProps> = ({ images, layout = 'default' }) => {
  const simpleBarRef = useRef<any>(null);
  useSimpleBarRecalc(simpleBarRef);
  const layoutClass =
    layout === 'two-large'
      ? styles.layoutTwoLarge
      : layout === 'complex'
        ? styles.layoutComplex
        : styles.layoutDefault;
  return (

    <SimpleBar  ref={simpleBarRef} className={styles.galleryWrapper} autoHide={false}>
      <div className={`${styles.galleryTrack} ${layoutClass}`}>
        {images.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} className={styles.galleryImage}/>
        ))}
      </div>
    </SimpleBar>

  );
};
