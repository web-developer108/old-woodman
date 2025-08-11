import React, { useEffect, useMemo } from 'react';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import type { MetaTag, SeoHeadProps } from './seo-head.types.ts';
import { useLocation } from 'react-router-dom';

/*
const defaultMeta: MetaTag[] = [
  { name: 'description', content: 'Мебель на заказ от Old Woodman — стиль и качество' },
  { property: 'og:title', content: 'Old Woodman' },
];
*/

function getSeoIdFromPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const [, collectionId, productId] = parts;
  return productId || collectionId || '';
}


export const SeoHead: React.FC<SeoHeadProps> = ({ meta = [] }) => {
  const { t, i18n } = usePageTranslate();
  const { pathname } = useLocation();
  const lang = i18n.language as 'ru' | 'kk';
  let title: string;
  let description: string;
  const isCatalogPath = pathname.startsWith('/doors') || pathname.startsWith('/furniture');

  if (isCatalogPath) {
    const seoId = getSeoIdFromPath(pathname);
    if (seoId) {

      title = t(`title.${seoId}`, { defaultValue: t('title') });
      description = t(`description.${seoId}`, { defaultValue: t('description') });
    } else {
      title = t('title');
      description = t('description');
    }
  } else {
    title = t('title');
    description = t('description');
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
