import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './footer-top.module.scss';
import { ColorButton } from '../../buttons/color-button/color-button.tsx';
import { PhoneInput } from '../../phone-input/phone-input.tsx';

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
      <div className={styles.social}>
        <h2>Остались вопросы?<br/>Задавайте — мы ответим</h2>
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
        {/*  <input
            className={styles.phone}
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            name="phone"
          />*/}
          <PhoneInput
            value={phone}
            onChange={setPhone}
          />
          <ColorButton label = 'Отправить запрос' />
          <div className={styles.info}>Нажимая на кнопку “Отправить запрос” вы подтверждаете, что ознакомилисьс политикой конфиденциальности и согласен на обработку персональных
            данных.</div>
        </form>
        <div
          className={`${styles.successMessage} ${!sent ? styles.hidden : ''}`}
        >
          <span className={styles.close} onClick={() => setSent(false)}>×</span>
          <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        </div>
      </div>
    </div>
  );
};
