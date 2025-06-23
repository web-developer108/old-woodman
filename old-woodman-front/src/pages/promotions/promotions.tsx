import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import styles from '../promotions/promotions.module.scss';
import { FaceIcon } from '../../components/icons/face-icon/face-icon.tsx';

const Promotions = () => {
  const { t } = usePageTranslate()
  return (
    <ToolPageLayout>
      <div className={styles.promotionsContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainHeader}>{t('main-header')}</h1>
        </div>
        <div className={styles.promotionsContent}>
          <Breadcrumbs current={t('promotions')}/>
          <div className={styles.faceContainer}>
            <FaceIcon/>
            <h2 className={styles.title}>  {t('empty-header').toUpperCase()} </h2>
            <div className={styles.text} dangerouslySetInnerHTML={{ __html: t('empty-label')}}/>
          </div>

        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Promotions