import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { ProductItem } from '../../config/config.types.ts';
import { useCart } from '../../hooks/cart/cart.tsx';
import { PhoneInput } from '../phone-input/phone-input.tsx';
import { ColorButton } from '../buttons/color-button/color-button.tsx';
import styles from './order-summary.module.scss'

export const OrderSummary: React.FC<{
  products: (ProductItem & { quantity: number })  [];
  total: number;
}> = ({ products, total }) => {
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const { cartItems} = useCart();
  const lang = i18n.language as 'ru' | 'kk';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
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
              <div>{p.title[lang]}</div>
              <div>{p.description[lang]}</div>
            </div>
            <div>{(p.price * p.quantity).toLocaleString()} ₸</div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <span>{t('order-summary.sum')}</span>
        <span>{total.toLocaleString()} ₸</span>
      </div>
      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault();
        navigate('/cart/booked');
      }}>
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
