import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import styles from './privacy-policy.module.scss'
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';

const Privacy = () => {
  const { t } = usePageTranslate()
  return (
    <ToolPageLayout>
      <div className={styles.policyContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainHeader}>{t('main-header')}</h1>
        </div>
        <div className={styles.policyContent}>
          <Breadcrumbs current={t('policy')}/>

          <ol className="hierarchical-list">
            <li>Основной раздел 1
              <ol>
                <li>Подраздел 1.1</li>
                <li>Подраздел 1.2</li>
              </ol>
            </li>
            <li>Основной раздел 2
              <ol>
                <li>Подраздел 2.1</li>
                <li>Подраздел 2.2</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Privacy