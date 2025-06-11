import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ruCommon from './locales/ru/common.json';
import ruHome from './locales/ru/home.json';
import ruDoors from './locales/ru/doors.json';
import kkCommon from './locales/kk/common.json';
import kkHome from './locales/kk/home.json';
import kkDoors from './locales/kk/doors.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'kk'],
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        common: ruCommon,
        home: ruHome,
        doors: ruDoors,
      },
      kk: {
        common: kkCommon,
        home: kkHome,
        doors: kkDoors,
      },
    },
  });

export default i18n;
