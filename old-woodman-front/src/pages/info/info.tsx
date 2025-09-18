import { useEffect, useRef } from 'react';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { useGalleryFromWp} from '../../hooks/gallery-from-wp/gallery-from-wp.ts'
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { InfoIcon } from '../../components/icons/info-icon/info-icon.tsx';
import Gallery from "../../components/gallery/gallery.tsx";
import InfoButton from "../../components/buttons/info-button/info-button.tsx";
import doorWidth from '@assets/images/info/door-width.svg'
import doorHeight from '@assets/images/info/door-height.svg'
import doorDepth from '@assets/images/info/door-depth.svg'
//import gallery1d from '@assets/images/info/gallery/gallery-d-1.webp'
//import gallery2d from '@assets/images/info/gallery/gallery-d-2.webp'
//import gallery3d from '@assets/images/info/gallery/gallery-d-3.webp'
//import gallery4d from '@assets/images/info/gallery/gallery-d-4.webp'
//import gallery5d from '@assets/images/info/gallery/gallery-d-5.webp'
import gallery1f from '@assets/images/info/gallery/gallery-f-1.webp'
import gallery2f from '@assets/images/info/gallery/gallery-f-2.webp'
import gallery3f from '@assets/images/info/gallery/gallery-f-3.webp'
import gallery4f from '@assets/images/info/gallery/gallery-f-4.webp'
import gallery5f from '@assets/images/info/gallery/gallery-f-5.webp'
import styles from '../info/info.module.scss';

/*
const galleryDoorsImages = [{
    src: gallery1d,
    alt: 'Фрагмент деревянной двери из массива с декоративными резными элементами демонстрирует преимущества дверей из массива'
}, {
    src: gallery2d,
    alt: 'Изготовление двери в столярном цеху, элемент двери из массива  на верстаке демонстрирует преимущества дверей из массива'
}, {
    src: gallery3d,
    alt: 'Мастер столяр в столярной мастерской работает стамеской по классической технологии'
}, {
    src: gallery4d,
    alt: 'Фрагмент в разрезе настоящей деревянной двери из массива в столярной мастерской '
}, {
    src: gallery5d,
    alt: 'Фрагмент деревянной двери из массива в столярной мастерской демонстрирует как устроена настоящая деревянная дверь'
},

];
*/

