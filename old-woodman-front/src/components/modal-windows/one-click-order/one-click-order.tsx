import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../../hooks/modal/use-modal.ts';
import type { OrderProps } from './one-click-order.types.ts';
import { findProductById } from '../../../utils/find-product-by-id.ts';
import { PhoneInput } from '../../phone-input/phone-input.tsx';
import { ColorButton } from '../../buttons/color-button/color-button.tsx';
import { ProductSummary } from '../../product-summary/product-summary.tsx';
import styles from './one-click-order.module.scss';

export const OneClickModal: React.FC<OrderProps> = ({ id }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('common');
  const { closeModal } = useModal();
  const lang = i18n.language as 'ru' | 'kk';
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const data = findProductById(id);
  if (!data) return null;
  const { product } = data;
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const orderDetails =
    `${product.title[lang]}, ${product.description[lang]} — ${quantity} шт. = ${(product.price * quantity).toLocaleString()} ₸`;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_phone: phone,
      order_details: orderDetails,
      user_city: city,
      total_price: `${(product.price * quantity).toLocaleString()} ₸`,
    };

    emailjs.send(
      'service_86eog8m',
      'template_45a1bjo',
      templateParams,
      'ants2gildzCOiXvR5'
    )
      .then(() => {
        setName('');
        setPhone('');
        setCity('');
      })
      .catch((error) => {
        console.error('Ошибка отправки:', error);
      });
    closeModal();
    navigate('/cart/booked');
  }

  return (
    <div className={styles.modalContent}>
      <h2 className={styles.modalTitle}>{t('modal-order.label').toUpperCase()}</h2>
      <ProductSummary
        product={product}
        quantity={quantity}
        lang={lang}
        onIncrease={increase}
        onDecrease={decrease}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder={t('modal-order.name.placeholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required/>
        <PhoneInput
          value={phone}
          onChange={setPhone}
        />
        <input
          className={styles.input}
          type="text"
          placeholder={t('modal-order.city.placeholder')}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required/>
        <ColorButton
          label={t('modal-order.button.label')}
          type='submit'
        />
      </form>
      <div className={styles.info} dangerouslySetInnerHTML={{ __html: t('modal-order.privacy-note') }}></div>
    </div>
  )
}