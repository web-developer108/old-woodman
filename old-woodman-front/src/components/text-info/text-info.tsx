import { useModal } from '../../hooks/modal/use-modal.ts';
import { useTranslation } from 'react-i18next';
import { ColorButton } from '../buttons/color-button/color-button.tsx';
import { ArrowTopRightIcon } from '../icons/arrow-top-right-icon/arrow-top-right-icon.tsx';
import { Contacts } from '../modal-windows/contacts/contacts.tsx';
import styles from './text-info.module.scss';

export const TextInfo = () => {
  const { t } = useTranslation('common');
  const { showModal } = useModal();

  return (
    <div className={styles.textContainer}>
      <h2 className={styles.textInfoTitle}>  {t('text-info.title').toUpperCase()}</h2>
      <h3 className={styles.textInfoLabel}>  {t('text-info.label').toUpperCase()}</h3>
      <ol>
        <li className={styles.text1}>{t('text-info.text1')}</li>
        <li className={styles.text2}>{t('text-info.text2')}</li>
        <li className={styles.text3}>{t('text-info.text3')}</li>
      </ol>
      <div className={styles.textInfoButton}>
        <ColorButton label={t('text-info.button')} icon={<ArrowTopRightIcon/>} onClick={() => showModal(<Contacts/>)}/>
      </div>
    </div>
  )
}