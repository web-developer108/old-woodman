import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { FaceIcon } from '../../components/icons/face-icon/face-icon.tsx';
import styles from './cart.module.scss'

const Contacts = () => {
  const { t } = usePageTranslate()
  return (
    <ToolPageLayout isFullFooter={false}>
      <div className={styles.cartContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainHeader}>{t('main-header')}</h1>
          <div className={styles.label}>{t('main-header.label')}</div>
        </div>
        <div className={styles.cartContent}>
          <Breadcrumbs current={t('main-header')}/>
          <div className={styles.faceContainer}>
            <FaceIcon/>
            <h2 className={styles.title}>  {t('empty-header').toUpperCase()} </h2>
            <div className={styles.text}>   {t('empty-label')}</div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  )
}

export default Contacts;