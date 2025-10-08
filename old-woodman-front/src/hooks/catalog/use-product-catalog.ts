import { useMemo } from "react";
//import i18n from 'i18next';
//import { productCatalog } from '../../config/products.config.ts';
import type { LanguageText, ProductCategory, ProductCollection, ProductItem } from '../../config/config.types.ts';
import { useTranslation } from "react-i18next";
import { mapWpToProductCollection, mapWpToProductItem } from "../../utils/wp-adapters.ts";
import type { UseProductCatalogReturn, WpCollectionResponse, WpProductResponse } from "../../types/wp.types.ts";
import { useProductData} from "../wp-data/wp-data.tsx";
/*

export const useProductCatalog = () => {
    const lang = i18n.language as 'ru' | 'kk';


    const collectionsMap = useMemo(() => {
        const map = new Map<string, {
            collection: ProductCollection;
            categoryId: string
        }>();
        for (const category of productCatalog)
        {
            for (const collection of category.collections)
            {
                map.set(collection.id, {collection, categoryId: category.id});
            }
        }
        return map;
    }, []);

    const productsMap = useMemo(() => {
        const map = new Map<string, ProductItem>();
        for (const category of productCatalog)
        {
            for (const collection of category.collections)
            {
                for (const item of collection.items)
                {
                    map.set(item.id, item);
                }
            }
        }
        return map;
    }, []);

    const getCollectionById = (collectionId: string): ProductCollection | undefined =>
        collectionsMap.get(collectionId)?.collection;
    const getCollectionTitleById = (id: string): string =>
        collectionsMap.get(id)?.collection.title?.[lang] ?? '';

    const getItemById = (collectionId: string,
        itemId: string) =>
        collectionsMap.get(collectionId)?.collection.items?.find((item) => item.id === itemId);

    const getProductById = (itemId: string): ProductItem | undefined =>
        productsMap.get(itemId);

    const getCategoryByCollectionId = (collectionId: string): ProductCategory | undefined => {
        const categoryId = collectionsMap.get(collectionId)?.categoryId;
        return productCatalog.find((cat) => cat.id === categoryId);
    };
    const getProductDetailsById = (productId: string): {
        product: ProductItem;
        collection: ProductCollection;
        category: ProductCategory;
    } | null => {
        for (const category of productCatalog)
        {
            for (const collection of category.collections)
            {
                const product = collection.items.find((item) => item.id === productId);
                if (product)
                {
                    return {product, collection, category};
                }
            }
        }
        return null;
    };

    const getCollectionsByCategoryId = (categoryId: string): ProductCollection[] => {
        return productCatalog.find((cat) => cat.id === categoryId)?.collections ?? [];
    };
    return {
        getCollectionById,
        getCollectionTitleById,
        getItemById,
        getProductById,
        getCategoryByCollectionId,
        getProductDetailsById,
        getCollectionsByCategoryId
    };
};*/

/*
export const useProductCatalog = (): UseProductCatalogReturn => {
    const { i18n } = useTranslation();
    const lang = i18n.language as keyof LanguageText;
    const { products, collections, isLoaded } = useProductData();
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [collections, setCollections] = useState<ProductCollection[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // 🔹 Загружаем данные из WP
    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [productsRes, collectionsRes] = await Promise.all([
                    fetch('https://oldwoodman.kz/cms/wp-json/wp/v2/products?per_page=100'),
                    fetch('https://oldwoodman.kz/cms/wp-json/wp/v2/collections?per_page=100'),
                ]);

                const [productsData, collectionsData]: [
                    WpProductResponse[],
                    WpCollectionResponse[]
                ] = await Promise.all([productsRes.json(), collectionsRes.json()]);

                const mappedProducts = productsData.map(mapWpToProductItem);
                const mappedCollections = collectionsData
                    .map(mapWpToProductCollection)
                    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

                const joinedCollections = mappedCollections.map((col) => ({
                    ...col,
                    items: mappedProducts.filter((p) => p.collectionId === col.id),
                }));

                setProducts(mappedProducts);
                setCollections(joinedCollections);
            } catch (err) {
                console.error('Ошибка загрузки каталога из WP:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAll();
    }, []);

    // 🔹 Карты для быстрого доступа
    const collectionsMap = useMemo(() => {
        const map = new Map<string, { collection: ProductCollection; categoryId: string }>();
        for (const col of collections) {
            map.set(col.id, { collection: col, categoryId: col.categoryId ?? '' });
        }
        return map;
    }, [collections]);


    const productsMap = useMemo(() => {
        const map = new Map<string, ProductItem>();
        for (const product of products) {
            map.set(product.id, product);
        }
        return map;
    }, [products]);

    // 🔹 Методы
    const getCollectionById = (collectionId: string): ProductCollection | undefined =>
        collectionsMap.get(collectionId)?.collection;

    const getCollectionTitleById = (id: string): string =>
        collectionsMap.get(id)?.collection.title?.[lang] ?? '';

    const getItemById = (collectionId: string, itemId: string) =>
        collectionsMap.get(collectionId)?.collection.items?.find((item) => item.id === itemId);

    const getProductById = (itemId: string): ProductItem | undefined =>
        productsMap.get(itemId);

    const getCategoryByCollectionId = (collectionId: string): ProductCategory | undefined => {
        const collection = collections.find(col => col.id === collectionId);
        if (!collection) return undefined;

        // у коллекции уже есть categoryId — берём его
        const categoryId = collection.categoryId;

        // возвращаем объект категории на основе categoryId
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
            collections: collections.filter(col => col.categoryId === categoryId),
        };
    };
    const getCategoryIdByCollectionId = (collectionId: string): string | undefined => {
        const collection = collections.find(col => col.id === collectionId);
        return collection?.categoryId;
    };

    const getProductDetailsById = (productId: string) => {
        for (const col of collections) {
            const product = col.items.find((i) => i.id === productId);
            if (product) {
                const category = getCategoryByCollectionId(col.id);
                if (category) {
                    return { product, collection: col, category };
                }
            }
        }
        return null;
    };

    const getCollectionsByCategoryId = (categoryId: string): ProductCollection[] =>
        collections.filter((col) => col.categoryId === categoryId);

    return {
        isLoading,
        getCollectionById,
        getCollectionTitleById,
        getItemById,
        getProductById,
        getCategoryByCollectionId,
        getProductDetailsById,
        getCollectionsByCategoryId,
        getCategoryIdByCollectionId
    };
};*/


export const useProductCatalog = (): UseProductCatalogReturn => {
    const { i18n } = useTranslation();
    const lang = i18n.language as keyof LanguageText;
    const { products: wpProducts, collections: wpCollections, isLoaded } = useProductData();

    // 🧩 Преобразуем WP данные → в наши ProductItem и ProductCollection
    const products: ProductItem[] = useMemo(() => {
        if (!wpProducts?.length) return [];
        return wpProducts.map(mapWpToProductItem);
    }, [wpProducts]);

    const collections: ProductCollection[] = useMemo(() => {
        if (!wpCollections?.length) return [];

        // Преобразуем WP → ProductCollection
        const mapped = wpCollections.map(mapWpToProductCollection);

        // Связываем товары с коллекциями
        for (const col of mapped) {
            col.items = products
                .filter((p) => p.collectionId === col.id)
                // Можно также отсортировать товары, если есть acf.order
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        }

        // 🔥 Сортировка самих коллекций по ACF order
        return mapped.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    }, [wpCollections, products]);

    // 🗂 Формируем быстрые lookup-карты
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

    // 📦 Логика выборок
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