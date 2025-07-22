export interface Product {
  title: Record<'ru' | 'kk', string>;
  description: Record<'ru' | 'kk', string>;
  shortName: Record<'ru' | 'kk', string>;
  price: number;
  images: string[];
}

export interface ProductSummaryProps {
  product: Product;
  quantity: number;
  lang: 'ru' | 'kk';
  onIncrease: () => void;
  onDecrease: () => void;
}
