import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { OrderProps } from './one-click-order.types.ts';
import { findProductById } from '../../../utils/find-product-by-id.ts';
import { PhoneInput } from '../../phone-input/phone-input.tsx';
import { ColorButton } from '../../buttons/color-button/color-button.tsx';
import styles from './one-click-order.module.scss';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../../hooks/modal/use-modal.ts';

export const OneClickModal: React.FC<OrderProps> = ({ id }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('common');
  const {closeModal} = useModal();
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
  return (
    <div className={styles.modalContent}>
      <h2 className={styles.modalTitle}>{t('modal-order.label').toUpperCase()}</h2>
      <div className={styles.productSummary}>
        <div className={styles.imageWrapper}>
          <img src={product.images[0]} alt={product.title[lang]}/>
        </div>
        <div className={styles.productName}>
          <div >{product.title[lang]},</div>
          <div>{product.description[lang]}</div>
        </div>
        <span className={styles.hiddenTitle}>{t('modal-order.quantity')}</span>
        <div className={styles.quantitySelector}>

          <button onClick={decrease} className={styles.button}>−</button>
          <span className={styles.value}>{quantity}</span>
          <button onClick={increase} className={styles.button}>+</button>
        </div>
        <span className={styles.hiddenSum}>{t('modal-order.sum')}</span>
        <div className={styles.price}>{(product.price * quantity).toLocaleString()} ₸</div>
      </div>
      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault();
        closeModal();
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
          type = 'submit'
        />
      </form>
      <div className={styles.info} dangerouslySetInnerHTML={{ __html: t('modal-order.privacy-note') }}></div>
    </div>
  )
}