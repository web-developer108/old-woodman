import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/cart/cart.tsx';
import { PhoneInput } from '../phone-input/phone-input.tsx';
import { ColorButton } from '../buttons/color-button/color-button.tsx';
import { useCurrentCategory } from '../../hooks/current-category/current-category.ts';
import type { ProductItem } from '../../config/config.types.ts';
import styles from './order-summary.module.scss'

export const OrderSummary: React.FC<{
  products: (ProductItem & { quantity: number })  [];
  total: number;
}> = ({ products, total }) => {
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const lang = i18n.language as 'ru' | 'kk';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const category = useCurrentCategory();


  const orderDetails = products.map((p) => (
    `${p.title[lang]}, ${p.description?.[lang] || p.shortName[lang]} — ${p.quantity} шт. = ${(p.price * p.quantity).toLocaleString()} ₸`
  )).join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_phone: phone,
      order_details: orderDetails,
      user_city: city,
      total_price: `${total.toLocaleString()} ₸`,
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
    navigate('/cart/booked');
  }

  return (
    <div className={styles.summary}>
      <div className={styles.headerWrap}>
        <h4>{t('order-summary.header')}</h4>
        <span> {`${cartItems.length} ${t('order-summary.quantity', { count: cartItems.length })}`}</span>
      </div>
      <div className={styles.items}>
        {products.map((p) => (
          <div key={p.id} className={styles.item}>
            <div>
              <div>{(p.title[lang])}</div>
              {category === 'doors' && <div>{p.description?.[lang]}</div>}
              {category === 'furniture' && <div>{p.shortName?.[lang]}</div>}
            </div>
            <div>{(p.price * p.quantity).toLocaleString()} ₸</div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <span>{t('order-summary.sum')}</span>
        <span>{total.toLocaleString()} ₸</span>
      </div>
      <form id={'form'} className={styles.form} onSubmit={handleSubmit}>
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
    </div>
  );
};
