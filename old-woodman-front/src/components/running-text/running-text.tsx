import { useTranslation } from 'react-i18next';
import styles from './running-text.module.scss';

export const RunningText = () => {
  const { t } = useTranslation('common');

  const contactInfo = (
    <>
      <span>{t('info-line1')}</span>
      <span>{t('info-line2')}</span>
      <span>{t('info-line3')}</span>
    </>
  );

  return (
    <>
      <div className={styles.contactInformationDesktop}>
        {contactInfo}
      </div>
      <div className={styles.contactInformationMobile}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeContent}>
            {contactInfo}
          </div>
          <div className={styles.marqueeContent} aria-hidden="true">
            {contactInfo}
          </div>
        </div>
      </div>
    </>
  );
};