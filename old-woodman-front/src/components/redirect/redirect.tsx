import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import { useCurrentCategory } from '../../hooks/current-category/current-category.ts';
import NotFound from '../../pages/not-found/not-found.tsx';

const Redirect: React.FC = () => {
  const { collectionId } = useParams();
  const { getCollectionById } = useProductCatalog();
  const category = useCurrentCategory();

  const collection = getCollectionById(collectionId!);
  const firstItemId = collection?.items?.[0]?.id;

  if (!collection || !firstItemId) {
    return <NotFound/>;
  }

  return <Navigate to={`/${category}/${collectionId}/${firstItemId}`} replace/>;
};
export default Redirect;