import type { MetaTag, SeoHeadProps } from './seo-head.types.ts';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const defaultMeta: MetaTag[] = [
  { name: 'description', content: 'Мебель на заказ от Old Woodman — стиль и качество' },
  { property: 'og:title', content: 'Old Woodman' },
  { property: 'og:description', content: 'Изготовление мебели и дверей по индивидуальному заказу' },
  { property: 'og:image', content: 'https://oldwoodman.kz/og-image.jpg' }//скорректировать
];

export const SeoHead: React.FC<SeoHeadProps> = ({ title, meta = [], includeDefaults = true }) => {
  const { i18n } = useTranslation();

  const mergedMeta = includeDefaults ? [...defaultMeta, ...meta] : meta;

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title}</title>
      {mergedMeta.map((m, i) => (
        <meta
          key={i}
          {...(m.name ? { name: m.name } : { property: m.property })}
          content={m.content}
        />
      ))}
      <link rel="icon" href="/favicon.svg" />
    </Helmet>
  );
};