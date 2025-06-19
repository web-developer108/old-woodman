import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import styles from './cart.module.scss'

const Cart = () => {
  const { t } = usePageTranslate()
  return (
    <ToolPageLayout isFullFooter={false}>
      <div className={styles.cartContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainHeader}>{t('main-header')}</h1>
          <div className={styles.label}>{t('main-header.label')}</div>
        </div>
      </div>

    </ToolPageLayout>
  )
}

export default Cart;