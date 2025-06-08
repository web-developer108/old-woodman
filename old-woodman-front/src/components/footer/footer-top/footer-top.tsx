import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ColorButton } from '../../buttons/color-button/color-button.tsx';
import { PhoneInput } from '../../phone-input/phone-input.tsx';
import { WhatsappIcon } from '../../icons/whatsapp-icon/whatsapp-icon.tsx';
import { TelegramIcon } from '../../icons/telegram-icon/telegram-icon.tsx';
import { AppColors } from '../../../styles.ts';
import styles from './footer-top.module.scss';
import { CloseIcon } from '../../icons/close-icon/close-icon.tsx';

export const FooterTop = () => {
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

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
        setSent(true);
        setMessage('');
        setPhone('');
      })
      .catch((error) => {
        console.error('Ошибка отправки:', error);
      });
  }
  return (
    <div className={styles.footerTop}>
      <h2 className={styles.title}>ОСТАЛИСЬ ЕЩЁ ВОПРОСЫ?<br/>ЗАДАВАЙТЕ — МЫ ОТВЕТИМ</h2>
      <div className={styles.buttons}>
        <ColorButton label='Перейти в чат WhattsApp' variant='green' icon={<WhatsappIcon/>}/>
        <ColorButton label='Написать в телеграмм' variant='blue'
                     icon={<TelegramIcon arrowColor={AppColors.button.blue} backgroundColor={AppColors.text.light}/>}/>
      </div>

      <div className={styles.formContainer}>

        <form onSubmit={handleSubmit} className={`${styles.form} ${sent ? styles.hidden : ''}`}>
          <textarea
            className={styles.message}
            placeholder="Введите сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            name="message"
          />
          <PhoneInput
            value={phone}
            onChange={setPhone}
          />
          <ColorButton label='Отправить вопрос'/>
          <div className={styles.info}>Нажимая на кнопку “Отправить запрос” вы подтверждаете, что ознакомилисьс
            политикой конфиденциальности и согласен на обработку персональных
            данных.
          </div>
        </form>

        <div className={`${styles.successMessage} ${!sent ? styles.hidden : ''}`}>
          <div className={styles.close} onClick={() => setSent(false)}>
            <CloseIcon/>
          </div>
          <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        </div>
        <div className={styles.text}> ИЛИ
        </div>
      </div>
    </div>
  );
};
