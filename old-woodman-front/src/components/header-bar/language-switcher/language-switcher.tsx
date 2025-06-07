import { useTranslation } from 'react-i18next';
//import i18n from 'i18next';
import styles from './language-switcher.module.scss';

const languages = ['ru', 'kk'];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleSwitch = (lang: string) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('i18nextLng', lang);
    }
  };

  return (
    <div className={styles.switcher}>
      {languages.map((lang, index) => (
        <span
          key={lang}
          className={lang === currentLang ? styles.active : ''}
          onClick={() => handleSwitch(lang)}
        >
          {lang === 'ru' ? 'Рус' : 'Қаз'}
          {index === 0 && ' | '}
        </span>
      ))}
    </div>
  );
};
