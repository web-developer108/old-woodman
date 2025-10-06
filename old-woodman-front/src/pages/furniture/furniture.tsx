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
import Gallery from '../../components/gallery/gallery.tsx';
import TextInfo from '../../components/text-info/text-info.tsx';
import NavigationBlock from '../../components/navigation-block/navigation-block.tsx';
import gallery1 from '@assets/images/furniture/gallery/gallery-1.webp';
import gallery2 from '@assets/images/furniture/gallery/gallery-2.webp';
import gallery3 from '@assets/images/furniture/gallery/gallery-3.webp';
import gallery4 from '@assets/images/furniture/gallery/gallery-4.webp';
import gallery5 from '@assets/images/furniture/gallery/gallery-5.webp';
import gallery6 from '@assets/images/furniture/gallery/gallery-6.webp';
import gallery7 from '@assets/images/furniture/gallery/gallery-7.webp';
import gallery8 from '@assets/images/furniture/gallery/gallery-8.webp';
import bg from '@assets/images/home/bg-blue.webp';
import small from '@assets/images/home/furniture-2.webp';
import big from '@assets/images/home/furniture-1.webp';
import styles from '../doors/doors.module.scss';

const galleryImages = [
    {
        src: gallery1,
        alt: 'Деревянная двуспальная кровать в современной интерьере'
    }, {
        src: gallery2,
        alt: 'Деревянная подвесная консоль из массива в интерьере с постером Медео в Алматы'
    }, {
        src: gallery3,
        alt: 'деревянная тумба консоль в ванную под рукомойник с керамической столешницей'
    }, {
        src: gallery4,
        alt: 'Деревянная вирина полка с остеклением для посуды в стиле нео классика, из массива сосны, для посуды'
    }, {
        src: gallery5,
        alt: 'Деревянный кофейный столик на высоких ножках'
    }, {
        src: gallery6,
        alt: 'Деревянная книжная полка из массива бука в стиле мид сенчури'
    }, {
        src: gallery7,
        alt: 'Деревянный шкаф для одежды для спальни или гостиной'
    }, {
        src: gallery8,
        alt: 'Винтажное новое кресло из массива с буковыми подлокотниками бирюзового цвета для гостиной'
    },

];
const FurnitureOverview: React.FC = () => {
    const {t, i18n} = usePageTranslate();
    const lang = i18n.language as 'ru' | 'kk';
    const navigate = useNavigate();
    const {getCollectionsByCategoryId} = useProductCatalog();

    const collections = getCollectionsByCategoryId('furniture');

    return (<ToolPageLayout>
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
                reverseImages={true}
            />
            <RunningText/>
            <section className={styles.pageContent}>
                <Breadcrumbs current={t('breadcrumbs.label')}/>
                <SectionTabs/>
                <div className={styles.socialButtons}>
                    <SocialButtons/>
                </div>

                {collections.map((collection) => {
                    const {id, heroImage, heroAlt, heroDescription, heroComment, title, items = []} = collection;
                    console.log(`[FurnitureOverview] collection: ${id}`, items);
                    return (
                        <React.Fragment key={id}>
                            <ResponsiveCard
                                image={heroImage ?? ''}
                                title={title[lang] ?? ''}
                                description={heroDescription?.[lang] ?? []}
                                comment={heroComment?.[lang] ?? ''}
                                alt={heroAlt ?? ''}
                            />
                            <div className={styles.previewWrap}>
                                <CardsPreview
                                    items={items}
                                    handleCardClick={(productId) => navigate(`/furniture/${id}/${productId}`)}
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
                    <div className={`${styles.column} ${styles.second}`}>
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
    </ToolPageLayout>)
}

export default FurnitureOverview;
