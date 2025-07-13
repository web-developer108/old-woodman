import { productCatalog } from '../config/products.config.ts';

export const findProductById = (id: string) => {
  for (const category of productCatalog) {
    for (const collection of category.collections) {
      const product = collection.items.find((item) => item.id === id);
      if (product) {
        return {
          product,
          collectionId: collection.id,
          categoryId: category.id,
        };
      }
    }
  }
  return null;
};
