import { useTranslation } from 'react-i18next';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { useProductCatalog } from '../../hooks/catalog/use-product-catalog.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { FaceIcon } from '../../components/icons/face-icon/face-icon.tsx';
import { useCart } from '../../hooks/cart/cart.tsx';
import { QuantitySelector } from '../../components/quantity-selector/quantity-selector.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { CloseIcon } from '../../components/icons/close-icon/close-icon.tsx';
import { OrderSummary } from '../../components/order-summary/order-summary.tsx';
import type { ProductItem } from '../../config/config.types.ts';
import { AppColors } from '../../styles.ts';
import styles from './cart.module.scss'

const Cart = () => {
  const { t } = usePageTranslate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { i18n } = useTranslation('common');
  const { getProductDetailsById } = useProductCatalog();
  const lang = i18n.language as 'ru' | 'kk';

  const emptyCart = cartItems.length === 0;
  const products = cartItems
    .map((item) => {
      const data = getProductDetailsById(item.id);
      if (!data) return null;
      return { ...data.product, quantity: item.quantity };
    })
    .filter((p): p is ProductItem & { quantity: number } => p !== null);
  const totalPrice = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  return (
    <ToolPageLayout isFullFooter={false}>
      <div className={styles.cartContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.mainHeader}>{t('main-header')}</h1>
            <div className={styles.label}>{t('main-header.label')}</div>
          </div>
        </div>
        <div className={styles.cartContent}>
          <Breadcrumbs current={t('main-header')}/>
          {emptyCart
            ? (
              <div className={styles.faceContainer}>
                <FaceIcon/>
                <h2 className={styles.title}>  {t('empty-header').toUpperCase()} </h2>
                <div className={styles.text}>   {t('empty-label')}</div>
              </div>
            ) : (
              <div className={styles.cartPage}>
                <div className={styles.table}>
                  <div className={styles.header}>
                    <span>{t('cart.product')}</span>
                    <span>{t('cart.price')}</span>
                    <span>{t('cart.quantity')}</span>
                    <span>{t('cart.total')}</span>
                  </div>
                  {products.map((product) => (
                    <div className={styles.row} key={product.id}>
                      <div className={styles.deleteButton}>
                        <CircleButton bgColor={AppColors.text.light} ariaLabel={t('delete-button')}
                                      onClick={() => removeFromCart(product.id)} icon={<CloseIcon/>}/>
                      </div>
                      <div className={styles.imageName}>
                        <div className={styles.imageWrapper}>
                          <img src={product.images[0]} alt={product.title[lang]}/>
                        </div>
                        <div className={styles.productName}>
                          <div className={styles.title}>{product.title[lang]}</div>
                          <div className={styles.title}>{product.description[lang]}</div>
                          <div className={styles.shortName}>{product.shortName?.[lang]}</div>
                        </div>
                      </div>
                      <div className={styles.price}>
                        <span>{t('cart.price')}</span>
                        {product.price.toLocaleString()} ₸
                      </div>
                      <div className={styles.quantity}>
                        <span>{t('cart.quantity')}</span>
                        <QuantitySelector
                          quantity={product.quantity}
                          onIncrease={() => updateQuantity(product.id, product.quantity + 1)}
                          onDecrease={() => updateQuantity(product.id, product.quantity - 1)}
                        />
                      </div>
                      <div className={styles.priceSum}>
                        <span>{t('cart.total')}</span>{(product.price * product.quantity).toLocaleString()} ₸
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.summary}>
                  <OrderSummary products={products} total={totalPrice}/>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </ToolPageLayout>
  )
}

export default Cart;