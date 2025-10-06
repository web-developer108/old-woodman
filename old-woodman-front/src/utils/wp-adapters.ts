import type { ProductItem } from '../config/config.types.ts'
import type { WpProductItem } from "./wp.types.ts";


export function mapWpToProductItem(wpItem: WpProductItem): ProductItem {
    const acf = wpItem.acf;

    const images = [
        acf.image_1,
        acf.image_2,
        acf.image_3,
        acf.image_4,
        acf.image_5,
        acf.image_6,
    ].filter((url): url is string => typeof url === 'string' && url.length > 0);

    return {
        id: acf.ID,
        title: { ru: acf.title.title_ru, kk: acf.title.title_kk },
        titleMob: {
            ru: acf.title_mob?.title_mob_ru ?? '',
            kk: acf.title_mob?.title_mob_kk ?? '',
        },
        description: {
            ru: acf.description?.description_ru ?? '',
            kk: acf.description?.description_kk ?? '',
        },
        pageHeader: {
            ru: acf.page_header?.page_header_ru ?? '',
            kk: acf.page_header?.page_header_kk ?? '',
        },
        text: {
            ru: acf.text?.ru?.split(/\r?\n/) ?? [],
            kk: acf.text?.kk?.split(/\r?\n/) ?? [],
        },
        shortName: {
            ru: acf.short_name?.short_name_ru ?? '',
            kk: acf.short_name?.short_name_kk ?? '',
        },
        images,
        price: Number(acf.price) || 0,
        time: Number(acf.time) || 0,
        alt: acf.alt ?? '',
        material: {
            ru: acf.material?.material_ru ?? '',
            kk: acf.material?.material_kk ?? '',
        },
        set: {
            ru: Object.entries(acf.set ?? {})
                .filter(([key]) => key.startsWith('set_ru_item_'))
                .map(([, value]) => value)
                .filter(Boolean),
            kk: Object.entries(acf.set ?? {})
                .filter(([key]) => key.startsWith('set_kk_item_'))
                .map(([, value]) => value)
                .filter(Boolean),
        },
        sizes: {
            width: [acf.width_1, acf.width_2, acf.width_3, acf.width_4]
                .filter(Boolean)
                .map(Number),
            height: [acf.height_1, acf.height_2, acf.height_3, acf.height_4]
                .filter(Boolean)
                .map(Number),
            depth: [acf.depth_1, acf.depth_2, acf.depth_3, acf.depth_4]
                .filter(Boolean)
                .map(Number),
        },
    };
}