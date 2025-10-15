import type { ProductCategory, ProductCollection, ProductItem } from "../config/config.types.ts";


export interface WpApiResponse<T> {
    id: number;
    slug: string;
    acf: T;
}

export interface WpProductACF {
    id: string;
    title: { title_ru: string; title_kk: string };
    title_mob?: { title_mob_ru: string; title_mob_kk: string };
    description?: { description_ru: string; description_kk: string };
    page_header?: { page_header_ru: string; page_header_kk: string };
    text?: { ru: string; kk: string };
    short_name: { short_name_ru: string; short_name_kk: string };
    image_1?: string | false;
    image_2?: string | false;
    image_3?: string | false;
    image_4?: string | false;
    image_5?: string | false;
    image_6?: string | false;
    price?: string;
    time?: string;
    alt?: string;
    material?: { material_ru: string; material_kk: string };
    set?: Record<string, string>;
    width_1?: string;
    height_1?: string;
    depth_1?: string;
    category_id: string;
    collection_id: string;
}
export interface WpCollectionACF {
    id: string;
    title: {
        title_ru: string;
        title_kk: string;
    };
    "hero-image": string;
    "hero-alt": string;
    "hero-description": {
        ru: string;
        kk: string;
    };
    "hero-comment": {
        ru: string;
        kk: string;
    };
    category_id: string;
    order?: string | number;
}

export interface WpProductResponse {
    slug: string;
    title: {
        rendered: string;
    };
    acf: WpProductACF;
}

export type WpCollectionResponse = WpApiResponse<WpCollectionACF>;

export interface UseProductCatalogReturn {
    isLoading: boolean;
    getCollectionById: (collectionId: string) => ProductCollection | undefined;
    getCollectionTitleById: (id: string) => string;
    getItemById: (collectionId: string, itemId: string) => ProductItem | undefined;
    getProductById: (itemId: string) => ProductItem | undefined;
    getCategoryByCollectionId: (collectionId: string) => ProductCategory | undefined;
    getProductDetailsById: (productId: string) =>
        | { product: ProductItem; collection: ProductCollection; category: ProductCategory }
        | null;
    getCollectionsByCategoryId: (categoryId: string) => ProductCollection[];
}

