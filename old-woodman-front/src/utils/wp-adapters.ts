import type { ProductCollection, ProductItem } from '../config/config.types.ts'
import type { WpCollectionResponse, WpProductResponse,WpProductACF } from "../types/wp.types.ts";

const collectSizes = (prefix: 'width' | 'height' | 'depth', acf: WpProductACF): number[] => {
    return (Object.keys(acf) as (keyof WpProductACF)[])
        .filter((key): key is keyof WpProductACF =>
           key.startsWith(`${prefix}_`)
        )
        .map((key) => {
            const value = acf[key];
            return typeof value === 'string' && value.trim() !== '' ? Number(value) : NaN;
        })
        .filter((v): v is number => !isNaN(v));
};

export const mapWpToProductItem = (wpItem: WpProductResponse): ProductItem => {
    const acf = wpItem.acf;
    const splitText = (text?: string): string[] =>
        text
            ? text
                .split(/\r?\n+/)
                .map((line) => line.trim())
                .filter(Boolean)
            : [];
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
            ru: splitText(acf.text?.ru),
            kk: splitText(acf.text?.kk),
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
            ru: Object.entries(acf.set || {})
                .filter(([key, value]) => key.startsWith('set_ru_item_') && value.trim() !== '')
                .map(([, value]) => value.trim()),

            kk: Object.entries(acf.set || {})
                .filter(([key, value]) => key.startsWith('set_kk_item_') && value.trim() !== '')
                .map(([, value]) => value.trim()),
        },

        sizes: {
            width: collectSizes('width', acf),
            height: collectSizes('height', acf),
            depth: collectSizes('depth', acf),
        },
        categoryId: acf.category_id,
        collectionId: acf.collection_id,
        order: Number(acf.order) || 1,
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
