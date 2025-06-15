import { useTranslation } from 'react-i18next';
import { WhatsappIcon } from '../../icons/whatsapp-icon/whatsapp-icon.tsx';
import { ColorButton } from '../../buttons/color-button/color-button.tsx';
import { TelegramIcon } from '../../icons/telegram-icon/telegram-icon.tsx';
import { AppColors } from '../../../styles.ts';
import styles from './contacts.module.scss'

export const Contacts = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.modalContainer}>
      <h2 className={styles.modalTitle}>OLD WOODMAN</h2>
      <span className={styles.modalDescription}>{t('modal.description')}</span>
      <div className={styles.modalButtons}>
        <a href="https://wa.me/77081826004"
           target="_blank"
           rel="noopener noreferrer"
        >
          <ColorButton label={t('footer.button.whatsapp')} variant='green' icon={<WhatsappIcon/>}/>
        </a>

        <a href="https://t.me/oldwoodmankz"
           target="_blank"
           rel="noopener noreferrer"
        >
          <ColorButton label={t('footer.button.telegram')} variant='blue'
                       icon={<TelegramIcon arrowColor={AppColors.button.blue}
                                           backgroundColor={AppColors.text.light}/>}/>
        </a>
      </div>
    </div>
  )
}