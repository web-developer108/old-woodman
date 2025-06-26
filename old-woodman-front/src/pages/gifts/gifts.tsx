import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import styles from './gifts.module.scss'
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { RunningText } from '../../components/running-text/running-text.tsx';
import { SectionTabs } from '../../components/section-tabs/section-tabs.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';

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
        <div className={styles.giftsContent}>

        <Breadcrumbs current = {t('main-header')}/>
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
          <div>

          </div>
        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Gifts;