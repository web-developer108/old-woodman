export type LanguageText = {
  ru: string;
  kk: string;
};

export interface ProductItem {
  id: string;
  title: LanguageText;
  titleMob: LanguageText;
  description: LanguageText;
  shortName: LanguageText;
  images: string[];
  price: number;

}

export interface ProductCollection {
  id: string;
  title: LanguageText;
  pageTitle?: LanguageText;
  items: ProductItem[];
}

export interface ProductCategory {
  id: string;
  title: LanguageText;
  collections: ProductCollection[];
  items?: ProductItem[];
}