import { productCatalog } from '../config/products.config.ts';
import type { ProductItem } from '../config/config.types.ts';

const itemIds = ['asia', 'country', 'zhetisu', 'larch', 'provance', 'deco-cabinet', 'nova-iney', 'classica-dub', 'cabinet-paris', 'balcony-teak'];

interface GetRandomProductsOptions {
    count?: number;
    excludeProductId?: string[];
    onlyCategoryId?: 'doors' | 'furniture';
}

export const getRandomProducts = ({
    count = 4,
    excludeProductId = [],
    onlyCategoryId,
}: GetRandomProductsOptions = {}): ProductItem[] => {
    const allItems: ProductItem[] = [];

    for (const category of productCatalog) {
        if (onlyCategoryId && category.id !== onlyCategoryId) continue;

        for (const collection of category.collections) {
            for (const item of collection.items) {
                if (!itemIds.includes(item.id)) continue;
                if (excludeProductId.includes(item.id)) continue;
                allItems.push(item);
            }
        }
    }

    const shuffled = allItems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};