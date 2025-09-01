import {useEffect, useRef} from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import {usePageTranslate} from '../../hooks/page-translate/page-translate.ts';
import {useModal} from '../../hooks/modal/use-modal.ts';
import {ToolPageLayout} from '../../components/tool-page-layout/tool-page-layout.tsx';
import {ColorButton} from '../../components/buttons/color-button/color-button.tsx';
import {ArrowBottomIcon} from '../../components/icons/arrow-bottom-icon/arrow-bottom-icon.tsx';
import {ArrowTopRightIcon} from '../../components/icons/arrow-top-right-icon/arrow-top-right-icon.tsx';
import {MarkLeafIcon} from '../../components/icons/mark-leaf-icon/mark-leaf-icon.tsx';
import {MarkedInfo} from '../../components/marked-info/marked-info.tsx';
import {MarkSquareIcon} from '../../components/icons/mark-square-icon/mark-square-icon.tsx';
import {MarkCheckIcon} from '../../components/icons/mark-check-icon/mark-check-icon.tsx';
import {SocialPanel} from '../../components/social-panel/social-panel.tsx';
import {TextInfo} from '../../components/text-info/text-info.tsx';
import {Accordion} from '../../components/accordion/accordion.tsx';
import {ContactsModal} from '../../components/modal-windows/contacts-modal/contacts-modal.tsx';
import {RunningText} from '../../components/running-text/running-text';
import {Gallery} from '../../components/gallery/gallery';
import {NavigationBlock} from '../../components/navigation-block/navigation-block';
import {SocialButtons} from '../../components/buttons/social-buttons/social-buttons.tsx';
import gallery1 from '@assets/images/home/gallery1.webp';
import gallery2 from '@assets/images/home/gallery2.webp';
import gallery4 from '@assets/images/home/gallery4.webp';
import gallery3 from '@assets/images/home/gallery3.webp';
import gallery5 from '@assets/images/home/gallery5.webp';
import gallery6 from '@assets/images/home/gallery6.webp';
import gallery7 from '@assets/images/home/gallery7.webp';
import gallery8 from '@assets/images/home/gallery8.webp';
import gallery9 from '@assets/images/home/gallery9.webp';
import gallery10 from '@assets/images/home/gallery10.webp';
import gallery11 from '@assets/images/home/gallery11.webp';
import gallery12 from '@assets/images/home/gallery12.webp';
import gallery13 from '@assets/images/home/gallery13.webp';
import gallery14 from '@assets/images/home/gallery14.webp';
import gallery15 from '@assets/images/home/gallery15.webp';
//import hero1 from '@assets/images/home/hero-one.webp';
//import hero2 from '@assets/images/home/hero2.webp';
//import hero3 from '@assets/images/home/hero3.webp';
//import hero4 from '@assets/images/home/hero4.webp';
//import hero5 from '@assets/images/home/hero5.webp';
//import hero6 from '@assets/images/home/hero6.webp';
import heroOne from '@assets/images/home/hero-one.webp'
import styles from './home.module.scss'

const galleryImages = [
    {src: gallery1, alt: 'Деревянная тумбочка на высоких ножках в стиле минимализм в классическом интерьере'},
    {src: gallery2, alt: 'Белая двустворчатая деревянная дверь в интерьере гостиной'},
    {src: gallery4, alt: 'Элемент подлокотника кресла из бука на фоне бирюзовой обивки'},
    {src: gallery3, alt: 'Элемент деревянной двери со стеклопакетом для балкона '},
    {src: gallery5, alt: 'Дубовые шкафы с резьбой в интерьере'},
    {src: gallery6, alt: 'Набор мебели для террасы: барный стол и четыре табурета в интерьере в итальянском стиле'},
    {src: gallery7, alt: 'Низкая деревянная кровать  в японском стиле'},
    {src: gallery8, alt: 'Винтажное новое кресло из массива с буковыми подлокотниками бирюзового цвета для гостиной'},
    {src: gallery9, alt: 'Тумба под раковину рукомойник для саузла отеля или кафе на заказ'},
    {src: gallery10, alt: 'Подстолье деревянного стола из массива карагача с красивым рисунком и фактурой натурального дерева'},
    {src: gallery11, alt: 'Эксклюзивная деревянная дверь в стиле шато в интерьере загородного отеля'},
    {src: gallery12, alt: 'Деревяная классическая дверь из массива сосны в интерьере гостиной'},
    {src: gallery13, alt: 'Фрагмент деревянной рамы для зеркала'},
    {src: gallery14, alt: 'Барный табурет на четырёх ножках из массива листвнницы, ручная работа'},
    {src: gallery15, alt: 'Обеденный разброный стол из массива карагача в нтерьере современной кухни'},
];
/*const heroImages = [
  { src: hero1, alt: 'Деревянная тумбочка на высоких ножках в стиле минимализм в классическом интерьере' },
  { src: hero2, alt: 'Добавить alt' },
  { src: hero3, alt: 'Добавить alt' },
  { src: hero4, alt: 'Добавить alt' },
  { src: hero5, alt: 'Добавить alt' },
  { src: hero6, alt: 'Добавить alt' },

];*/

