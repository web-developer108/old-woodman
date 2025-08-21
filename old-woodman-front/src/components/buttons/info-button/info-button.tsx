import React from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../../hooks/modal/use-modal.ts';
import { ContactsModal } from '../../modal-windows/contacts-modal/contacts-modal.tsx';
import { ColorButton } from '../color-button/color-button.tsx';
import type { InfoButtonProps } from './info-button.types.ts';
import styles from './info-button.module.scss'

export const InfoButton: React.FC<InfoButtonProps> = ({ title, label }) => {
  const { t } = useTranslation('common');
  const { showModal } = useModal();
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.headerWrap}>
        <h3 className={styles.buttonTitle}>{title}</h3>
        <div className={styles.buttonText}>{label}</div>
      </div>
      <div className={styles.buttonWrap}>
        <ColorButton
          label={t('footer.button.main')}
          onClick={() => showModal(<ContactsModal/>)}
        />
      </div>
    </div>
  )

}