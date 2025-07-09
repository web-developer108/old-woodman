import React, { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { productCatalog}  from '../../config/products.config.ts';
import type { ProductCollection, ProductItem } from '../../config/config.types.ts'
import { DoorsDetails } from '../../components/doors-details/doors-details.tsx';
import i18n from 'i18next';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import styles from  './ptoduct-page.module.scss';

const ProductPage: React.FC = () => {
  const { collectionId } = useParams();
  const { t } = usePageTranslate();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const lang = i18n.language as 'ru' | 'kk';
  const collection:  ProductCollection | undefined = useMemo(() => {
    return productCatalog.find((category) =>
      category.collections?.some((c) => c.id === collectionId)
    )?.collections?.find((c) => c.id === collectionId);
  }, [collectionId]);
  const items = collection?.items || [];
  const selectedProduct: ProductItem = productId
    ? items.find((item) => item.id === productId) || items[0]
    : items[0];
  if (!collection) {
    return <div>Коллекция не найдена</div>;
  }

  return (
    <ToolPageLayout>
      <div className={styles.pageContainer}>

      <DoorsDetails
        collection={collection}
        product={selectedProduct}
        lang={lang}
      />
      {/* тут будет рендер всей страницы */}
      </div>
    </ToolPageLayout>
  );
};

export default ProductPage;
