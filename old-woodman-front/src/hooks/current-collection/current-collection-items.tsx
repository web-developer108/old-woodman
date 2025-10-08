import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProductCatalog } from "../catalog/use-product-catalog.ts";
//import { productCatalog } from '../../config/products.config.ts';

export const useCurrentCollectionItems = () => {
    const {pathname} = useLocation();
    const {i18n} = useTranslation();
    const lang = i18n.language as 'ru' | 'kk';
    const segments = pathname.split('/').filter(Boolean);
    const categoryId = segments[0];
    const collectionId = segments[1] ?? '';
    const productId = segments[2];

    const {getCollectionById, getProductById} = useProductCatalog();
    const collection = getCollectionById(collectionId);
    if (!collection) return [];

    if (categoryId === 'doors') {
        return (collection.items ?? []).map(item => ({
            src: item.images?.[0] ?? '',
            label: item.description?.[lang] ?? '',
            alt: item.alt ?? '',
        }));
    }

    // 🟢 если категория = мебель → показываем изображения одного продукта
    if (categoryId === 'furniture') {
        const product = getProductById(productId ?? '');
        if (!product) return [];

        return (product.images ?? []).map(image => ({
            src: image,
            label: product.description?.[lang] ?? '',
            alt: product.alt ?? '',
        }));
    }

    // 🔸 fallback
    return [];
};