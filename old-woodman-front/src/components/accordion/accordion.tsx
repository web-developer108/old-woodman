import { useState } from 'react';
import { ArrowDownIcon } from '../icons/arrow-down-icon/arrow-down-icon.tsx';
import { useTranslation } from 'react-i18next';
import styles from './accordion.module.scss';

export const Accordion = () => {
  const { t } = useTranslation('common')
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const items = Array.from({ length: 8 }, (_, i) => {
    const index = i + 1;
    return {
      question: t(`accordion.quest${index}`),
      answer: t(`accordion.answer${index}`),
    };
  });

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>{t('accordion.title').toUpperCase()}</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={`${styles.item} ${openIndices.includes(index) ? styles.open : ''}`}>
            <button onClick={() => toggleItem(index)} className={styles.question}>
              {item.question}
              <span className={`${styles.arrow} ${openIndices.includes(index) ? styles.rotate : ''}`}>
        <ArrowDownIcon/>
      </span>
            </button>
            {openIndices.includes(index) && (
              <div className={styles.answer}>
                <p dangerouslySetInnerHTML={{ __html: item.answer }}/>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
