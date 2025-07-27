import React from 'react';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { PictureHeader } from '../../components/picture-header/picture-header.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { SocialButtons } from '../../components/buttons/social-buttons/social-buttons.tsx';
import { ResponsiveCard } from '../../components/responsive-card/responsive-card.tsx';
import { CardsPreview } from '../../components/cards-preview/cards-preview.tsx';
import { Gallery } from '../../components/gallery/gallery.tsx';
import { getFurnitureDescriptionLines } from '../../utils/get-description-lines.ts';
import heroImageConsoles from '@assets/images/furniture/consoles-hero.webp';
import heroImageWardrobes from '@assets/images/furniture/wardrobes-hero.webp';
import heroImageBeds from '@assets/images/furniture/beds-hero.webp';
import heroImageChairs from '@assets/images/furniture/chairs-hero.webp';
import gallery1 from '@assets/images/furniture/gallery/gallery-1.webp';
import gallery2 from '@assets/images/furniture/gallery/gallery-2.webp';
import gallery3 from '@assets/images/furniture/gallery/gallery-3.webp';
import gallery4 from '@assets/images/furniture/gallery/gallery-4.webp';
import styles from '../doors/doors.module.scss';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { NavigationBlock } from '../../components/navigation-block/navigation-block.tsx';

const furnitureCollections = [
  { id: 'consoles', image: heroImageConsoles },
  { id: 'wardrobes', image: heroImageWardrobes },
  { id: 'beds', image: heroImageBeds },
  { id: 'chairs', image: heroImageChairs },

];

const FurnitureOverview: React.FC = () => {
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
            small: '/images/furniture/blue-header-small.webp',
            medium: '/images/furniture/blue-header-medium.webp',
            large: '/images/furniture/blue-header-large.webp',
          }}
        />
        <RunningText/>
        <section className={styles.doorsContent}>
          <Breadcrumbs current={t('breadcrumbs.label')}/>
          <SectionTabs/>
          <div className={styles.socialButtons}>
            <SocialButtons/>
          </div>
          {furnitureCollections.map(({ id, image }) => (
            <React.Fragment key={id}>
              <ResponsiveCard
                image={image}
                title={t(`title-${id}`)}
                description={getFurnitureDescriptionLines(id, t)}
                comment={t(`comment-text-${id}`)}
              />
              <div className={styles.previewWrap}>
                <CardsPreview
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
            </div>
            <div className={styles.column}>
              <span className={styles.columnText}>{t('article-title-2.label')}</span>
            </div>
          </div>
          <div className={styles.gallery}>
            <Gallery images={galleryImages} layout='complex'/>
          </div>
          <h2 className={styles.articleTitle}>{t('article2-header').toUpperCase()}</h2>
          <div className={styles.descriptionFurnitureTop}> {t('article2-description-1')}</div>
          <div id='info' className={styles.checkColumns}>
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
          <div className={styles.descriptionFurnitureBottom}> {t('article2-description-2')}</div>
          <div className={styles.descriptionFurnitureBottom}> {t('article2-description-3')}</div>
          <div className={styles.descriptionFurnitureBottom}> {t('article2-description-4')}</div>
        </section>
        <section className={styles.textInfo}>
          <TextInfo/>
        </section>
        <section className={styles.navigation}>
          <h2>{t('nav-title').toUpperCase()}</h2>
          <NavigationBlock isHome={false} blocks={['doors', 'facades']}/>
        </section>
      </div>
    </ToolPageLayout>
  )
}

export default FurnitureOverview;
