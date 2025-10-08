import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import { useCurrentCategory} from "../../hooks/current-category/current-category.ts";
import TextInfo from '../../components/text-info/text-info.tsx';
import { DoorsDetails } from '../../components/doors-details/doors-details.tsx';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { ShareButton } from '../../components/buttons/share-button/share-button';
import { FurnituresDetails } from '../../components/furnitures-details/furnitures-details.tsx';
import styles from './product-page.module.scss';

const ProductPage: React.FC = () => {
    const { collectionId } = useParams();
    const currentCategory = useCurrentCategory();
    console.log(collectionId);
    const {
        getCollectionById,
        //getCategoryIdByCollectionId
    } = useProductCatalog();
    const {i18n} = useTranslation('common');

    const lang = i18n.language as 'ru' | 'kk';
   // const category = getCategoryIdByCollectionId(collectionId!);
    const collection = getCollectionById(collectionId!);
    console.log('[ProductPage render]', {
        collectionId,
        category: currentCategory,
        collection,
    });
    const DetailsComponent = useMemo(() => {

        switch (currentCategory) {

            case 'furniture':
                return FurnituresDetails;
            default:
                return DoorsDetails;
        }
    }, [currentCategory]);

    if (!collection || !currentCategory) {
        return
    }
    return (<ToolPageLayout>
            <div className={styles.pageContainer}>
                <div className={styles.topContainer}>
                    <Breadcrumbs
                        current={collection.title[lang]}

                        /*categoryId={category?.id}*/
                        categoryId={currentCategory}

                    />
                    <ShareButton/>
                </div>

                <DetailsComponent/>
                <section className={styles.textInfo}>
                    <TextInfo/>
                </section>
            </div>
        </ToolPageLayout>);
};

export default ProductPage;
