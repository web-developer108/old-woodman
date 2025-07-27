import i18n from 'i18next';
import { useMemo } from 'react';
import { productCatalog } from '../../config/products.config.ts';
import type { ProductCategory, ProductCollection, ProductItem } from '../../config/config.types.ts';

export const useProductCatalog = () => {
  const lang = i18n.language as 'ru' | 'kk';


  const collectionsMap = useMemo(() => {
    const map = new Map<string, { collection: ProductCollection; categoryId: string }>();
    for (const category of productCatalog) {
      for (const collection of category.collections) {
        map.set(collection.id, { collection, categoryId: category.id });
      }
    }
    return map;
  }, []);

  const productsMap = useMemo(() => {
    const map = new Map<string, ProductItem>();
    for (const category of productCatalog) {
      for (const collection of category.collections) {
        for (const item of collection.items) {
          map.set(item.id, item);
        }
      }
    }
    return map;
  }, []);

  const getCollectionById = (collectionId: string): ProductCollection | undefined =>
    collectionsMap.get(collectionId)?.collection;
  const getCollectionTitleById = (id: string): string =>
    collectionsMap.get(id)?.collection.title?.[lang] ?? '';

  const getItemById = (collectionId: string, itemId: string) =>
    collectionsMap.get(collectionId)?.collection.items?.find((item) => item.id === itemId);

  const getItemTitleById = (collectionId: string, itemId: string): string =>
    getItemById(collectionId, itemId)?.title?.[lang] ?? '';

  const getProductById = (itemId: string): ProductItem | undefined =>
    productsMap.get(itemId);

  const getCategoryByCollectionId = (collectionId: string): ProductCategory | undefined => {
    const categoryId = collectionsMap.get(collectionId)?.categoryId;
    return productCatalog.find((cat) => cat.id === categoryId);
  };
  const getProductDetailsById = (productId: string): {
    product: ProductItem;
    collection: ProductCollection;
    category: ProductCategory;
  } | null => {
    for (const category of productCatalog) {
      for (const collection of category.collections) {
        const product = collection.items.find((item) => item.id === productId);
        if (product) {
          return { product, collection, category };
        }
      }
    }
    return null;
  };
  return {
    getCollectionById,
    getCollectionTitleById,
    getItemById,
    getItemTitleById,
    getProductById,
    getCategoryByCollectionId,
    getProductDetailsById,
  };
};