const Home = () => {
    const {t} = usePageTranslate();
    const {showModal} = useModal();
    const navigationRef = useRef<HTMLElement | null>(null);
    const faqRef = useRef<HTMLElement | null>(null);
    //const [currentIndex, setCurrentIndex] = useState(1);
    //const [transitionEnabled, setTransitionEnabled] = useState(true);
    /*  const extendedImages = [
        heroImages[heroImages.length - 1],
        ...heroImages,
        heroImages[0],
      ];*/

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#faq' && faqRef.current) {
            faqRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, []);
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroOne;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    /* useEffect(() => {
       const interval = setInterval(() => {
         setCurrentIndex(prev => prev + 1);
         setTransitionEnabled(true);
       }, 3000);
       return () => clearInterval(interval);
     }, []);*/

    /* const handleTransitionEnd = () => {
       if (currentIndex === extendedImages.length - 1) {
         setTransitionEnabled(false);
         setCurrentIndex(1);
       } else if (currentIndex === 0) {
         setTransitionEnabled(false);
         setCurrentIndex(heroImages.length);
       } else {
         setTransitionEnabled(true);
       }
     };
   */
    return (
        <ToolPageLayout>
            <div className={styles.homePageContainer}>
                <section className={styles.hero}>
                    {/* <div className={styles.imageWrapper}>
            <img src={overlay} className={styles.overlay} alt="Интерьер"/>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>{(t('hero.title')).toUpperCase()}</h1>
              <div className={styles.description}>{t('hero.description')}</div>
              <div className={styles.buttonWrapper}>
                <ColorButton
                  label={t('hero.button')}
                  icon={<ArrowBottomIcon/>}
                  onClick={() =>
                    navigationRef.current?.scrollIntoView({ behavior: 'smooth' })
                  }
                />
              </div>
            </div>
            <div className={styles.sliderTrackWrapper}>
              <div
                className={styles.sliderTrack}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: transitionEnabled ? 'transform 1s ease' : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedImages.map((src, index) => (
                  <img
                    key={index}
                    src={src.src}
                    className={styles.heroImage}
                    alt={src.alt}
                  />
                ))}
              </div>
            </div>
          </div>*/}
                    <div className={styles.imageWrapper}>
                        <img src={heroOne} className={styles.heroImage}
                             alt="Элемент деревянного мебельного фасада для классического платяного шкафа из дуба с готической резьбой"/>
                        <div className={styles.heroContent}>
                            <h1 className={styles.title}>{(t('hero.title')).toUpperCase()}</h1>
                            <div className={styles.description}>{t('hero.description')}</div>
                            <div className={styles.buttonWrapper}>
                                <ColorButton
                                    label={t('hero.button')}
                                    icon={<ArrowBottomIcon/>}
                                    onClick={() =>
                                        navigationRef.current?.scrollIntoView({behavior: 'smooth'})
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.circleButtons}>
                        <SocialButtons/>
                    </div>
                </section>
                <div className={styles.running}>
                    <RunningText/>
                </div>

                <section className={styles.offer}>
                    <h2>{t('article-title').toUpperCase()}</h2>
                    <div className={styles.features}>
                        <ul className={styles.checklist}>
                            <li> {t('article-text1')}</li>
                            <li> {t('article-text2')}</li>
                            <li> {t('article-text3')}</li>
                        </ul>
                        <ul className={styles.checklist}>
                            <li> {t('article-text4')}</li>
                            <li> {t('article-text5')}</li>
                            <li> {t('article-text6')}</li>

                        </ul>
                    </div>
                </section>
                <section ref={navigationRef} className={styles.navigation}>
                    <NavigationBlock isHome/>
                </section>
                <section className={styles.carpentry}>
                    <div className={styles.carpentryContainer}>
                        <h2 className={styles.carpentryTitle}>{t('carpentry-title').toUpperCase()} </h2>
                        <div className={styles.carpentryQuote}>
                            <span><i>{t('carpentry-italic')}</i></span>
                        </div>
                        <div className={styles.carpentryButton}>
                            <ColorButton
                                icon={<ArrowTopRightIcon/>}
                                label={t('carpentry-button')}
                                onClick={() => showModal(<ContactsModal/>)}
                            ></ColorButton>
                        </div>
                        <div className={styles.carpentryInfo1}>
                            <MarkedInfo icon={<MarkSquareIcon/>} title={t('carpentry-title1').toUpperCase()}>
                                {<>
                                    <div>{t('carpentry-text1.1')}</div>
                                    <div>{t('carpentry-text1.2')}</div>
                                    <div>{t('carpentry-text1.3')}</div>
                                </>
                                }
                            </MarkedInfo>
                        </div>
                        <div className={styles.carpentryInfo2}>
                            <MarkedInfo icon={<MarkCheckIcon/>} title={t('carpentry-title2').toUpperCase()}>
                                {
                                    <div>{t('carpentry-text2')}</div>
                                }
                            </MarkedInfo>
                        </div>
                        <div className={styles.carpentryInfo3}>
                            <MarkedInfo icon={<MarkLeafIcon/>} title={t('carpentry-title3').toUpperCase()}>
                                {
                                    <div>{t('carpentry-text3')}</div>
                                }
                            </MarkedInfo>
                        </div>

                    </div>
                </section>
                <section className={styles.gallery}>
                    <h2 className={styles.galleryTitle}>{t('gallery-title').toUpperCase()}</h2>
                    <div className={styles.galleryDescription}>{t('gallery-description')}</div>
                    <Gallery images={galleryImages} layout={'repeatingBlock'}/>
                    <h3 className={styles.social}>{t('gallery-social').toUpperCase()}</h3>
                    <SocialPanel/>
                </section>
                <section className={styles.textInfo}>
                    <TextInfo/>
                </section>
                <section ref={faqRef} id="faq" className={styles.questions}>
                    <Accordion/>
                </section>
            </div>
        </ToolPageLayout>
    )
}
export default Home