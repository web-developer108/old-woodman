import { useEffect, useState } from 'react';

interface GalleryImage {
    src: string;
    alt: string;
}

export const useGalleryFromWp = (slug: string) => {
    const [images, setImages] = useState<GalleryImage[]>([]);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await fetch('https://oldwoodman.kz/cms/wp-json/wp/v2/gallery?slug=' + slug);
                const data = await res.json();
                const acf = data?.[0]?.acf;

                if (!acf) return;

                const parsed: GalleryImage[] = [];
                for (let i = 1; i <= 5; i++) {
                    const imageKey = i === 1 ? 'gallery_info_1_1' : `image_${i}`;
                    const altKey = `image_${i}_alt`;
                    const image = acf[imageKey];
                    if (image && image.url) {
                        parsed.push({
                            src: image.url,
                            alt: acf[altKey] || '',
                        });
                    }
                }

                setImages(parsed);
            } catch (err) {
                console.error('Ошибка загрузки галереи:', err);
            }
        };

        fetchGallery();
    }, [slug]);

    return images;
};
