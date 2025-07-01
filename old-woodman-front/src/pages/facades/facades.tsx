import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { Gallery } from '../../components/gallery/gallery.tsx';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { NavigationBlock } from '../../components/navigation-block/navigation-block.tsx';
import gallery1 from '@assets/images/facades/gallery-1f-big.webp'
import gallery2 from '@assets/images/facades/gallery-2f-big.webp'
import gallery3 from '@assets/images/facades/gallery-3f-big.webp'
import gallery4 from '@assets/images/facades/gallery-4f-big.webp'
import gallery5 from '@assets/images/facades/gallery-5f-big.webp'
import useDevice from '../../hooks/device/use-device.ts';
import styles from './facades.module.scss';


const Facades = () => {
  const { t } = usePageTranslate();
  const { isMobile } = useDevice();
  const galleryImages = [
    { src: gallery1, alt: 'Лампа' },
    { src: gallery2, alt: 'Экран' },
    { src: gallery3, alt: 'Экран в работе' },
    { src: gallery4, alt: 'Большой экран' },
    { src: gallery5, alt: 'Экран черный' },
    { src: gallery2, alt: 'Экран' },
    { src: gallery3, alt: 'Экран в работе' },
    { src: gallery4, alt: 'Большой экран' },
    { src: gallery5, alt: 'Экран черный' },
  ];
  return (
    <ToolPageLayout>
      <div className={styles.facadesContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageTitleContainer}>
            <h1 className={styles.imageTitle}
                dangerouslySetInnerHTML={{ __html: isMobile ? t('main-header-mobile').toUpperCase() : t('main-header').toUpperCase() }}/>
            <div className={styles.imageLabel}>{t('main-header.label')}</div>
          </div>
        </div>
        <RunningText/>
        <div className={styles.facadesContent}>

          <Breadcrumbs current={t('breadcrumbs.label')}/>
          <SectionTabs/>
          <section className={styles.article}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <h2
                  className={styles.infoTitle}>{isMobile ? t('info-title-1-mobile').toUpperCase() : t('info-title-1-desktop').toUpperCase()}</h2>
                {isMobile ? (
                  <span>{t('info-text-1-mobile')}</span>
                ) : (
                  <span>{t('info-text-1-desktop')}</span>
                )}
                <h2
                  className={styles.infoTitle}>{t('info-title-2').toUpperCase()}</h2>
                {isMobile ? (<>
                    <span>{t('info-text-2.1-mobile')}</span>
                    <span>{t('info-text-2.2-mobile')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('info-text-2.1-desktop')}</span>
                    <span>{t('info-text-2.2-desktop')}</span>
                    <span>{t('info-text-2.3-desktop')}</span>
                    <span>{t('info-text-2.4-desktop')}</span>
                  </>
                )}
              </div>
              <div className={styles.column}>
                <h2
                  className={styles.infoTitle}>{t('info-title-3').toUpperCase()}</h2>
                {isMobile ? (<>
                    <span>{t('info-text-3.1-mobile')}</span>
                    <span>{t('info-text-3.2-mobile')}</span>
                    <span>{t('info-text-3.3-mobile')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('info-text-3.1-desktop')}</span>
                    <span>{t('info-text-3.2-desktop')}</span>
                    <span>{t('info-text-3.3-desktop')}</span>
                    <span>{t('info-text-3.4-desktop')}</span>
                  </>
                )}
                <h2
                  className={styles.infoTitle}>{t('info-title-4').toUpperCase()}</h2>
                {isMobile ? (<>
                    <span>{t('info-text-4.1-mobile')}</span>
                    <span>{t('info-text-4.2-mobile')}</span>
                    <span>{t('info-text-4.3-mobile')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('info-text-4.1-desktop')}</span>
                    <span>{t('info-text-4.2-desktop')}</span>
                    <span>{t('info-text-4.3-desktop')}</span>
                    <span>{t('info-text-4.4-desktop')}</span>
                  </>
                )}
              </div>
            </div>
          </section>
          <Gallery images={galleryImages}/>
          <section className={styles.textInfo}>
            <TextInfo/>
          </section>
          <section className={styles.navigation}>
            <h2>{t('nav-title').toUpperCase()}</h2>
            <NavigationBlock blocks={['doors', 'furniture']}/>
          </section>
        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Facades;