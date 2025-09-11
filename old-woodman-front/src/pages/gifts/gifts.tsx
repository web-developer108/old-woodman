import { lazy, Suspense, useEffect } from 'react';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import TextInfo from '../../components/text-info/text-info.tsx';
import { PictureHeader } from '../../components/picture-header/picture-header.tsx';
import gallery1 from '@assets/images/gifts/gallery-1.webp'
import gallery2 from '@assets/images/gifts/gallery-2.webp'
import gallery3 from '@assets/images/gifts/gallery-3.webp'
import gallery4 from '@assets/images/gifts/gallery-4.webp'
import gallery5 from '@assets/images/gifts/gallery-5.webp'
import bg from '@assets/images/home/bg-orange.webp';
import small from '@assets/images/home/gift-1.webp';
import big from '@assets/images/home/gift-2.webp';
import styles from './gifts.module.scss'

const galleryImages = [{
    src: gallery1,
    alt: 'Зеркало в деревянной раме в современном интерьере'
}, {
    src: gallery2,
    alt: 'Подставка под телефон из дуба ручная работа подарок мужчине'
}, {
    src: gallery3,
    alt: 'Подарок часы из дерева ручной работы'
}, {
    src: gallery4,
    alt: 'Подарок пепельница из массива дуба ручной работы'
}, {
    src: gallery5,
    alt: 'Подарок светильник из дерева ручной работы'
},];
const NavigationBlock = lazy(() => import('../../components/navigation-block/navigation-block'));
const Gallery = lazy(() => import('../../components/gallery/gallery'));
const TextInfo = lazy(() => import('../../components/text-info/text-info'));


const Gifts = () => {
    const {t} = usePageTranslate();

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = bg;
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);

        return () => {
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
        };
    }, []);


    return (<ToolPageLayout>
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
                <Suspense fallback={null}>
                    <Gallery images={galleryImages}/>
                </Suspense>
                <section className={styles.textInfo}>
                    <TextInfo/>
                </section>
                <section className={styles.navigation}>
                    <h2>{t('nav-title').toUpperCase()}</h2>
                    <Suspense fallback={null}>
                        <NavigationBlock
                            blocks={['doors', 'furniture', 'facades']}
                        />
                    </Suspense>
                </section>
            </div>
        </div>
    </ToolPageLayout>)
}
export default Gifts;