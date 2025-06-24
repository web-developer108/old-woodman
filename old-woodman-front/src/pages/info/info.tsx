import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import useDevice from '../../hooks/device/use-device.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { InfoIcon } from '../../components/icons/info-icon/info-icon.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { ArrowBottomIcon } from '../../components/icons/arrow-bottom-icon/arrow-bottom-icon.tsx';
import { AppColors } from '../../styles.ts';
import styles from '../info/info.module.scss';

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
          <h2 className={styles.header}>{t('header-1').toUpperCase()}</h2>
          <section className={styles.section}>
            <h3>{t('subtitle-1').toUpperCase()}</h3>
            <span>{t('text-1.1')}</span>
            <span>{t('text-1.2')}</span>
            <span>{t('text-1.3')}</span>
            <span>{t('text-1.4')}</span>
          </section>
          <section className={styles.section}>
            <h3>{t('subtitle-2').toUpperCase()}</h3>
            <span>{t('text-2.1')}</span>
            <span>{t('text-2.2')}</span>
            <span>{t('text-2.3')}</span>
            <span>{t('text-2.4')}</span>
          </section>
          <section className={styles.list}>
            <h3>{t('subtitle-3').toUpperCase()}</h3>
            <ol>
              <li>{t('text-3.1')}</li>
              <li>{t('text-3.2')}</li>
              <li>{t('text-3.3')}</li>
              <li>{t('text-3.4')}</li>
              <li>{t('text-3.5')}</li>
            </ol>
          </section>

          <div className={styles.grey}>
            <div className={styles.headerWrap}>

              <div className={styles.buttonWrap}>
                <CircleButton bgColor={AppColors.background.circleButton} icon={<ArrowBottomIcon/>}/>
              </div>

              <h3>{t('subtitle-4').toUpperCase()}</h3>
            </div>
            <div className={styles.buttonText}>{t('text-4')}</div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Info