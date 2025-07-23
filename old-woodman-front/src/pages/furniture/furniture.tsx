import React from 'react';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { PictureHeader } from '../../components/picture-header/picture-header.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { SocialButtons } from '../../components/buttons/social-buttons/social-buttons.tsx';
import { ResponsiveCard } from '../../components/responsive-card/responsive-card.tsx';
import heroImageConsoles from '@assets/images/furniture/consoles-hero.webp';
import styles from '../doors/doors.module.scss';
import { getFurnituresDescriptionLines } from '../../utils/get-description-lines.ts';
import { CardsPreview } from '../../components/cards-preview/cards-preview.tsx';




const furnitureCollections = [
  { id: 'consoles', image: heroImageConsoles },
 /* { id: 'loft', image: heroImageLoft },
  { id: 'deco', image: heroImageDeco },
  { id: 'cabinet', image: heroImageCabinet },
  { id: 'rustic', image: heroImageRustic },
  { id: 'exclusive', image: heroImageExclusive },
  { id: 'balcony', image: heroImageBalcony },*/
];

const FurnitureOverview: React.FC = () => {
   const { t } = usePageTranslate();

   return(
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
                description={getFurnituresDescriptionLines(id, t)}
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
      </div>
    </ToolPageLayout>
   )
 }

export default FurnitureOverview;
