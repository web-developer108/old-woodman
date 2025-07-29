import type { ProductItem } from '../../config/config.types.ts';

export interface CardsPreviewProps {
  items: ProductItem[];
  handleCardClick: (productId: string) => void;
  showPlug?: boolean;
}