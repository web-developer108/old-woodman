import React from 'react';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { TelegramIcon } from '../icons/telegram-icon/telegram-icon.tsx';
import { WhatsappIcon } from '../icons/whatsapp-icon/whatsapp-icon.tsx';
import { InstagramIcon } from '../icons/instagram-icon/instagram-icon.tsx';
import { AppColors } from '../../styles.ts';
import styles from './social-panel.module.scss';

export const SocialPanel: React.FC = () => {
  return (
    <div className={styles.panel}>
      <CircleButton icon={<TelegramIcon />} />
      <CircleButton icon={<WhatsappIcon color = {AppColors.text.grey} />} />
      <CircleButton icon={<InstagramIcon />}/>
    </div>
  );
};
