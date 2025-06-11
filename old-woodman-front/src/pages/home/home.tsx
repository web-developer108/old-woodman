import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ColorButton } from '../../components/buttons/color-button/color-button.tsx';
import { ArrowBottomIcon } from '../../components/icons/arrow-bottom-icon/arrow-bottom-icon.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { WhatsappIcon } from '../../components/icons/whatsapp-icon/whatsapp-icon.tsx';
import { AppColors } from '../../styles.ts';
import styles from './home.module.scss'
import { TelegramIcon } from '../../components/icons/telegram-icon/telegram-icon.tsx';

const Home = () => {
  const { t } = usePageTranslate()
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
      </div>
    </ToolPageLayout>
  )
}
export default Home