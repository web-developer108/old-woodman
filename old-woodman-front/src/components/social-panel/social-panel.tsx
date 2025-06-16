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
      <a
        href="https://t.me/old_woodman"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <CircleButton icon={<TelegramIcon/>}/>
      </a>
      <a
        href="https://wa.me/77081826004"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <CircleButton icon={<WhatsappIcon color={AppColors.text.grey}/>}/>
      </a>
      <a
        href="https://www.instagram.com/old.woodman/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <CircleButton icon={<InstagramIcon/>}/>
      </a>
    </div>
  );
};
