import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import i18n from 'i18next';
//import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { productCatalog } from '../../config/products.config.ts';
import type { ProductCollection } from '../../config/config.types.ts'
import { DoorsDetails } from '../../components/doors-details/doors-details.tsx';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { ShareButton } from '../../components/buttons/share-button/share-button';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import styles from './product-page.module.scss';

const ProductPage: React.FC = () => {
  const { collectionId } = useParams();
//  const { t } = usePageTranslate();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get('productId');

  const lang = i18n.language as 'ru' | 'kk';

  const category = useMemo(() => {
    return productCatalog.find((category) =>
      category.collections?.some((c) => c.id === collectionId)
    );
  }, [collectionId]);

  const collection: ProductCollection | undefined = useMemo(() => {
    return productCatalog.find((category) =>
      category.collections?.some((c) => c.id === collectionId)
    )?.collections?.find((c) => c.id === collectionId);
  }, [collectionId]);

  useEffect(() => {
    if (!productId) {

      navigate('/doors', { replace: true });
    }
  }, [productId]);

  if (!collection) {
    return
  }

  return (
    <ToolPageLayout>
      <div className={styles.pageContainer}>
        <div className={styles.topContainer}>
          <Breadcrumbs
            current={collection.title[lang]}
            categoryTitle={category?.title[lang]}
            categoryId={category?.id}
          />
          <ShareButton/>
        </div>
        <DoorsDetails/>
        <section className={styles.textInfo}>
          <TextInfo/>
        </section>
      </div>
    </ToolPageLayout>
  );
};

export default ProductPage;
