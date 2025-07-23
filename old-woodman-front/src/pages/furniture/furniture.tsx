import React from 'react';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { PictureHeader } from '../../components/picture-header/picture-header.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import styles from '../doors/doors.module.scss';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { SocialButtons } from '../../components/buttons/social-buttons/social-buttons.tsx';

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

        </section>
      </div>
    </ToolPageLayout>
   )
 }

export default FurnitureOverview;
