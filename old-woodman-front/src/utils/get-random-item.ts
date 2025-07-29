
import { productCatalog } from '../config/products.config.ts';
import type { ProductItem } from '../config/config.types.ts';

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
        if (excludeProductId.includes(item.id))  continue;
        allItems.push(item);
      }
    }
  }

  for (let i = allItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
  }

  return allItems.slice(0, count);
};
