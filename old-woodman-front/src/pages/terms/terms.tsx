import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import styles from './terms.module.scss'

const Terms = () => {
  const { t } = usePageTranslate()
  return (
    <ToolPageLayout>
      <div className={styles.termsContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainHeader}>{t('main-header')}</h1>
        </div>
        <div className={styles.termsContent}>
          <Breadcrumbs current={t('terms')}/>
          <h2 className={styles.termsTitle}>{t('header').toUpperCase()}</h2>
          <div className={styles.container}>
            <div className={styles.terms}>
              <h3 className={styles.termsHeader}>{t('title.terms').toUpperCase()} </h3>
              <ul className={styles.checklist}>
                <li>{t('paragraph.terms-1')}</li>
                <li>{t('paragraph.terms-2')}</li>
                <li>{t('paragraph.terms-3')}</li>
                <li>{t('paragraph.terms-4')}</li>
                <li>{t('paragraph.terms-5')}</li>
              </ul>
            </div>
            <div className={styles.delivery}>
              <h3 className={styles.termsHeader}>{t('title.delivery').toUpperCase()}</h3>
            <p className={styles.paragraphDelivery}>{t('paragraph.delivery-1')}</p>
            <p className={styles.paragraphDelivery}>{t('paragraph.delivery-2')}</p>
            </div>
            <div className={styles.warranty}>
              <h3 className={styles.warrantyHeader}>{t('title.warranty').toUpperCase()}</h3>
            <p className={styles.paragraphWarranty}>{t('paragraph.warranty-1')}</p>
            <p className={styles.paragraphWarranty}>{t('paragraph.warranty-2')}</p>
            <p className={styles.paragraphWarranty}>{t('paragraph.warranty-3')}</p>
            </div>

          </div>

        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Terms