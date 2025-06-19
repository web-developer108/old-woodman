import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ColorButton } from '../../components/buttons/color-button/color-button.tsx';
import { ArrowBottomIcon } from '../../components/icons/arrow-bottom-icon/arrow-bottom-icon.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { WhatsappIcon } from '../../components/icons/whatsapp-icon/whatsapp-icon.tsx';
import { TelegramIcon } from '../../components/icons/telegram-icon/telegram-icon.tsx';
import useDevice from '../../hooks/device/use-device.ts';
import { ArrowRightIcon } from '../../components/icons/arrow-right-icon/arrow-right-icon.tsx';
import { AppColors } from '../../styles.ts';
import { ArrowTopRightIcon } from '../../components/icons/arrow-top-right-icon/arrow-top-right-icon.tsx';
import { MarkLeafIcon } from '../../components/icons/mark-leaf-icon/mark-leaf-icon.tsx';
import { MarkedInfo } from '../../components/marked-info/marked-info.tsx';
import { MarkSquareIcon } from '../../components/icons/mark-square-icon/mark-square-icon.tsx';
import { MarkCheckIcon } from '../../components/icons/mark-check-icon/mark-check-icon.tsx';
import gallery1 from '@assets/images/home/gallery1.jpg'
import gallery2 from '@assets/images/home/gallery2.jpg'
import gallery3 from '@assets/images/home/gallery3.jpg'
import gallery4 from '@assets/images/home/gallery4.jpg'
import gallery5 from '@assets/images/home/gallery5.jpg'
import styles from './home.module.scss'
import { SocialPanel } from '../../components/social-panel/social-panel.tsx';
import { TextInfo } from '../../components/text-info/text-info.tsx';
import { Accordion } from '../../components/accordion/accordion.tsx';
import { useModal } from '../../hooks/modal/use-modal.ts';
import { Contacts } from '../../components/modal-windows/contacts/contacts.tsx';

const Home = () => {
  const { t } = usePageTranslate();
  const { isDesktop } = useDevice();
  const navigate = useNavigate();
  const { showModal } = useModal();
  const navigationRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
  const contactInfo = (
    <>
      <span>{t('info-line1')}</span>
      <span>{t('info-line2')}</span>
      <span>{t('info-line3')}</span>
    </>
  );
  const galleryImages = [
    { src: gallery1, alt: 'Lamp' },
    { src: gallery2, alt: 'Door and sofa' },
    { src: gallery3, alt: 'Sofa' },
    { src: gallery4, alt: 'Door' },
    { src: gallery5, alt: 'Interior' },
    { src: gallery2, alt: 'Door and sofa' },
    { src: gallery3, alt: 'Sofa' },
    { src: gallery4, alt: 'Door' },
    { src: gallery5, alt: 'Interior' },
  ];

  return (
    <ToolPageLayout>
      <div className={styles.homePageContainer}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{(t('hero.title')).toUpperCase()}</h1>
            <div className={styles.description}>{t('hero.description')}</div>
            <div className={styles.buttonWrapper}>
              <ColorButton label={t('hero.button')}
                           icon={<ArrowBottomIcon/>}
                           onClick={() => {
                             navigationRef.current?.scrollIntoView({ behavior: 'smooth' });
                           }}/>
            </div>
          </div>
          <div className={styles.circleButtons}>
            <a
              href="https://wa.me/77081826004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <CircleButton bgColor={AppColors.button.green} icon={<WhatsappIcon color={AppColors.text.light}/>}/>
            </a>
            <a
              href="https://wa.me/77081826004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <CircleButton bgColor={AppColors.button.blue} icon={

                <TelegramIcon
                  arrowColor={AppColors.button.blue}
                  backgroundColor={AppColors.text.light}/>}/>
            </a>
          </div>
        </section>
        <div className={styles.contactInformationDesktop}>
          {contactInfo}
        </div>
        <div className={styles.contactInformationMobile}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeContent}>
              {contactInfo}
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
              {contactInfo}
            </div>
          </div>
        </div>
        <section className={styles.offer}>
          <h2>{t(isDesktop ? 'article-title' : 'article-title-mobile').toUpperCase()}</h2>
          <div className={styles.features}>
            <ul className={styles.checklist}>
              <li> {t(isDesktop ? 'article-text1' : 'article-text1-mobile')}</li>
              <li> {t(isDesktop ? 'article-text2' : 'article-text2-mobile')}</li>
              <li> {t(isDesktop ? 'article-text3' : 'article-text3-mobile')}</li>
            </ul>
            <ul className={styles.checklist}>
              <li> {t(isDesktop ? 'article-text4' : 'article-text4-mobile')}</li>
              <li> {t(isDesktop ? 'article-text5' : 'article-text5-mobile')}</li>
              <li> {t(isDesktop ? 'article-text6' : 'article-text6-mobile')}</li>
              {!isDesktop && <li> {t('article-text7-mobile')}</li>}
            </ul>
          </div>
        </section>
        <section ref={navigationRef} className={styles.navigation}>
          <div className={styles.backgroundBrown}>
            <div className={styles.bgContentWrapper}>
              <h3>{t('background-title1').toUpperCase()}</h3>
              <div>{t('background-description1')}</div>
            </div>
            <div className={styles.buttonContainer}>
              <CircleButton icon={<ArrowRightIcon/>} bgColor={AppColors.background.circleButton40}
                            onClick={() => {
                              navigate('/doors');
                            }}/>
            </div>
          </div>
          <div className={styles.backgroundBlue}>
            <div className={styles.bgContentWrapper}>
              <h3>{t('background-title2').toUpperCase()}</h3>
              <div>{t('background-description2')}</div>
            </div>
            <div className={styles.buttonContainer}>
              <CircleButton icon={<ArrowRightIcon/>} bgColor={AppColors.background.circleButton40}
                            onClick={() => navigate('/furniture')}/>
            </div>
          </div>
          <div className={styles.backgroundYellow}>
            <div className={styles.bgContentWrapperLast}>
              <h3>{t('background-title3').toUpperCase()}</h3>
              <div>{t('background-description3')}</div>
            </div>
            <div className={styles.buttonContainer}>
              <CircleButton icon={<ArrowRightIcon/>} bgColor={AppColors.background.circleButton40}
                            onClick={() => navigate('/facades')}/>
            </div>
          </div>
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
                onClick={() => showModal(<Contacts/>)}
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

          <SimpleBar className={styles.galleryWrapper} autoHide={false}>
            <div className={styles.galleryTrack}>
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={styles.galleryImage}
                />
              ))}
            </div>
          </SimpleBar>

          <h3 className={styles.social}>{t('gallery-social').toUpperCase()}</h3>
          <SocialPanel/>
        </section>
        <section className={styles.textInfo}>
          <TextInfo/>
        </section>
        <section id="faq" className={styles.questions}>
          <Accordion/>
        </section>

      </div>
    </ToolPageLayout>
  )
}
export default Home