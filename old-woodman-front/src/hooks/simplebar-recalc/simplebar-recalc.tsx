import React, { useEffect } from 'react';

export const useSimpleBarRecalc = (ref: React.RefObject<any>) => {
  useEffect(() => {
    const images = ref.current?.contentEl?.querySelectorAll('img') as NodeListOf<HTMLImageElement> | undefined;
    if (!images || images.length === 0) return;

    let loaded = 0;

    const handleImageLoad = () => {
      loaded++;
      if (loaded === images.length) {
        ref.current?.recalculate();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    if (loaded === images.length) {
      ref.current?.recalculate();
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, [ref]);
};
