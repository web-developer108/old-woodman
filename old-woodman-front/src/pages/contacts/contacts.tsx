import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import styles from './contacts.module.scss'
import useDevice from '../../hooks/device/use-device.ts';

const Contacts = () => {
  const { t } = usePageTranslate();
  const { isMobile } = useDevice();
  return (
    <ToolPageLayout isFullFooter={false}>
      <div className={styles.contactsContainer}>
        <div className={styles.imageContainer}/>
        <div className={styles.contactsContent}>
          <Breadcrumbs current={t('main-header')}/>
          <h1 className={styles.mainHeader}>
            {isMobile ? (
              t('header-2').toUpperCase()
            ) : (
              <>
                {t('header-1').toUpperCase()}
                <br/>
                {t('header-2').toUpperCase()}
              </>
            )}
          </h1>
          <div className={styles.infoContainer}>
            <div className={styles.infoWrap}>

            </div>

          </div>
        </div>
      </div>
    </ToolPageLayout>
  )
}

export default Contacts;