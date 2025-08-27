export type LanguageText = {
  ru: string;
  kk: string;
};
export type LanguageTextArray = {
  ru: string[];
  kk: string[];
};

export interface ProductItem {
  id: string;
  title: LanguageText;
  titleMob?: LanguageText;
  description?: LanguageText;
  pageHeader?: LanguageText;
  shortName: LanguageText;
  images: string[];
  price: number;
  time?:number;
  alt:string;
  set?: LanguageTextArray;
  sizes?: {
    width: number | number [];
    height: number | number [] ;
    depth: number | number [];
  };
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