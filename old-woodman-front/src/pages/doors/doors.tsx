import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate';
import { PictureHeader } from '../../components/picture-header/picture-header';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { ResponsiveCard } from '../../components/responsive-card/responsive-card.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import heroImage from '@assets/images/doors/classica/classica-hero-wide.webp';
import styles from './doors.module.scss'

const DoorsOverview = () => {
  const { t } = usePageTranslate();
  console.log('DoorsOverview')

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
        <Breadcrumbs current={t('breadcrumbs.label')}/>
        <SectionTabs/>
        <ResponsiveCard
          image={heroImage}
          title={t('title-classica')}
          description={t('description-classica')}
          comment={t('comment-text')}

        />
      </div>
    </ToolPageLayout>
  )
}

export default DoorsOverview