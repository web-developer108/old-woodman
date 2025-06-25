import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import styles from './gifts.module.scss'
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { RunningText } from '../../components/running-text/running-text.tsx';

const Gifts = () => {
  const { t } = usePageTranslate();
  return (
    <ToolPageLayout>
      <div className={styles.giftsContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageTitleContainer}>
            <h1 className={styles.imageTitle}>{t('main-header').toUpperCase()}</h1>
            <div className={styles.imageLabel}>{t('main-header.label')}</div>
          </div>
        </div>
        <RunningText/>
      </div>
    </ToolPageLayout>
  )
}
export default Gifts;