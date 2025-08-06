import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import { usePageTranslate } from '../../hooks/page-translate/page-translate';
import { PictureHeader } from '../../components/picture-header/picture-header';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { ResponsiveCard } from '../../components/responsive-card/responsive-card.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { SocialButtons } from '../../components/buttons/social-buttons/social-buttons.tsx';
import { ProductSlider } from '../../components/product-slider/product-slider.tsx';
import { Gallery } from '../../components/gallery/gallery.tsx';
import { NavigationBlock } from '../../components/navigation-block/navigation-block.tsx';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import heroImageClassica from '@assets/images/doors/classica/classica-hero-wide.webp';
import heroImageLoft from '@assets/images/doors/loft/loft-hero.webp';
import heroImageDeco from '@assets/images/doors/deco/deco-hero.webp';
import heroImageCabinet from '@assets/images/doors/cabinet/cabinet-hero.webp';
import heroImageRustic from '@assets/images/doors/rustic/rustic-hero.webp';
import heroImageExclusive from '@assets/images/doors/exclusive/exclusive-hero.webp';
import heroImageBalcony from '@assets/images/doors/balcony/balcony-hero.webp';
import gallery1 from '@assets/images/doors/gallery/gallery-1.webp';
import gallery2 from '@assets/images/doors/gallery/gallery-2.webp';
import gallery3 from '@assets/images/doors/gallery/gallery-3.webp';
import gallery4 from '@assets/images/doors/gallery/gallery-4.webp';
import bg from '@assets/images/home/bg-brown.webp';
import small from '@assets/images/home/door-1.webp';
import big from '@assets/images/home/door-2.webp';
import styles from './doors.module.scss'

const doorCollections = [
  {
    id: 'classica',
    image: heroImageClassica,
    alt: 'Белая деревянная дверь со стеклом в интерьере кухни, деревянный кухонный гарнитур на заказ в Алматы'
  },
  { id: 'loft', image: heroImageLoft, alt: 'Межкомнатная двойная деревянная дверь в интерьере в стиле LOFT' },
  {
    id: 'deco',
    image: heroImageDeco,
    alt: 'Премиальная межкомнатная  дубовая деревянная дверь из массива в интерьере английский кабинет'
  },
  {
    id: 'cabinet',
    image: heroImageCabinet,
    alt: 'Премиальная межкомнатная  дубовая деревянная дверь из массива в интерьере английский кабинет'
  },
  { id: 'rustic', image: heroImageRustic, alt: 'Деревянная дверь в этническом стиле из досок в каменной стене' },
  {
    id: 'exclusive',
    image: heroImageExclusive,
    alt: 'Эксклюзивная деревянная дверь с открыванием "книжка" в интерьере в стиле шато'
  },
  { id: 'balcony', image: heroImageBalcony, alt: 'Деревянная балконная дверь на фасаде здания' },
];
const galleryImages = [
  { src: gallery1, alt: 'Эксклюзивная деревянная дверь в стиле шато в интерьере загородного отеля' },
  { src: gallery2, alt: 'Доски' },
  { src: gallery3, alt: 'Инструмент' },
  { src: gallery4, alt: 'Мастерская' },

];
const DoorsOverview = () => {
  const { t } = usePageTranslate();
  const { getCollectionById } = useProductCatalog();
  const navigate = useNavigate();

  return (
    <ToolPageLayout>
      <div className={styles.doorsContainer}>
        <PictureHeader
          title={t('main-header')}
          label={t('main-header.label')}
          imageBg={bg}
          imageSmall={{
            src: small,
            alt: 'Деревянная дверь со стеклопакетом на коричневом фоне'
          }}
          imageBig={{
            src: big,
            alt: 'Белая классическа дверь с наличником на коричневом фоне'
          }}
        />
        <RunningText/>
        <section className={styles.doorsContent}>
          <Breadcrumbs current={t('breadcrumbs.label')}/>
          <SectionTabs/>
          <div className={styles.socialButtons}>
            <SocialButtons/>
          </div>

          {doorCollections.map(({ id, image, alt }) => {
              const collection = getCollectionById(id);
              const items = collection?.items || [];
              return (
                <React.Fragment key={id}>
                  <ResponsiveCard
                    image={image}
                    title={t(`title-${id}`)}
                    description={t(`description-${id}`)}
                    comment={t('comment-text')}
                    alt={alt}
                  />
                  <div className={styles.previewWrap}>
                    <ProductSlider
                      title={t('preview-title')}
                      items={items}
                      handleCardClick={(productId) => {
                        navigate(`/doors/${id}/${productId}`);
                      }}
                    />
                  </div>
                </React.Fragment>
              )
            }
          )}
        </section>
        <section className={styles.article}>
          <h2 className={styles.articleTitle}>{t('article-header').toUpperCase()}</h2>
          <span className={styles.articleLabel}>{t('article-header.label')} </span>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>{t('article-title-1').toUpperCase()}</h3>
              <span className={styles.columnText}>{t('article-title-1.label')}</span>
              <h3 className={styles.columnTitle}>{t('article-title-2').toUpperCase()}</h3>
              <span className={styles.columnText}>{t('article-title-2.label')}</span>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>{t('article-title-3').toUpperCase()}</h3>
              <span className={styles.columnText}>{t('article-title-3.label-1')}</span>
              <span className={styles.columnTextLast}>{t('article-title-3.label-2')}</span>
            </div>
          </div>
          <div className={styles.gallery}>
            <Gallery images={galleryImages} layout='complex'/>
          </div>
          <h2 className={styles.articleTitle}>{t('article2-header').toUpperCase()}</h2>
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
          <div className={styles.description}> {t('article2-description')}</div>
        </section>
        <section className={styles.textInfo}>
          <TextInfo/>
        </section>
        <section className={styles.navigation}>
          <h2>{t('nav-title').toUpperCase()}</h2>
          <NavigationBlock isHome={false} blocks={['furniture', 'facades']}/>
        </section>
      </div>
    </ToolPageLayout>
  )
}

export default DoorsOverview