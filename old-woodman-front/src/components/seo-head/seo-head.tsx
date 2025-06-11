//import { Helmet } from 'react-helmet-async';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import type { MetaTag, SeoHeadProps } from './seo-head.types.ts';
import { useEffect } from 'react';

const defaultMeta: MetaTag[] = [
  { name: 'description', content: 'Мебель на заказ от Old Woodman — стиль и качество' },
  { property: 'og:title', content: 'Old Woodman' },
];

export const SeoHead: React.FC<SeoHeadProps> = ({ meta = [], includeDefaults = true }) => {
  const { t, i18n } = usePageTranslate();
  console.log('t', t)
  const title = t('title');
  const description = t('description');
console.log('title', title, 'description', description )
  const mergedMeta: MetaTag[] = [
    ...(includeDefaults ? defaultMeta : []),
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    ...meta
  ];

  useEffect(() => {
    document.title = title;

    document.documentElement.lang = i18n.language;

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
    link.setAttribute('rel', 'icon');
    link.setAttribute('href', '/favicon.svg');
    link.setAttribute('data-seo-head', 'true');
    document.head.appendChild(link);
  }, [title, description, i18n.language, mergedMeta]);

  return null;
};
