import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import Gallery from '../../components/gallery/gallery.tsx';
import TextInfo from '../../components/text-info/text-info.tsx';
import NavigationBlock from '../../components/navigation-block/navigation-block.tsx';
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
import { MarkedInfo } from "../../components/marked-info/marked-info.tsx";
import { MarkSquareIcon } from "../../components/icons/mark-square-icon/mark-square-icon.tsx";
import { MarkFacadesT } from "../../components/icons/mark-facades-t/mark-facades-t.tsx";
import { MarkFacadesDoor } from "../../components/icons/mark-facades-door/mark-facades-door.tsx";

const Facades = () => {
    const {t} = usePageTranslate();
    const galleryImages = [{
        src: gallery1,
        alt: 'Деревянные стеновые панели для кафе в Алматы'
    }, {
        src: gallery2,
        alt: 'Деревянные стеновые панели с готической резьбой и принтом '
    }, {
        src: gallery3,
        alt: 'Светлые деревянные мебельные фасады из массива в столярном цеху в Алматы'
    }, {
        src: gallery4,
        alt: 'Деревянные стеновые панели с готической резьбой в интерьере кафе в Алматы'
    }, {
        src: gallery5,
        alt: 'Тёмные деревянные мебельные фасады из массива в столярном цеху в Алматы'
    },];

    return (<ToolPageLayout>
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

                    <div className={styles.columnFirst}>

                        <MarkedInfo
                            icon={<MarkSquareIcon/>}
                            title={t('info-title-1-desktop').toUpperCase()}
                        >
                            {<div>{t('info-text-1-desktop')}</div>}
                        </MarkedInfo>
                        <MarkedInfo
                            icon={<MarkFacadesT/>}
                            title={t('info-title-2').toUpperCase()}
                        >
                            {<>
                                <div>{t('info-text-2.1-desktop')}</div>
                                <div>{t('info-text-2.2-desktop')}</div>
                                <div>{t('info-text-2.3-desktop')}</div>
                                <div>{t('info-text-2.4-desktop')}</div>
                                <div>{t('info-text-2.5-desktop')}</div>
                            </>}
                        </MarkedInfo>

                    </div>
                    <div className={styles.columnSecond}>
                        <MarkedInfo
                            icon={<MarkFacadesDoor/>}
                            title={t('info-title-3').toUpperCase()}
                        >
                            {<>
                                <div>{t('info-text-3.1-desktop')}</div>
                                <div>{t('info-text-3.2-desktop')}</div>
                                <div>{t('info-text-3.3-desktop')}</div>
                                <div>{t('info-text-3.4-desktop')}</div>

                            </>}
                        </MarkedInfo>
                        <MarkedInfo
                            icon={<MarkFacadesDoor/>}
                            title={t('info-title-4').toUpperCase()}
                        >
                            {<>
                                <div>{t('info-text-4.1-desktop')}</div>
                                <div>{t('info-text-4.2-desktop')}</div>
                                <div>{t('info-text-4.3-desktop')}</div>
                                <div>{t('info-text-4.4-desktop')}</div>

                            </>}
                        </MarkedInfo>
                    </div>

                </section>
                <Gallery images={galleryImages}/>
                <section className={styles.textInfo}>
                    <TextInfo/>
                </section>
                <section className={styles.navigation}>
                    <h2>{t('nav-title').toUpperCase()}</h2>
                    <NavigationBlock blocks={['doors', 'furniture', 'gifts']}/>
                </section>
            </div>
        </div>
    </ToolPageLayout>)
}
export default Facades;