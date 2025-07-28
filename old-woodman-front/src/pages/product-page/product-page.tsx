import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import i18n from 'i18next';
//import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import { DoorsDetails } from '../../components/doors-details/doors-details.tsx';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { ShareButton } from '../../components/buttons/share-button/share-button';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { FurnituresDetails } from '../../components/furnitures-details/furnitures-details.tsx';
import styles from './product-page.module.scss';

const ProductPage: React.FC = () => {
  const { collectionId } = useParams();
  const { getCollectionById, getCategoryByCollectionId } = useProductCatalog();

  const lang = i18n.language as 'ru' | 'kk';
  const category = getCategoryByCollectionId(collectionId!);
  const collection = getCollectionById(collectionId!);

  const DetailsComponent = useMemo(() => {

    switch (category?.id) {

      case 'furniture':
        return FurnituresDetails;
      default:
        return DoorsDetails;
    }
  }, [category?.id]);

  if (!collection || !category) {
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
        <DetailsComponent/>
        <section className={styles.textInfo}>
          <TextInfo/>
        </section>
      </div>
    </ToolPageLayout>
  );
};

export default ProductPage;
