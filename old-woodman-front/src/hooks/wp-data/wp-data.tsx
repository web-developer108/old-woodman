import React, { createContext, useContext, useEffect, useState } from 'react';
import type { WpProductResponse, WpCollectionResponse } from '../../types/wp.types.ts'

interface ProductDataContextValue {
    products: WpProductResponse[];
    collections: WpCollectionResponse[];
    popularItems: string[];
    isLoaded: boolean;
    isError: boolean;
}

const ProductDataContext = createContext<ProductDataContextValue>({
    products: [],
    collections: [],
    popularItems: [],
    isLoaded: false,
    isError: false,
});

export const ProductDataProvider: React.FC<{
    children: React.ReactNode
}> = ({children}) => {
    const [products, setProducts] = useState<WpProductResponse[]>([]);
    const [collections, setCollections] = useState<WpCollectionResponse[]>([]);
    const [popularItems, setPopularItems] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            try
            {
                const [prodRes, collRes, popularRes] = await Promise.all([
                    fetch('https://oldwoodman.kz/cms/wp-json/wp/v2/products?per_page=100'),
                    fetch('https://oldwoodman.kz/cms/wp-json/wp/v2/collections?per_page=100'),
                    fetch('https://oldwoodman.kz/cms/wp-json/wp/v2/popular_products?per_page=1'),

                ]);

                if (!prodRes.ok || !collRes.ok || !popularRes.ok)
                {
                    throw new Error('❌ Failed to load WordPress data');
                }


                const [prodJson, collJson, popularJson]: [WpProductResponse[], WpCollectionResponse[], WpPopularResponse[]] = await Promise.all([
                    prodRes.json(),
                    collRes.json(),
                    popularRes.json()
                ]);
                const itemsList = (popularJson?.[0]?.acf?.popular_items || '')
                    .split(/\r?\n/)
                    .map((x) => x.trim())
                    .filter(Boolean);

                setProducts(prodJson);
                setCollections(collJson);
                setPopularItems(itemsList);
                setIsLoaded(true);
                setIsError(false);

            } catch (error)
            {
                console.error('[ProductDataProvider] Error loading WordPress data', error);
                setIsError(true);
            }
        };

        loadAll().catch((err) => console.error('WP load error:', err));
    }, []);

    return (
        <ProductDataContext.Provider
            value={{
                products,
                collections,
                popularItems,
                isLoaded,
                isError,
            }}
        >
            {children}
        </ProductDataContext.Provider>
    );
};

export const useProductData = (): ProductDataContextValue => useContext(ProductDataContext);