import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { productCatalog } from '../../config/products.config.ts';

export const useCurrentCollectionItems = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language as 'ru' | 'kk';
  const segments = pathname.split('/').filter(Boolean);
  const categoryId = segments[0];
  const collectionId = segments[1] ?? '';
  const productId = segments[2];

  for (const category of productCatalog) {
    if (category.id === categoryId) {
      const collection = category.collections?.find(col => col.id === collectionId);
      if (!collection) return [];

      if (categoryId === 'doors') {
        return collection.items.map(item => ({
          src: item.images[0],
          label: item.description?.[lang],
          alt: item.alt,
        }));
      }

      if (categoryId === 'furniture') {
        const product = collection.items.find(item => item.id === productId);
        if (!product) return [];
        return product.images.map(image => ({
          src: image,
          label: product.description?.[lang],
          alt: product.alt,
        }));
      }
    }
  }

  return [];
};