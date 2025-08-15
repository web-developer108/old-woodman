import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import type { MetaTag, SeoHeadProps } from './seo-head.types.ts';
import { useTranslation } from 'react-i18next';


/*function getSeoIdFromPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const [, collectionId, productId] = parts;
  return productId || collectionId || '';
}*/
function getSeoIdFromPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return 'home';
  return parts[parts.length - 1];
}

export const SeoHead: React.FC<SeoHeadProps> = ({ meta = [] }) => {
  const { t, i18n } = useTranslation('seo');
  const { pathname } = useLocation();
  const lang = i18n.language as 'ru' | 'kk';

  const seoId = getSeoIdFromPath(pathname);

  const fallbackTitle = t('title.home');
  const fallbackDesc  = t('description.home');
  const title = t(`title.${seoId}`, { defaultValue: fallbackTitle });
  const description = t(`description.${seoId}`, { defaultValue: fallbackDesc });
  const canonicalUrl = `https://oldwoodman.kz${pathname}`;

 /* const isCatalogPath = pathname.startsWith('/doors') || pathname.startsWith('/furniture');

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
*/
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
