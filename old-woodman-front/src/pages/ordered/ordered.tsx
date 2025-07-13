import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { HandsIcon } from '../../components/icons/hands-icon/hands-icon.tsx';
import { ColorButton } from '../../components/buttons/color-button/color-button.tsx';
import { ArrowRightIcon } from '../../components/icons/arrow-right-icon/arrow-right-icon.tsx';
import { AppColors } from '../../styles.ts';
import styles from './ordered.module.scss'

const Ordered = () => {
  const { t } = useTranslation('cart');
  const navigate = useNavigate();
  return (
    <ToolPageLayout>
      <div className={styles.orderedContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.mainHeader}>{t('ordered-main-header')}</h1>
          <div className={styles.label}>{t('ordered-main-header.label')}</div>
          <div className={styles.buttonContainer}>
            <ColorButton
              label={t('ordered-button')}
              icon={<ArrowRightIcon size='small' color={AppColors.text.main}/>}
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
        <div className={styles.faceContainer}>
          <HandsIcon/>
        </div>
      </div>

    </ToolPageLayout>
  )
}

export default Ordered;