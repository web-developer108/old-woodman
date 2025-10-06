export interface WpProductItem {
    id: number;
    slug: string;
    status: 'publish' | 'draft' | 'pending';
    type: 'product';
    title: { rendered: string };
    acf: {
        ID: string;
        title: {
            title_ru: string;
            title_kk: string;
        };
        title_mob?: {
            title_mob_ru?: string;
            title_mob_kk?: string;
        };
        description?: {
            description_ru?: string;
            description_kk?: string;
        };
        page_header?: {
            page_header_ru?: string;
            page_header_kk?: string;
        };
        text?: {
            ru?: string;
            kk?: string;
        };
        short_name?: {
            short_name_ru?: string;
            short_name_kk?: string;
        };
        image_1?: string | false;
        image_2?: string | false;
        image_3?: string | false;
        image_4?: string | false;
        image_5?: string | false;
        image_6?: string | false;
        price?: string;
        time?: string;
        alt?: string;
        material?: {
            material_ru?: string;
            material_kk?: string;
        };
        set?: Record<string, string>;
        width_1?: string;
        width_2?: string;
        width_3?: string;
        width_4?: string;
        height_1?: string;
        height_2?: string;
        height_3?: string;
        height_4?: string;
        depth_1?: string;
        depth_2?: string;
        depth_3?: string;
        depth_4?: string;
        category_id?: string;
        collection_id?: string;
    };
}
