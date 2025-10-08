import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useProductData} from "../wp-data/wp-data.tsx";
import { mapWpToProductCollection, mapWpToProductItem } from "../../utils/wp-adapters.ts";
import type { LanguageText, ProductCategory, ProductCollection, ProductItem } from '../../config/config.types.ts';
import type { UseProductCatalogReturn } from "../../types/wp.types.ts";

export const useProductCatalog = (): UseProductCatalogReturn => {
    const { i18n } = useTranslation();
    const lang = i18n.language as keyof LanguageText;
    const { products: wpProducts, collections: wpCollections, isLoaded } = useProductData();

    const products: ProductItem[] = useMemo(() => {
        if (!wpProducts?.length) return [];
        return wpProducts.map(mapWpToProductItem);
    }, [wpProducts]);

    const collections: ProductCollection[] = useMemo(() => {
        if (!wpCollections?.length) return [];

        const mapped = wpCollections.map(mapWpToProductCollection);

        for (const col of mapped) {
            col.items = products
                .filter((p) => p.collectionId === col.id)
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        }

        return mapped.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    }, [wpCollections, products]);

    const collectionsMap = useMemo(() => {
        const map = new Map<string, ProductCollection>();
        for (const c of collections) map.set(c.id, c);
        return map;
    }, [collections]);

    const productsMap = useMemo(() => {
        const map = new Map<string, ProductItem>();
        for (const p of products) map.set(p.id, p);
        return map;
    }, [products]);

    const getCollectionById = (collectionId: string): ProductCollection | undefined =>
        collectionsMap.get(collectionId);

    const getCollectionTitleById = (id: string): string =>
        collectionsMap.get(id)?.title?.[lang] ?? '';

    const getItemById = (collectionId: string, itemId: string) =>
        collectionsMap.get(collectionId)?.items?.find((item) => item.id === itemId);

    const getProductById = (itemId: string): ProductItem | undefined =>
        productsMap.get(itemId);

    const getCategoryByCollectionId = (collectionId: string): ProductCategory | undefined => {
        const collection = collectionsMap.get(collectionId);
        if (!collection) return undefined;

        const categoryId = collection.categoryId;
        const titleMap: Record<string, LanguageText> = {
            doors: { ru: 'Двери', kk: 'Есіктер' },
            furniture: { ru: 'Мебель', kk: 'Жиһаз' },
            facades: { ru: 'Фасады', kk: 'Фасадтар' },
            gifts: { ru: 'Подарки', kk: 'Сыйлықтар' },
        };

        if (!categoryId || !titleMap[categoryId]) return undefined;

        return {
            id: categoryId,
            title: titleMap[categoryId],
            collections: collections.filter((col) => col.categoryId === categoryId),
        };
    };

    const getCategoryIdByCollectionId = (collectionId: string): string | undefined =>
        collectionsMap.get(collectionId)?.categoryId;

    const getProductDetailsById = (productId: string) => {
        const product = productsMap.get(productId);
        if (!product) return null;

        const collection = collectionsMap.get(product.collectionId);
        const category = collection ? getCategoryByCollectionId(collection.id) : undefined;
        if (!collection || !category) return null;

        return { product, collection, category };
    };

    const getCollectionsByCategoryId = (categoryId: string): ProductCollection[] =>
        collections.filter((col) => col.categoryId === categoryId);

    return {
        isLoading: !isLoaded,
        getCollectionById,
        getCollectionTitleById,
        getItemById,
        getProductById,
        getCategoryByCollectionId,
        getProductDetailsById,
        getCollectionsByCategoryId,
        getCategoryIdByCollectionId,
    };
};