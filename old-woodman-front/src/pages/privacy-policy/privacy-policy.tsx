import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import styles from './privacy-policy.module.scss'

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

          <ol className={styles.hierarchicalList}>
            <li>{t('title-1').toUpperCase()}
              <div>{t('common-description')}</div>
              <ol>
                <li>{t('description-1.1')}</li>
                <li>{t('description-1.2')}</li>
              </ol>
            </li>
            <li>{t('title-2').toUpperCase()}
              <ol>
                <li>{t('description-2.1')}</li>
                <li>{t('description-2.2')}</li>
                <li>{t('description-2.3')}</li>
                <li>{t('description-2.4')}</li>
                <li>{t('description-2.5')}</li>
                <li>{t('description-2.6')}</li>
                <li>{t('description-2.7')}</li>
                <li>{t('description-2.8')}</li>
                <li>{t('description-2.9')}</li>
                <li>{t('description-2.10')}</li>
                <li>{t('description-2.11')}</li>
                <li>{t('description-2.12')}</li>
                <li>{t('description-2.13')}</li>
              </ol>
            </li>
            <li>{t('title-3').toUpperCase()}
              <ol>
                <li>{t('description-3.1')}</li>
                <li>{t('description-3.2')}</li>
                <li>{t('description-3.3')}</li>
                <li>{t('description-3.4')}</li>
                <li>{t('description-3.5')}</li>
                <li>{t('description-3.6')}</li>
              </ol>
            </li>
            <li>{t('title-4').toUpperCase()}
              <ol>
                <li>{t('description-4.1')}</li>
                <li>{t('description-4.2')}</li>
                <li>{t('description-4.3')}</li>
                <li>{t('description-4.4')}</li>
                <li>{t('description-4.5')}</li>
              </ol>
            </li>
            <li>{t('title-5').toUpperCase()}
              <ol>
                <li>{t('description-5.1')}</li>
                <li>{t('description-5.2')}</li>
              </ol>
            </li>
            <li>{t('title-6').toUpperCase()}
              <div>{t('description-6')}</div>
              <ol>
                <li>{t('description-6.1')}</li>
                <li>{t('description-6.2')}</li>
                <li>{t('description-6.3')}</li>
              </ol>
            </li>
            <li>{t('title-7').toUpperCase()}
              <ol>
                <li>{t('description-7.1')}</li>
                <li>{t('description-7.2')}</li>
              </ol>
            </li>
            <li>{t('title-8').toUpperCase()}
              <ol>
                <li>{t('description-8.1')}</li>
                <li>{t('description-8.2')}</li>
                <li>{t('description-8.3')}</li>
              </ol>
            </li>
          </ol>
          <div className={styles.copyright}>{t('copyright')}</div>
        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Privacy