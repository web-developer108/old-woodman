import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { Gallery } from '../../components/gallery/gallery.tsx';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { NavigationBlock } from '../../components/navigation-block/navigation-block.tsx';
import clock from '@assets/images/gifts/clock-big.webp'
import mirror from '@assets/images/gifts/mirror-big.webp'
import styles from './gifts.module.scss'
import { PictureHeader } from '../../components/picture-header/picture-header.tsx';

const Gifts = () => {
  const { t } = usePageTranslate();
  const galleryImages = [
    { src: clock, alt: 'Эксклюзивные часы из древесины карагача' },
    { src: mirror, alt: 'Зеркало в деревянной раме в современном интерьере' },

  ];
  return (
    <ToolPageLayout>
      <div className={styles.giftsContainer}>
        <PictureHeader
          title={t('main-header')}
          label={t('main-header.label')}
          images={{
            small: '/images/gifts/orange-header-small.webp',
            medium: '/images/gifts/orange-header-medium.webp',
            large: '/images/gifts/orange-header-large.webp',
          }}
        />

        <RunningText/>
        <div className={styles.giftsContent}>

          <Breadcrumbs current={t('main-header')}/>
          <SectionTabs/>
          <section className={styles.article}>
            <h2 className={styles.infoTitle}>{t('info-title').toUpperCase()}</h2>
            <div className={styles.columns}>
              <div className={styles.column}>
                <span>{t('info-text-1')}</span>
                <span>{t('info-text-2')}</span>
                <span>{t('info-text-3')}</span>
              </div>
              <div className={styles.column}>
                <span>{t('info-text-4')}</span>
                <span>{t('info-text-5')}</span>
              </div>
            </div>
          </section>
          <Gallery images={galleryImages} layout={'two-large'}/>
          <section className={styles.textInfo}>
            <TextInfo/>
          </section>
          <section className={styles.navigation}>
            <h2>{t('nav-title').toUpperCase()}</h2>
            <NavigationBlock/>
          </section>
        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Gifts;