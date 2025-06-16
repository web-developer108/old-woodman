import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../../hooks/modal/use-modal.ts';
import { ColorButton } from '../../buttons/color-button/color-button.tsx';
import { PhoneInput } from '../../phone-input/phone-input.tsx';
import { WhatsappIcon } from '../../icons/whatsapp-icon/whatsapp-icon.tsx';
import { TelegramIcon } from '../../icons/telegram-icon/telegram-icon.tsx';
import { Feedback } from '../../modal-windows/feedback/feedback.tsx';
import { AppColors } from '../../../styles.ts';
import styles from './footer-top.module.scss';

export const FooterTop = () => {
  const { t } = useTranslation('common');
  const { showModal } = useModal();
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      message,
      phone,
    };

    emailjs.send(
      'service_nriv0ws',//поменять на настройки заказчика
      'template_sedebd8',//поменять на настройки заказчика
      templateParams,
      'RwBMdTUy5fFSOOCk-'//поменять на настройки заказчика
    )
      .then(() => {
        setMessage('');
        setPhone('');
      })
      .catch((error) => {
        console.error('Ошибка отправки:', error);
      });
    showModal(<Feedback/>)
  }
  return (
    <div className={styles.footerTop}>
      <h2 className={styles.title}>{t('footer.title1')}<br/>{t('footer.title2')}</h2>
      <div className={styles.buttons}>
        <a href="https://wa.me/77081826004"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="WhatsApp"
        >
          <ColorButton label={t('footer.button.whatsapp')} variant='green' icon={<WhatsappIcon/>}/>
        </a>
        <a href="https://t.me/old_woodman"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Telegram"
        >
          <ColorButton label={t('footer.button.telegram')} variant='blue'
                       icon={<TelegramIcon arrowColor={AppColors.button.blue}
                                           backgroundColor={AppColors.text.light}/>}/>
        </a>
      </div>

      <div className={styles.formContainer}>

        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            className={styles.message}
            placeholder={t('footer.placeholder.message')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            name="message"
          />
          <PhoneInput
            value={phone}
            onChange={setPhone}
          />
          <ColorButton label={t('footer.button.main')} />
          <div className={styles.info}>{t('footer.text.politics')}</div>
        </form>
      </div>
      <div className={styles.text}> {t('footer.text.or').toUpperCase()}</div>
    </div>
  );
};
