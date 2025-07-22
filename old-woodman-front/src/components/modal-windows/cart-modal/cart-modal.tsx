import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../../hooks/cart/cart.tsx';
import { useModal } from '../../../hooks/modal/use-modal.ts';
import { useProductCatalog } from '../../../hooks/catalog/use-product-catalog.ts';
import { ColorButton } from '../../buttons/color-button/color-button.tsx';
import { ProductSummary } from '../../product-summary/product-summary.tsx';
import { OrderIcon } from '../../icons/order-icon/order-icon.tsx';
import { OneClickModal } from '../one-click-order/one-click-order.tsx';
import type { OrderProps } from '../one-click-order/one-click-order.types.ts';
import type { Product } from '../../product-summary/product-summary.types.ts';
import styles from './cart-modal.module.scss';

export const CartModal: React.FC<OrderProps> = ({ id }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('common');
  const {showModal, closeModal} = useModal();
  const { updateQuantity } = useCart();
  const lang = i18n.language as 'ru' | 'kk';
  const [quantity, setQuantity] = useState(1);
 const { getProductDetailsById } = useProductCatalog();

  const handleOneClick = () => {
    showModal(<OneClickModal id={id} />);
  };
  const handleCartClick = () => {
    updateQuantity(productData!.product.id, quantity);
      closeModal();
    navigate('/cart');
  };
  const productData = getProductDetailsById(id);
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  return (
    <div className={styles.modalContent}>
      <h2 className={styles.modalTitle}>{t('modal-card.title').toUpperCase()}</h2>
      <ProductSummary
        product={productData?.product as Product}
        quantity={quantity}
        lang={lang}
        onIncrease={increase}
        onDecrease={decrease}
      />
      <div className={styles.buttonsContainer}>
      <ColorButton
      label = {t('button-order.label')}
      variant = 'white'
      icon ={<OrderIcon/>}
      onClick = {handleOneClick}
      />
      <ColorButton
      label = {t('button-cart.label')}
      variant = 'black'
      onClick = {handleCartClick}
      />
      </div>

    </div>
  )
}