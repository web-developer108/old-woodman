import styles from '../contacts-modal/contacts-modal.module.scss'
import { useTranslation } from 'react-i18next';

export const Feedback = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.modalContainer}>
      <h2 className={styles.modalTitle}>{t('footer.feedback.title')}</h2>
      <span className={styles.modalDescription}>{t('footer.feedback.description')}</span>
    </div>
  )
}