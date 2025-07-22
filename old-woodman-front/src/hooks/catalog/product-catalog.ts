import i18n from 'i18next';
import { useMemo } from 'react';
import { productCatalog } from '../../config/products.config.ts';
import type { ProductCollection, ProductItem } from '../../config/config.types.ts';

export const useProductCatalog = () => {
  const lang = i18n.language as 'ru' | 'kk';

  const collectionsMap = useMemo(() => {
    const doors = productCatalog.find((cat) => cat.id === 'doors');
    const map = new Map<string, ProductCollection>();
    doors?.collections?.forEach((col) => {
      map.set(col.id, col);
    });
    return map;
  }, []);
  const productsMap = useMemo(() => {
    const map = new Map<string, ProductItem>();
    const doors = productCatalog.find((cat) => cat.id === 'doors');
    doors?.collections?.forEach((col) => {
      col.items.forEach((item) => {
        map.set(item.id, item);
      });
    });
    return map;
  }, []);
  const getCollectionById = (id: string) => collectionsMap.get(id);

  const getCollectionTitleById = (id: string): string =>
    collectionsMap.get(id)?.title?.[lang] ?? '';

  const getItemById = (collectionId: string, itemId: string) =>
    collectionsMap.get(collectionId)?.items?.find((item) => item.id === itemId);

  const getItemTitleById = (collectionId: string, itemId: string): string =>
    getItemById(collectionId, itemId)?.title?.[lang] ?? '';
  const getProductById = (itemId: string): ProductItem | undefined =>
    productsMap.get(itemId);
  return {
    getCollectionById,
    getCollectionTitleById,
    getItemById,
    getItemTitleById,
    getProductById,
  };
};