import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
//import { Gallery } from '../../components/gallery/gallery.tsx';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { NavigationBlock } from '../../components/navigation-block/navigation-block.tsx';
import styles from './facades.module.scss';
import useDevice from '../../hooks/device/use-device.ts';

const Facades = () => {
  const { t } = usePageTranslate();
  const { isMobile} = useDevice();
/*  const galleryImages = [
    { src: clock, alt: 'Часы' },
    { src:mirror, alt: 'Зеркало' },

  ];*/
  return (
    <ToolPageLayout>
      <div className={styles.facadesContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageTitleContainer}>
            <h1 className={styles.imageTitle} dangerouslySetInnerHTML={{__html: isMobile ?t('main-header-mobile').toUpperCase() : t('main-header').toUpperCase()}}/>
            <div className={styles.imageLabel}>{t('main-header.label')}</div>
          </div>
        </div>
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
         {/* <Gallery images={galleryImages} layout={'two-large'}/>*/}
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
export default Facades;