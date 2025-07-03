import bgLarge from '@assets/images/doors/bg-large.webp';
import bgMedium from '@assets/images/doors/bg-medium.webp';
import bgSmall from '@assets/images/doors/bg-small.webp';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import styles from './doors.module.scss'

const DoorsOverview = () => {
  const { t } = usePageTranslate();
console.log('DoorsOverview')
  return (
    <ToolPageLayout>
      <div className={styles.doorsContainer}>
        <div className={styles.imageContainer}>

          <picture className={styles.picture}>
            <source srcSet={bgLarge} media="(min-width: 1142px)"/>
            <source srcSet={bgMedium} media="(min-width: 811px)"/>
            <source srcSet={bgSmall} media="(max-width: 810px)"/>
            <img
              className={styles.backgroundImage}
              src={bgLarge}
              alt="Фон заголовка"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
          <div className={styles.imageTitleContainer}>
            <h1
              className={styles.imageTitle}

            >{t('main-header').toUpperCase()} </h1>
            <div className={styles.imageLabel}>{t('main-header.label')}</div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  )
}

export default DoorsOverview