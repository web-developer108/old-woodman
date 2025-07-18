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
import styles from './doors.module.scss'

const DoorsOverview = () => {
  const { t } = usePageTranslate();

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
        <div className={styles.doorsContent}>
          <Breadcrumbs current={t('breadcrumbs.label')}/>
          <SectionTabs/>
          <ResponsiveCard
            image={heroImageClassica}
            title={t('title-classica')}
            description={t('description-classica')}
            comment={t('comment-text')}

          />
          <div className={styles.socialButtons}>
            <SocialButtons/>
          </div>
          <div className={styles.previewWrap}>
            <ProductSlider
              title={t('preview-title')}
              categoryId='doors'
              collectionId='classica'
            />
          </div>
          <ResponsiveCard
            image={heroImageLoft}
            title={t('title-loft')}
            description={t('description-loft')}
            comment={t('comment-text')}
          />
          <div className={styles.previewWrap}>
            <ProductSlider
              title={t('preview-title')}
              categoryId='doors'
              collectionId='loft'
            />
          </div>
          <ResponsiveCard
            image={heroImageDeco}
            title={t('title-deco')}
            description={t('description-deco')}
            comment={t('comment-text')}
          />
          <div className={styles.previewWrap}>
            <ProductSlider
              title={t('preview-title')}
              categoryId='doors'
              collectionId='deco'
            />
          </div>
          <ResponsiveCard
            image={heroImageCabinet}
            title={t('title-cabinet')}
            description={t('description-cabinet')}
            comment={t('comment-text')}
          />
          <div className={styles.previewWrap}>
            <ProductSlider
              title={t('preview-title')}
              categoryId='doors'
              collectionId='cabinet'
            />
          </div>
          <ResponsiveCard
            image={heroImageRustic}
            title={t('title-rustic')}
            description={t('description-rustic')}
            comment={t('comment-text')}
          />
          <div className={styles.previewWrap}>
            <ProductSlider
              title={t('preview-title')}
              categoryId='doors'
              collectionId='rustic'
            />
          </div>
        </div>
      </div>
    </ToolPageLayout>
  )
}

export default DoorsOverview