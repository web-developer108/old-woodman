import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { ColorButton } from '../../components/buttons/color-button/color-button.tsx';
import { ArrowRightIcon } from '../../components/icons/arrow-right-icon/arrow-right-icon.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { WhatsappIcon } from '../../components/icons/whatsapp-icon/whatsapp-icon.tsx';
import { TelegramIcon } from '../../components/icons/telegram-icon/telegram-icon.tsx';
import { FaceIcon } from '../../components/icons/face-icon/face-icon.tsx';
import { AppColors } from '../../styles.ts';
import styles from './temporary.module.scss';

const Temporary = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  return (
    <ToolPageLayout>
      <div className={styles.notFoundContainer}>
        <h1>СТРАНИЦА В ПРОЦЕССЕ</h1>
        <div>Извините, мы не успели, но Вы можете задать нам вопросы на WhatsApp или Telegram</div>
        <div className={styles.buttonWrap}>
          <ColorButton label={t('not-found.button')} onClick={() => navigate(-1)}
                       icon={<ArrowRightIcon color={AppColors.text.main} size='small'/>}/>
        </div>
        <div className={styles.iconWrap}>
          <FaceIcon/>
        </div>
      </div>
      <div className={styles.circleButtons}>
        <a
          href="https://wa.me/77081826004"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <CircleButton bgColor={AppColors.button.green} icon={<WhatsappIcon color={AppColors.text.light}/>}/>
        </a>
        <a
          href="https://wa.me/77081826004"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <CircleButton bgColor={AppColors.button.blue} icon={

            <TelegramIcon
              arrowColor={AppColors.button.blue}
              backgroundColor={AppColors.text.light}/>}/>
        </a>
      </div>

    </ToolPageLayout>
  )
};
export default Temporary;