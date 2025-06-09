import { Helmet } from 'react-helmet-async';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import type { MetaTag, SeoHeadProps } from './seo-head.types.ts';

const defaultMeta: MetaTag[] = [
  { name: 'description', content: 'Мебель на заказ от Old Woodman — стиль и качество' },
  { property: 'og:title', content: 'Old Woodman' },
];

export const SeoHead: React.FC<SeoHeadProps> = ({ meta = [], includeDefaults = true }) => {
  const { t, i18n } = usePageTranslate();
  const title = t('title');
  const description = t('description', '');

  const mergedMeta: MetaTag[] = [
    ...(includeDefaults ? defaultMeta : []),
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    ...meta
  ];

  return (
    <Helmet>
      <html lang={i18n.language}/>
      <title>{title}</title>
      {mergedMeta.map((m, i) => (
        <meta
          key={i}
          {...(m.name ? { name: m.name } : { property: m.property })}
          content={m.content}
        />
      ))}
      <link rel="icon" href="/favicon.svg"/>
    </Helmet>
  );
};