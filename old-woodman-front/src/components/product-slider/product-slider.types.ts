import type { ProductItem } from '../../config/config.types.ts';

export interface ProductSliderProps {
  title: string;
  items: ProductItem[];
  handleCardClick: (productId: string) => void;

}