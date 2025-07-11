import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { productCatalog } from '../../config/products.config.ts';

export const useCurrentCollectionItems = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language as 'ru' | 'kk';

  const collectionId = pathname.split('/').filter(Boolean).pop();

  for (const category of productCatalog) {
    const collection = category.collections?.find(col => col.id === collectionId);
    if (collection) {
      return collection.items.map(item => ({
        src: item.images[0],
        label: item.description[lang],
      }));
    }
  }

  return [];
};
