import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import useDevice from '../../hooks/device/use-device.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import styles from '../info/info.module.scss';
import { InfoIcon } from '../../components/icons/info-icon/info-icon.tsx';

const Info = () => {
  const { t } = usePageTranslate();
  const { isMobile } = useDevice();
  return (
    <ToolPageLayout>
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.mainHeader}
                dangerouslySetInnerHTML={{ __html: isMobile ? t('main-header-mob').toUpperCase() : t('main-header').toUpperCase() }}/>
            <div className={styles.iconWrapper}>
              <InfoIcon/>
            </div>
          </div>

        </div>
        <div className={styles.infoContent}>
          <Breadcrumbs current={t('info')}/>

        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Info