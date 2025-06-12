import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ColorButton } from '../../components/buttons/color-button/color-button.tsx';
import { ArrowBottomIcon } from '../../components/icons/arrow-bottom-icon/arrow-bottom-icon.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { WhatsappIcon } from '../../components/icons/whatsapp-icon/whatsapp-icon.tsx';
import { TelegramIcon } from '../../components/icons/telegram-icon/telegram-icon.tsx';
import { useDevice } from '../../hooks/device/device.tsx';
import { ArrowRightIcon } from '../../components/icons/arrow-right-icon/arrow-right-icon.tsx';
import { AppColors } from '../../styles.ts';
import styles from './home.module.scss'

const Home = () => {
  const { t } = usePageTranslate();
  const { isDesktop } = useDevice();
  const navigate = useNavigate();
  const navigationRef = useRef<HTMLElement | null>(null);

  const contactInfo = (
    <>
      <span>{t('info-line1')}</span>
      <span>{t('info-line2')}</span>
      <span>{t('info-line3')}</span>
    </>
  );

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
            <CircleButton bgColor={AppColors.button.green} icon={<WhatsappIcon color={AppColors.text.light}/>}/>
            <CircleButton bgColor={AppColors.button.blue} icon={
              <TelegramIcon
                arrowColor={AppColors.button.blue}
                backgroundColor={AppColors.text.light}/>}/>
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
                            onClick={() => {navigate('/doors'); /* window.scrollTo(0, 0);*/}}/>
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

      </div>
    </ToolPageLayout>
  )
}
export default Home