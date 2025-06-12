import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ColorButton } from '../../components/buttons/color-button/color-button.tsx';
import { ArrowBottomIcon } from '../../components/icons/arrow-bottom-icon/arrow-bottom-icon.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { WhatsappIcon } from '../../components/icons/whatsapp-icon/whatsapp-icon.tsx';
import { AppColors } from '../../styles.ts';
import styles from './home.module.scss'
import { TelegramIcon } from '../../components/icons/telegram-icon/telegram-icon.tsx';
import { useDevice } from '../../hooks/device/device.tsx';

const Home = () => {
  const { t } = usePageTranslate();
  const { isDesktop } = useDevice();

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
              <ColorButton label={t('hero.button')} icon={<ArrowBottomIcon/>}/>
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

      </div>
    </ToolPageLayout>
  )
}
export default Home