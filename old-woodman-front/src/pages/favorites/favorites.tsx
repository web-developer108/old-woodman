import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { useRandomProducts} from "../../hooks/random-products/random-products.tsx";
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { FaceIcon } from '../../components/icons/face-icon/face-icon.tsx';
import { useFavorites } from '../../hooks/favorites/favorites.tsx';
import { CardsPreview } from '../../components/cards-preview/cards-preview.tsx';
import { ProductSlider } from '../../components/product-slider/product-slider.tsx';
import type { ProductItem } from '../../config/config.types.ts';
import styles from './favorites.module.scss'

const Favorites = () => {
  const { t } = usePageTranslate();
  const navigate = useNavigate();
  const {favorites} = useFavorites();
  const { getProductById, getProductDetailsById } = useProductCatalog();
  const noFavorites = favorites.length === 0;
  const favoriteItems: ProductItem[] = useMemo(() => {
    return favorites
      .map((fav) => getProductById(fav.id))
      .filter((item): item is ProductItem => !!item);
  }, [favorites, getProductById]);

    const randomCollection = useRandomProducts({
        count: 4,
        excludeProductId: favorites.map((item) => item.id),
    });
  return (
    <ToolPageLayout>
      <div className={styles.favContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.mainHeader}>{t('main-header')}</h1>
            <div className={styles.label}>{t('main-header.label')}</div>
          </div>
        </div>
        <div className={styles.cartContent}>
          <Breadcrumbs current={t('main-header')}/>
          {noFavorites ?(
          <div className={styles.faceContainer}>
            <FaceIcon/>
            <h2 className={styles.title}>  {t('empty-header').toUpperCase()} </h2>
            <div className={styles.text}>   {t('empty-label')}</div>
          </div>)
            :
            (
              <div className={styles.favoritesWrap}>
                <CardsPreview
                  items={favoriteItems}
                  showPlug = {false}
                  handleCardClick={(productId) => {
                    const details = getProductDetailsById(productId);
                    if (!details) return;
                    const { category, collection } = details;
                    navigate(`/${category.id}/${collection.id}/${productId}`);
                  }}
                />
                <ProductSlider
                  title={t('random-title').toUpperCase()}
                  items={randomCollection}
                  headingSize = 'large'
                  handleCardClick={(productId) => {
                    const productDetails = getProductDetailsById(productId);
                    if (!productDetails) return;
                    const { collection } = productDetails;
                    navigate(`/furniture/${collection.id}/${productId}`);
                  }}
                />
              </div>
            )
          }
        </div>
      </div>
    </ToolPageLayout>
  )
}

export default Favorites;