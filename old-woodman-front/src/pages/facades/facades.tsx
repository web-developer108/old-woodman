import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { Gallery } from '../../components/gallery/gallery.tsx';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { NavigationBlock } from '../../components/navigation-block/navigation-block.tsx';
import { PictureHeader } from '../../components/picture-header/picture-header.tsx';
import gallery1 from '@assets/images/facades/gallery-1f.webp'
import gallery2 from '@assets/images/facades/gallery-2f.webp'
import gallery3 from '@assets/images/facades/gallery-3f.webp'
import gallery4 from '@assets/images/facades/gallery-4f.webp'
import gallery5 from '@assets/images/facades/gallery-5f.webp'
import bg from '@assets/images/home/bg-yellow.webp';
import small from '@assets/images/home/facade-1.webp';
import big from '@assets/images/home/facade-2.webp';
import styles from './facades.module.scss';

const Facades = () => {
  const { t } = usePageTranslate();
  const galleryImages = [
    { src: gallery1, alt: 'Деревянные стеновые панели для кафе в Алматы' },
    { src: gallery2, alt: 'Деревянные стеновые панели с готической резьбой и принтом ' },
    { src: gallery3, alt: 'Светлые деревянные мебельные фасады из массива в столярном цеху в Алматы' },
    { src: gallery4, alt: 'Деревянные стеновые панели с готической резьбой в интерьере кафе в Алматы' },
    { src: gallery5, alt: 'Тёмные деревянные мебельные фасады из массива в столярном цеху в Алматы' },
  ];

  return (
    <ToolPageLayout>
      <div className={styles.facadesContainer}>
        <PictureHeader
          title={t('main-header')}
          label={t('main-header.label')}
          color='black'
          imageBg={bg}
          imageSmall={{
            src: small,
            alt: 'Декоративная стеновая панель с готической росписью'
          }}
          imageBig={{
            src: big,
            alt: 'Деревянный мебельный фасад из массива сосны '
          }}
        />
        <RunningText/>
        <div className={styles.facadesContent}>

          <Breadcrumbs current={t('breadcrumbs.label')}/>
          <SectionTabs/>
          <section className={styles.article}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <h2
                  className={styles.infoTitle}>{t('info-title-1-desktop').toUpperCase()}</h2>
                <span>{t('info-text-1-desktop')}</span>

                <h2
                  className={styles.infoTitle}>{t('info-title-2').toUpperCase()}</h2>
                <span>{t('info-text-2.1-desktop')}</span>
                <span>{t('info-text-2.2-desktop')}</span>
                <span>{t('info-text-2.3-desktop')}</span>
                <span>{t('info-text-2.4-desktop')}</span>
                <span>{t('info-text-2.5-desktop')}</span>
              </div>
              <div className={styles.column}>
                <h2
                  className={styles.infoTitle}>{t('info-title-3').toUpperCase()}</h2>
                <span>{t('info-text-3.1-desktop')}</span>
                <span>{t('info-text-3.2-desktop')}</span>
                <span>{t('info-text-3.3-desktop')}</span>
                <span>{t('info-text-3.4-desktop')}</span>
                <h2
                  className={styles.infoTitle}>{t('info-title-4').toUpperCase()}</h2>
                <span>{t('info-text-4.1-desktop')}</span>
                <span>{t('info-text-4.2-desktop')}</span>
                <span>{t('info-text-4.3-desktop')}</span>
                <span>{t('info-text-4.4-desktop')}</span>
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