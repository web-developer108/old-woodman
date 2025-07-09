import type { ProductCollection, ProductItem } from '../../config/config.types.ts';

export interface DoorsDetailsProps {
  collection: ProductCollection;
  product: ProductItem;
  lang: 'ru' | 'kk';
}