import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import { PictureHeader } from '../../components/picture-header/picture-header.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { SocialButtons } from '../../components/buttons/social-buttons/social-buttons.tsx';
import { ResponsiveCard } from '../../components/responsive-card/responsive-card.tsx';
import { CardsPreview } from '../../components/cards-preview/cards-preview.tsx';
import { Gallery } from '../../components/gallery/gallery.tsx';
import { getFurnitureDescriptionLines } from '../../utils/get-description-lines.ts';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { NavigationBlock } from '../../components/navigation-block/navigation-block.tsx';
import heroImageConsoles from '@assets/images/furniture/consoles-hero.webp';
import heroImageWardrobes from '@assets/images/furniture/wardrobes-hero.webp';
import heroImageBeds from '@assets/images/furniture/beds-hero.webp';
import heroImageChairs from '@assets/images/furniture/chairs-hero.webp';
import gallery1 from '@assets/images/furniture/gallery/gallery-1.webp';
import gallery2 from '@assets/images/furniture/gallery/gallery-2.webp';
import gallery3 from '@assets/images/furniture/gallery/gallery-3.webp';
import gallery4 from '@assets/images/furniture/gallery/gallery-4.webp';
import bg from '@assets/images/home/bg-blue.webp';
import small from '@assets/images/home/furniture-2.webp';
import big from '@assets/images/home/furniture-1.webp';

import styles from '../doors/doors.module.scss';

const furnitureCollections = [
  {
    id: 'consoles',
    image: heroImageConsoles,
    alt: 'Деревянная подвесная консоль в интерьере с постером Медео в Алматы'
  },
  {
    id: 'wardrobes',
    image: heroImageWardrobes,
    alt: 'Шкаф дубовый в современном интерьере с фасадами с рельефной филёнкой'
  },
  { id: 'beds', image: heroImageBeds, alt: 'Деревянная двуспальная кровать в современной интерьере' },
  { id: 'chairs', image: heroImageChairs, alt: 'Деревянное кресло в стиле ретро в  современном интерьере' },

];
const galleryImages = [
  { src: gallery1, alt: 'Деревянная тумбочка на высоких ножках в стиле минимализм в классическом интерьере' },
  { src: gallery2, alt: 'Деревянная подвесная консоль из массива в интерьере с постером Медео в Алматы' },
  { src: gallery3, alt: 'Деревянная консоль в стиле Прованс с лампой и книгой' },
  { src: gallery4, alt: 'Винтажное новое кресло из массива с буковыми подлокотниками бирюзового цвета для гостиной' },

];
const FurnitureOverview: React.FC = () => {
  const { t } = usePageTranslate();
  const navigate = useNavigate();
  const { getCollectionById } = useProductCatalog();

  return (
    <ToolPageLayout>
      <div className={styles.mainContainer}>
        <PictureHeader
          title={t('main-header')}
          label={t('main-header.label')}
          imageBg={bg}
          imageSmall={{
            src: small,
            alt: 'Деревянная консоль с винтажной окраской, на голубом фоне'
          }}
          imageBig={{
            src: big,
            alt: 'Книжная полка из бука, двойная, на голубом фоне'
          }}
          reverseImages = {true}
        />
        <RunningText/>
        <section className={styles.pageContent}>
          <Breadcrumbs current={t('breadcrumbs.label')}/>
          <SectionTabs/>
          <div className={styles.socialButtons}>
            <SocialButtons/>
          </div>


          {furnitureCollections.map(({ id, image, alt }) => {
            const collection = getCollectionById(id);
            const items = collection?.items || [];
            const handleCardClick = (productId: string) => {
              navigate(`/furniture/${id}/${productId}`);
            };
            return (
            <React.Fragment key={id}>
              <ResponsiveCard
                image={image}
                title={t(`title-${id}`)}
                description={getFurnitureDescriptionLines(id, t)}
                comment={t(`comment-text-${id}`)}
                alt={alt}
              />
              <div className={styles.previewWrap}>
                <CardsPreview
                  items={items}
                  handleCardClick={handleCardClick}
                />
              </div>
            </React.Fragment>
          );
          })}
        </section>
        <section className={styles.article}>
          <h2 className={`${styles.articleTitle} ${styles.noLabel}`}>{t('article-header').toUpperCase()}</h2>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>{t('article-title-1').toUpperCase()}</h3>
              <span className={styles.columnText}>{t('article-title-1.label')}</span>
            </div>
            <div className={styles.column}>
              <span className={styles.columnText}>{t('article-title-2.label')}</span>
            </div>
          </div>
          <div className={styles.gallery}>
            <Gallery images={galleryImages} layout='complex'/>
          </div>
          <h2 className={styles.articleTitle}>{t('article2-header').toUpperCase()}</h2>
          <div className={styles.descriptionFurnitureTop}> {t('article2-description-1')}</div>
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
          <div className={styles.descriptionFurnitureBottom}> {t('article2-description-2')}</div>
          <div className={styles.descriptionFurnitureBottom}> {t('article2-description-3')}</div>
          <div className={styles.descriptionFurnitureBottom}> {t('article2-description-4')}</div>
        </section>
        <section className={styles.textInfo}>
          <TextInfo/>
        </section>
        <section className={styles.navigation}>
          <h2>{t('nav-title').toUpperCase()}</h2>
          <NavigationBlock isHome={false} blocks={['doors', 'facades', 'gifts']}/>
        </section>
      </div>
    </ToolPageLayout>
  )
}

export default FurnitureOverview;
