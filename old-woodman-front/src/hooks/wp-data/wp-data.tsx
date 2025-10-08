import React, { createContext, useContext, useEffect, useState } from 'react';
import type { WpProductResponse, WpCollectionResponse } from '../../types/wp.types.ts'

interface ProductDataContextValue {
    products: WpProductResponse[];
    collections: WpCollectionResponse[];
    isLoaded: boolean;
    isError: boolean;
}

const ProductDataContext = createContext<ProductDataContextValue>({
    products: [],
    collections: [],
    isLoaded: false,
    isError: false,
});

export const ProductDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<WpProductResponse[]>([]);
    const [collections, setCollections] = useState<WpCollectionResponse[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            try {
                const [prodRes, collRes] = await Promise.all([
                    fetch('https://oldwoodman.kz/cms/wp-json/wp/v2/products?per_page=100'),
                    fetch('https://oldwoodman.kz/cms/wp-json/wp/v2/collections?per_page=100'),
                ]);

                if (!prodRes.ok || !collRes.ok) {
                    throw new Error('Failed to load WordPress data');
                }

                const [prodJson, collJson]: [WpProductResponse[], WpCollectionResponse[]] = await Promise.all([
                    prodRes.json(),
                    collRes.json(),
                ]);

                setProducts(prodJson);
                setCollections(collJson);
                setIsLoaded(true);
                setIsError(false);

                localStorage.setItem(
                    'wp-cache',
                    JSON.stringify({
                        products: prodJson,
                        collections: collJson,
                        timestamp: Date.now(),
                    })
                );
            } catch (error) {
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
                isLoaded,
                isError,
            }}
        >
            {children}
        </ProductDataContext.Provider>
    );
};

export const useProductData = (): ProductDataContextValue => useContext(ProductDataContext);