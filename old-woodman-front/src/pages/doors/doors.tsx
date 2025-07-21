import React from 'react';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate';
import { PictureHeader } from '../../components/picture-header/picture-header';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { ResponsiveCard } from '../../components/responsive-card/responsive-card.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { SocialButtons } from '../../components/buttons/social-buttons/social-buttons.tsx';
import { ProductSlider } from '../../components/product-slider/product-slider.tsx';
import heroImageClassica from '@assets/images/doors/classica/classica-hero-wide.webp';
import heroImageLoft from '@assets/images/doors/loft/loft-hero.webp';
import heroImageDeco from '@assets/images/doors/deco/deco-hero.webp';
import heroImageCabinet from '@assets/images/doors/cabinet/cabinet-hero.webp';
import heroImageRustic from '@assets/images/doors/rustic/rustic-hero.webp';
import heroImageExclusive from '@assets/images/doors/exclusive/exclusive-hero.webp';
import heroImageBalcony from '@assets/images/doors/balcony/balcony-hero.webp';
import gallery1 from '@assets/images/doors/gallery/gallery-1.webp';
import gallery2 from '@assets/images/doors/gallery/gallery-2.webp';
import gallery3 from '@assets/images/doors/gallery/gallery-3.webp';
import gallery4 from '@assets/images/doors/gallery/gallery-4.webp';

import styles from './doors.module.scss'
import { Gallery } from '../../components/gallery/gallery.tsx';

const doorCollections = [
  { id: 'classica', image: heroImageClassica },
  { id: 'loft', image: heroImageLoft },
  { id: 'deco', image: heroImageDeco },
  { id: 'cabinet', image: heroImageCabinet },
  { id: 'rustic', image: heroImageRustic },
  { id: 'exclusive', image: heroImageExclusive },
  { id: 'balcony', image: heroImageBalcony },
];

const DoorsOverview = () => {
  const { t } = usePageTranslate();
  const galleryImages = [
    { src: gallery1, alt: 'Большая дверь' },
    { src: gallery2, alt: 'Доски' },
    { src: gallery3, alt: 'Инструмент' },
    { src: gallery4, alt: 'Мастерская' },


  ];
  return (
    <ToolPageLayout>
      <div className={styles.doorsContainer}>
        <PictureHeader
          title={t('main-header')}
          label={t('main-header.label')}
          images={{
            small: '/images/doors/bg-small.webp',
            medium: '/images/doors/bg-medium.webp',
            large: '/images/doors/bg-large.webp',
          }}
        />
        <RunningText/>
        <section className={styles.doorsContent}>
          <Breadcrumbs current={t('breadcrumbs.label')}/>
          <SectionTabs/>
          <div className={styles.socialButtons}>
            <SocialButtons/>
          </div>

          {doorCollections.map(({ id, image }) => (
            <React.Fragment key={id}>
              <ResponsiveCard
                image={image}
                title={t(`title-${id}`)}
                description={t(`description-${id}`)}
                comment={t('comment-text')}
              />
              <div className={styles.previewWrap}>
                <ProductSlider
                  title={t('preview-title')}
                  categoryId="doors"
                  collectionId={id}
                />
              </div>
            </React.Fragment>
          ))}
        </section>
        <section className={styles.article}>
          <h2 className={styles.articleTitle}>{t('article-header').toUpperCase()}</h2>
          <span className={styles.articleLabel}>{t('article-header.label')} </span>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>{t('article-title-1').toUpperCase()}</h3>
              <span className={styles.columnText}>{t('article-title-1.label')}</span>
              <h3 className={styles.columnTitle}>{t('article-title-2').toUpperCase()}</h3>
              <span className={styles.columnText}>{t('article-title-2.label')}</span>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>{t('article-title-3').toUpperCase()}</h3>
              <span className={styles.columnText}>{t('article-title-3.label-1')}</span>
              <span className={styles.columnTextLast}>{t('article-title-3.label-2')}</span>
            </div>
          </div>
          <div className={styles.gallery}>
            <Gallery images={galleryImages} layout='complex'/>
          </div>
          <h2 className={styles.articleTitle}>{t('article2-header').toUpperCase()}</h2>
          <div className={styles.checkColumns}>
            <ul className={styles.checklist}>
              <li>{t('article2-text-1')}</li>
              <li>{t('article2-text-2')}</li>
              <li>{t('article2-text-3')}</li>
            </ul>
            <ul className={styles.checklist}>
              <li>{t('article2-text-4')}</li>
              <li>{t('article2-text-5')}</li>
            </ul>
          </div>
        <div className={styles.description}> {t('article2-description')}</div>
        </section>

      </div>
    </ToolPageLayout>
  )
}

export default DoorsOverview