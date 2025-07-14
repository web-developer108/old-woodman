import { useTranslation } from 'react-i18next';
import { OvalButton } from '../oval-button/oval-button.tsx';
import { GearWheelIcon } from '../../icons/gear-wheel-icon/gear-wheel-icon.tsx';
import { PriceIcon } from '../../icons/price-icon/price-icon.tsx';
import { WarrantyIcon } from '../../icons/warranty-icon/warranty-icon.tsx';
import { TermsIcon } from '../../icons/terms-icon/terms-icon.tsx';
import styles from './common-buttons-block.module.scss'

export const CommonButtonsBlock = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.button}>

        <OvalButton
          theme='light'
          text={t('common-button-block.order')}
          icon={<GearWheelIcon/>}
        />
      </div>
      <div className={styles.button}>
        <OvalButton
          theme='light'
          text={t('common-button-block.warranty')}
          icon={<WarrantyIcon/>}
        />
      </div>
      <div className={styles.button}>
        <OvalButton
          theme='light'
          text={t('common-button-block.price')}
          icon={<PriceIcon/>}
        />
      </div>

      <div className={styles.button}>
        <OvalButton
          theme='light'
          text={t('common-button-block.terms')}
          icon={<TermsIcon/>}
        />
      </div>
    </div>
  )

}