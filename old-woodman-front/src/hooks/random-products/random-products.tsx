import { useMemo } from 'react';
import { useProductCatalog } from '../catalog/use-product-catalog.ts'
import { useProductData } from '../wp-data/wp-data.tsx';
import type { ProductItem } from '../../config/config.types.ts';

interface UseRandomProductsOptions {
    count?: number;
    excludeProductId?: string[];
    onlyCategoryId?: 'doors' | 'furniture';
}

export const useRandomProducts = ({
    count = 4,
    excludeProductId = [],
    onlyCategoryId,
}: UseRandomProductsOptions = {}) => {
    const { getProductById, getProductDetailsById } = useProductCatalog();
    const { popularItems } = useProductData();

    return useMemo(() => {
        if (!popularItems.length) return [];

        const filteredIds = popularItems.filter(
            (id) => !excludeProductId.includes(id)
        );

        const allProducts: ProductItem[] = filteredIds
            .map((id) => {
                const product = getProductById(id);
                if (!product) return null;

                if (onlyCategoryId) {
                    const details = getProductDetailsById(id);
                    if (!details || details.category.id !== onlyCategoryId) return null;
                }

                return product;
            })
            .filter((p): p is ProductItem => !!p);

        const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }, [popularItems, excludeProductId, count, onlyCategoryId, getProductById, getProductDetailsById]);
};