const galleryFurnitureImages = [{
    src: gallery1f,
    alt: 'Красивая деревянная тумбочка из массива с натуральной фактурой и рисунком натуральной древесины демонстрирует преимущества деревянной мебели'
}, {
    src: gallery2f,
    alt: 'Руки мастера столяра размечают древесину для изготовления деревянной мебели в столярной мастерской'
}, {
    src: gallery3f,
    alt: 'Деревянный дубовый стол, вид сверху на красивую фактуру и рисунок дерева для демонстрации красоты мебели из массива'
}, {
    src: gallery4f,
    alt: 'Фактура и рисунок древесины на деревянном столе для демонстрации преимуществ мебели из натурального массива'
}, {
    src: gallery5f,
    alt: 'Руки мастера столяра настраивают пилу для изготовления деревянной мебели в столярной мастерской'
},

];
const Info = () => {
    const {t} = usePageTranslate();
    const instructionRef = useRef<HTMLHeadingElement>(null);
    const doorsRef = useRef<HTMLHeadingElement>(null);
    const furnitureRef = useRef<HTMLHeadingElement>(null);

    const galleryDoorsImages = useGalleryFromWp('gallery-info-doors');

    useEffect(() => {
        if (location.pathname === '/info' && location.hash === '#instructions') {

            instructionRef.current?.scrollIntoView({behavior: 'smooth'});
        }
        if (location.pathname.startsWith('/info') && location.hash === '#doors') {
            doorsRef.current?.scrollIntoView({behavior: 'smooth'});
        }
        if (location.pathname.startsWith('/info') && location.hash === '#furniture') {
            furnitureRef.current?.scrollIntoView({behavior: 'smooth'});
        }

    }, []);


    return (<ToolPageLayout>
        <div className={styles.infoContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.mainHeader}
                        dangerouslySetInnerHTML={{__html: t('main-header').toUpperCase()}}/>
                    <div className={styles.iconWrapper}>
                        <InfoIcon/>
                    </div>
                </div>

            </div>
            <div className={styles.infoContent}>
                <Breadcrumbs current={t('info')}/>
                <h2 id='doors' ref={doorsRef} className={styles.header}>{t('header-1').toUpperCase()}</h2>
                <section className={styles.section}>
                    <h3>{t('subtitle-1').toUpperCase()}</h3>
                    <span>{t('text-1.1')}</span>
                    <span>{t('text-1.2')}</span>
                    <span>{t('text-1.3')}</span>
                </section>
                <section className={styles.section}>
                    <h3>{t('subtitle-2').toUpperCase()}</h3>
                    <span>{t('text-2.1')}</span>
                    <span>{t('text-2.2')}</span>
                    <span>{t('text-2.3')}</span>
                    <span>{t('text-2.4')}</span>
                </section>
                <section className={styles.list}>
                    <h3>{t('subtitle-3').toUpperCase()}</h3>
                    <ol>
                        <li><span className={styles.bold}>{t('text-3.1.1')}</span> {t('text-3.1.2')}</li>
                        <li><span className={styles.bold}>{t('text-3.2.1')}</span> {t('text-3.2.2')}</li>
                        <li><span className={styles.bold}>{t('text-3.3.1')}</span> {t('text-3.3.2')}</li>
                        <li><span className={styles.bold}>{t('text-3.4.1')}</span> {t('text-3.4.2')}</li>
                        <li><span className={styles.bold}>{t('text-3.5.1')}</span> {t('text-3.5.2')}</li>

                    </ol>
                </section>

                <Gallery
                    images={galleryDoorsImages}
                />


                <InfoButton
                    title={t('subtitle-4').toUpperCase()}
                    label={t('text-4')}
                />

                <h2 id='furniture' ref={furnitureRef} className={styles.header}>{t('header-2f').toUpperCase()}</h2>
                <section className={styles.section}>
                    <h3>{t('subtitle-2f').toUpperCase()}</h3>
                    <span>{t('text-2f.1')}</span>
                    <span>{t('text-2f.2')}</span>
                    <span>{t('text-2f.3')}</span>
                </section>
                <section className={styles.section}>
                    <h3>{t('subtitle-3f').toUpperCase()}</h3>
                    <span>{t('text-3f.1')}</span>
                    <span>{t('text-3f.2')}</span>
                </section>
                <section className={styles.section}>
                    <h3>{t('subtitle-4f').toUpperCase()}</h3>
                    <span>{t('text-4f.1')}</span>
                    <span>{t('text-4f.2')}</span>
                    <span>{t('text-4f.3')}</span>
                </section>
                <Gallery
                    images={galleryFurnitureImages}
                />
                <InfoButton
                    title={t('subtitle-5').toUpperCase()}
                    label={t('text-5')}
                />
                <h2 id='instructions' ref={instructionRef}
                    className={styles.header}>{t('instruction').toUpperCase()}</h2>
                <section className={styles.section}>
                    <h3>{t('instruction-label-1').toUpperCase()}</h3>
                    <span>{t('instruction-text-1.1')}</span>
                    <span>{t('instruction-text-1.2')}</span>
                </section>
                <div className={styles.warning}>
            <span><b className={styles.block}>{t('instruction-warning')}</b>
                {t('instruction-warning-text-1')}</span>
                    <span className={styles.warningText}>{t('instruction-warning-text-2')}</span>
                    <span className={styles.block}>{t('instruction-warning-text-3')}</span>
                </div>
                <section className={styles.section}>
                    <h3>{t('instruction-label-2').toUpperCase()}</h3>
                    <span>{t('instruction-text-2')}</span>
                </section>
                <section className={styles.sectionImage}>
                    <div className={styles.instructionsWrap}>
                        <h3>{t('instruction-label-3').toUpperCase()}</h3>
                        <span>{t('instruction-text-3.1')}</span>
                        <span>{t('instruction-text-3.2')}</span>
                    </div>
                    <img className={styles.image} src={doorWidth} alt="Ширина проёма" loading="lazy"/>
                </section>
                <section className={styles.sectionImage}>
                    <div className={styles.instructionsWrap}>
                        <h3>{t('instruction-label-4').toUpperCase()}</h3>
                        <span>{t('instruction-text-4.1')}</span>
                        <span>{t('instruction-text-4.2')}</span>
                    </div>
                    <img className={styles.image} src={doorHeight} alt="Высота проёма" loading="lazy"/>
                </section>
                <section className={styles.sectionImage}>
                    <div className={styles.instructionsWrap}>
                        <h3>{t('instruction-label-5').toUpperCase()}</h3>
                        <span>{t('instruction-text-5.1')}</span>
                        <span>{t('instruction-text-5.2')}</span>
                        <span>{t('instruction-text-5.3')}</span>
                    </div>
                    <img className={styles.image} src={doorDepth} alt="Глубина проёма" loading="lazy"/>
                </section>
                <div className={styles.warning}>
            <span><b className={styles.block}>{t('instruction-warning')}</b>
                {t('instruction-warning-text-1')}</span>
                    <span className={styles.warningText}>{t('instruction-warning-text-2')}</span>
                    <span>{t('instruction-warning-text-3')}</span>
                </div>
                <InfoButton
                    title={t('subtitle-6').toUpperCase()}
                    label={t('text-5')}/>

            </div>

        </div>
    </ToolPageLayout>)
}
export default Info;