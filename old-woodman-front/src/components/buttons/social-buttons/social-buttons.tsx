import { useTranslation } from 'react-i18next';
import { CircleButton } from '../circle-button/circle-button.tsx';
import { WhatsappIcon } from '../../icons/whatsapp-icon/whatsapp-icon.tsx';
import { TelegramIcon } from '../../icons/telegram-icon/telegram-icon.tsx';
import { AppColors } from '../../../styles.ts';
import styles from './social-buttons.module.scss';

export const SocialButtons = ()=>{
  const {t} = useTranslation('common')
  return (
    <div className={styles.circleButtons}>
      <a className={styles.whatsapp}
        href="https://wa.me/77081826004"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <CircleButton ariaLabel={t('social.aria-label.wa')} bgColor={AppColors.button.green}
                      icon={<WhatsappIcon color={AppColors.text.light} size = '30'/>}/>
      </a>
      <a
        href="https://t.me/old_woodman"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <CircleButton ariaLabel={t('social.aria-label.t')} bgColor={AppColors.button.blue} icon={

          <TelegramIcon
            arrowColor={AppColors.button.blue}
            size = '32'
            backgroundColor={AppColors.text.light}/>}/>
      </a>
    </div>
  )
}