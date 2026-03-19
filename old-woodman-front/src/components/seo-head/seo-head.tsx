import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { MetaTag, SeoHeadProps } from './seo-head.types.ts';
import { useProductCatalog } from "../../hooks/catalog/use-product-catalog.ts";

function getSeoIdFromPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return 'home';
  return parts[parts.length - 1];
}
function isProductPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  return (
      (parts[0] === 'doors' || parts[0] === 'furniture') &&
      parts.length === 3
  );
}

export const SeoHead: React.FC<SeoHeadProps> = ({ meta = [] }) => {
  const { t, i18n } = useTranslation('seo');
  const { pathname } = useLocation();
  const lang = i18n.language as 'ru' | 'kk';
  const { getProductDetailsById } = useProductCatalog();
  const seoId = getSeoIdFromPath(pathname);
  const parts = pathname.split('/').filter(Boolean);
  const productId = parts[2];
  const fallbackTitle = t('title.home');
  const fallbackDesc  = t('description.home');
  const staticTitle = t(`title.${seoId}`, { defaultValue: fallbackTitle });
  const staticDescription = t(`description.${seoId}`, { defaultValue: fallbackDesc });
 // const title = t(`title.${seoId}`, { defaultValue: fallbackTitle });
  let title = staticTitle;
 // const description = t(`description.${seoId}`, { defaultValue: fallbackDesc });
  let description = staticDescription;
  if (isProductPath(pathname) && productId) {
    const details = getProductDetailsById(productId);
    const product = details?.product;

    title =
        product?.seoTitle?.[lang]?.trim() ||
        product?.pageHeader?.[lang]?.trim() ||
        product?.title?.[lang]?.trim() ||
        staticTitle;

    description =
        product?.seoDescription?.[lang]?.trim() ||
        product?.description?.[lang]?.trim() ||
        product?.shortName?.[lang]?.trim() ||
        staticDescription;
  }


  const canonicalUrl = `https://oldwoodman.kz${pathname}`;

  const mergedMeta: MetaTag[] = useMemo(
    () => [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      ...meta,
    ],
    [description, title, canonicalUrl, meta]
  );

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    const oldMeta = document.querySelectorAll('[data-seo-head]');
    oldMeta.forEach((el) => el.parentNode?.removeChild(el));

    mergedMeta.forEach((m) => {
      const tag = document.createElement('meta');
      if (m.name) tag.setAttribute('name', m.name);
      else if (m.property) tag.setAttribute('property', m.property);
      tag.setAttribute('content', m.content);
      tag.setAttribute('data-seo-head', 'true');
      document.head.appendChild(tag);
    });

    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href',canonicalUrl);
    link.setAttribute('data-seo-head', 'true');
    document.head.appendChild(link);

    const icon = document.createElement('link');
    icon.setAttribute('rel', 'icon');
    icon.setAttribute('href', '/favicon.svg');
    icon.setAttribute('data-seo-head', 'true');
    document.head.appendChild(icon);

  }, [title, description, lang, mergedMeta, canonicalUrl]);

  return null;
};
