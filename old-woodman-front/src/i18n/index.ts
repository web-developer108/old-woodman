import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ruCommon from './locals/ru/common.json';
import kkCommon from './locals/kk/common.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'kk'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        common: ruCommon,
      },
      kk: {
        common: kkCommon,
      },
    },
  });

export default i18n;
