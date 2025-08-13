import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { Gallery } from '../../components/gallery/gallery.tsx';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { NavigationBlock } from '../../components/navigation-block/navigation-block.tsx';
import { PictureHeader } from '../../components/picture-header/picture-header.tsx';
import gallery1 from '@assets/images/gifts/gallery-1.webp'
import gallery2 from '@assets/images/gifts/gallery-2.webp'
import gallery3 from '@assets/images/gifts/gallery-3.webp'
import gallery4 from '@assets/images/gifts/gallery-4.webp'
import bg from '@assets/images/home/bg-orange.webp';
import small from '@assets/images/home/gift-1.webp';
import big from '@assets/images/home/gift-2.webp';
import styles from './gifts.module.scss'

const galleryImages = [
  { src: gallery1, alt: 'Зеркало в деревянной раме в современном интерьере' },
  { src: gallery2, alt: 'Подарок светильник из дерева ручной работы' },
  { src: gallery3, alt: 'Подарок часы из дерева ручной работы' },
  { src: gallery4, alt: 'Подарок пепельница из массива дуба ручной работы' },
];

const Gifts = () => {
  const { t } = usePageTranslate();

  return (
    <ToolPageLayout>
      <div className={styles.giftsContainer}>
        <PictureHeader
          title={t('main-header')}
          label={t('main-header.label')}
          imageBg={bg}
          imageSmall={{
            src: small,
            alt: 'Деревянный светильник эксклюзивный подарок алматы'
          }}
          imageBig={{
            src: big,
            alt: 'Пепельница из дуба эксклюзивный подарок алматы'
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
          <Gallery images={galleryImages}/>
          <section className={styles.textInfo}>
            <TextInfo/>
          </section>
          <section className={styles.navigation}>
            <h2>{t('nav-title').toUpperCase()}</h2>
            <NavigationBlock
            blocks={['doors', 'furniture', 'facades']}
            />
          </section>
        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Gifts;