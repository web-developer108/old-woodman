import { useState } from 'react';
import type { ResponsiveCardProps } from './responsive-card.types.ts';
import { CircleButton } from '../buttons/circle-button/circle-button.tsx';
import { ArrowDownIcon } from '../icons/arrow-down-icon/arrow-down-icon.tsx';
import { AppColors } from '../../styles.ts';
import { useTranslation } from 'react-i18next';
import styles from './responsive-card.module.scss';

export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  image,
  title,
  description,
  comment,
}) => {
  const {t} = useTranslation('common');
  const [isExpanded, setIsExpanded] = useState(false);
  const contentBlock = (
    <>
      <h2 className={styles.title}>{title.toUpperCase()}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.comment}>{comment}</p>
    </>
  );

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image}/>
      </div>
      <div className={styles.content}>{contentBlock}</div>
      <div
        className={`${styles.mobileOverlay} ${
          isExpanded ? styles.visible : styles.hidden
        }`}
      >
        {contentBlock}
      </div>
      <div className={styles.mobileButton}>
        <CircleButton
          bgColor={AppColors.text.light}
          icon={
            <div
              className={`${styles.iconWrapper} ${
                isExpanded ? styles.rotateUp : ''
              }`}
            >
              <ArrowDownIcon/>
            </div>
          }
          ariaLabel={isExpanded ? t('button.aria-label.open') : t('button.aria-label.close')}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      </div>
    </div>
  );
};