import { useTranslation } from 'react-i18next';
import { useModal } from '../../../hooks/modal/use-modal.ts';
import { OvalButton } from '../oval-button/oval-button.tsx';
import { GearWheelIcon } from '../../icons/gear-wheel-icon/gear-wheel-icon.tsx';
import { PriceIcon } from '../../icons/price-icon/price-icon.tsx';
import { WarrantyIcon } from '../../icons/warranty-icon/warranty-icon.tsx';
import { TermsIcon } from '../../icons/terms-icon/terms-icon.tsx';
import styles from './common-buttons-block.module.scss'

export const CommonButtonsBlock = () => {
  const { t } = useTranslation('common');
  const { showModal } = useModal();
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.button}>
        <OvalButton
          theme='light'
          text={t('common-button-block.order')}
          icon={<GearWheelIcon/>}
          onClick={() => showModal(
            <div className={styles.blockTitle}>
              <h2>{t('common-button-block.order').toUpperCase()}</h2>
              <span>{t('modal-window-title.order.label')}</span>
            </div>
          )}
        />
      </div>
      <div className={styles.button}>
        <OvalButton
          theme='light'
          text={t('common-button-block.warranty')}
          icon={<WarrantyIcon/>}
          onClick={() => showModal(
            <div className={styles.blockTitle}>
              <h2>{t('common-button-block.warranty').toUpperCase()}</h2>
              <span>{t('modal-window-title.warranty.label-1')}</span>
              <br/>
              <span>{t('modal-window-title.warranty.label-2')}</span>
            </div>
          )}
        />
      </div>
      <div className={styles.button}>
        <OvalButton
          theme='light'
          text={t('common-button-block.price')}
          icon={<PriceIcon/>}
          onClick={() => showModal(
            <div className={styles.blockTitle}>
              <h2>{t('common-button-block.price').toUpperCase()}</h2>
              <span>{t('modal-window-title.price.label-1')}</span>
              <span>{t('modal-window-title.price.label-2')}</span>
              <span>{t('modal-window-title.price.label-3')}</span>
            </div>
          )}
        />
      </div>

      <div className={styles.button}>
        <OvalButton
          theme='light'
          text={t('common-button-block.terms')}
          icon={<TermsIcon/>}
          onClick={() => showModal(
            <div className={styles.blockTitle}>
              <h2>{t('common-button-block.terms').toUpperCase()}</h2>
              <span>{t('modal-window-title.terms.label-1')}</span>
              <span>{t('modal-window-title.terms.label-2')}</span>
              <br/>
              <span>{t('modal-window-title.terms.label-3')}</span>
            </div>
          )}
        />
      </div>
    </div>
  )

}