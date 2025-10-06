import type { ProductCollection, ProductItem } from '../config/config.types.ts'
import type { WpCollectionResponse, WpProductResponse } from "../types/wp.types.ts";


export const mapWpToProductItem = (wpItem: WpProductResponse): ProductItem => {
    const acf = wpItem.acf;
    return {
        id: wpItem.title?.rendered,
        title: {
            ru: acf.title.title_ru,
            kk: acf.title.title_kk,
        },
        titleMob: {
            ru: acf.title_mob?.title_mob_ru || '',
            kk: acf.title_mob?.title_mob_kk || '',
        },
        description: {
            ru: acf.description?.description_ru || '',
            kk: acf.description?.description_kk || '',
        },
        pageHeader: {
            ru: acf.page_header?.page_header_ru || '',
            kk: acf.page_header?.page_header_kk || '',
        },
        text: {
            ru: acf.text?.ru ? [acf.text.ru] : [],
            kk: acf.text?.kk ? [acf.text.kk] : [],
        },
        shortName: {
            ru: acf.short_name.short_name_ru,
            kk: acf.short_name.short_name_kk,
        },
        images: [
            acf.image_1,
            acf.image_2,
            acf.image_3,
            acf.image_4,
            acf.image_5,
            acf.image_6,
        ].filter((img): img is string => typeof img === 'string'),
        price: Number(acf.price) || 0,
        time: Number(acf.time) || 0,
        alt: acf.alt || '',
        material: {
            ru: acf.material?.material_ru || '',
            kk: acf.material?.material_kk || '',
        },
        set: {
            ru: Object.values(acf.set || {}).filter(Boolean).slice(0, 4),
            kk: Object.values(acf.set || {}).filter(Boolean).slice(4, 8),
        },
        sizes: {
            width: Number(acf.width_1) || 0,
            height: Number(acf.height_1) || 0,
            depth: Number(acf.depth_1) || 0,
        },
        categoryId: acf.category_id,
        collectionId: acf.collection_id,
    };
};

export const mapWpToProductCollection = (
    wpItem: WpCollectionResponse
): ProductCollection => {
    const acf = wpItem.acf;

    return {
        id: acf.id || String(wpItem.id),
        title: {
            ru: acf.title?.title_ru || '',
            kk: acf.title?.title_kk || '',
        },
        heroImage: acf['hero-image'] || '',
        heroAlt: acf['hero-alt'] || '',
        heroDescription: {
            ru: acf['hero-description']?.ru ? [acf['hero-description'].ru] : [],
            kk: acf['hero-description']?.kk ? [acf['hero-description'].kk] : [],
        },
        heroComment: {
            ru: acf['hero-comment']?.ru || '',
            kk: acf['hero-comment']?.kk || '',
        },
        categoryId: acf.category_id || '',
        order: Number(acf.order) || 0,
        items: [],
    };
};
