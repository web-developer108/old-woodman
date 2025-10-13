import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import { usePageTranslate } from '../../hooks/page-translate/page-translate';
import { useProductData} from "../../hooks/wp-data/wp-data.tsx";
import { PictureHeader } from '../../components/picture-header/picture-header';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { ResponsiveCard } from '../../components/responsive-card/responsive-card.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { SocialButtons } from '../../components/buttons/social-buttons/social-buttons.tsx';
import { ProductSlider } from '../../components/product-slider/product-slider.tsx';
import { Loader } from "../../components/loader/loader.tsx";
import Gallery from '../../components/gallery/gallery.tsx';
import NavigationBlock from '../../components/navigation-block/navigation-block.tsx';
import TextInfo from '../../components/text-info/text-info.tsx';
import { ColorButton } from "../../components/buttons/color-button/color-button.tsx";
import { ArrowBottomIcon } from "../../components/icons/arrow-bottom-icon/arrow-bottom-icon.tsx";
import gallery1 from '@assets/images/doors/gallery/gallery-1.webp';
import gallery2 from '@assets/images/doors/gallery/gallery-2.webp';
import gallery3 from '@assets/images/doors/gallery/gallery-3.webp';
import gallery4 from '@assets/images/doors/gallery/gallery-4.webp';
import bg from '@assets/images/home/bg-brown.webp';
import small from '@assets/images/home/door-1.webp';
import big from '@assets/images/home/door-2.webp';
import styles from './doors.module.scss'

const galleryImages = [
    {
        src: gallery1,
        alt: 'Столярный инструмент для изготовления двери деревянной в столярной мастерской'
    }, {
        src: gallery2,
        alt: 'Процесс производства двери деревянной из массива в столярной мастерской'
    }, {
        src: gallery3,
        alt: 'Столярный рубанок и стружка на верстаке в столярной мастерской'
    }, {
        src: gallery4,
        alt: 'Деревянные заготовки для производства двери деревянной на верстаке в столярной мастерской'
    },

];
const DoorsOverview = () => {
    const {t, i18n} = usePageTranslate();
    const lang = i18n.language as 'ru' | 'kk';
    const {getCollectionsByCategoryId} = useProductCatalog();
    const { isLoaded } = useProductData();
    const navigate = useNavigate();
    const [visibleCount, setVisibleCount] = useState(3);
    const collections = getCollectionsByCategoryId('doors');
    const visibleCollections = collections.slice(0, visibleCount);
    return (<ToolPageLayout>
        <div className={styles.mainContainer}>
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
            <section className={styles.pageContent}>
                <Breadcrumbs current={t('breadcrumbs.label')}/>
                <SectionTabs/>
                <div className={styles.socialButtons}>
                    <SocialButtons/>
                </div>
                {!isLoaded &&
                <Loader/>
                }
                {visibleCollections.map((collection) => {
                    const {
                        id,
                        heroImage,
                        heroAlt,
                        heroDescription,
                        title,
                        items = [],
                    } = collection;

                    return (
                        <React.Fragment key={id}>
                            <ResponsiveCard
                                image={heroImage ?? ''}
                                title={title[lang] ?? ''}
                                description={(heroDescription?.[lang]) ?? []}
                                comment={t('comment-text')}
                                alt={heroAlt ?? ''}
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
                    );
                })}

                {visibleCount < collections.length && (<div className={styles.loadMoreWrapper}>
                    <ColorButton
                        label={t('button-show-more.label')}
                        icon={<ArrowBottomIcon/>}
                        onClick={() => setVisibleCount(collections.length)}
                    />

                </div>)}
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
                <NavigationBlock isHome={false} blocks={['furniture', 'facades', 'gifts']}/>
            </section>
        </div>
    </ToolPageLayout>)
}

export default DoorsOverview