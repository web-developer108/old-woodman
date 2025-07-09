import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useDevice from '../../../hooks/device/use-device';
import { ShareIcon } from '../../icons/share-icon/share-icon.tsx';
import styles from './share-button.module.scss';

export const ShareButton: React.FC = () => {
  const { isMobile } = useDevice();
  const { t } = useTranslation('common');
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname + location.search;
  const [copied, setCopied] = useState(false);

  const handleClick = async() => {
    try {
      if (navigator.share && isMobile) {
        await navigator.share({
          title: document.title,
          url: currentUrl,
        });
      } else {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Ошибка:', err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.shareButton} onClick={handleClick}>
        <ShareIcon/>
        <span> {t('button-share.label')} </span>
      </button>
      {copied && <div className={styles.copiedPopup}>{t('button-share.copied')}</div>}
    </div>
  );
};
