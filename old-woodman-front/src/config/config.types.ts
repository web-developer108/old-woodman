export type LanguageText = {
  ru: string;
  kk: string;
};

export interface ProductItem {
  id: string;
  title: LanguageText;
  description: LanguageText;
  images: string[];
  price: number;
}

export interface ProductCollection {
  id: string;
  title: LanguageText;
  items: ProductItem[];
}

export interface ProductCategory {
  id: string;
  title: LanguageText;
  collections?: ProductCollection[];
  items?: ProductItem[];
}