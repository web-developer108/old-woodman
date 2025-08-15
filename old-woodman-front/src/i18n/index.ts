import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ruCart from './locales/ru/cart.json';
import ruCommon from './locales/ru/common.json';
import ruContacts from './locales/ru/contacts.json';
import ruDoors from './locales/ru/doors.json';
import ruFacades from './locales/ru/facades.json';
import ruFavorites from './locales/ru/favorites.json';
import ruFurniture from './locales/ru/furniture.json';
import ruGifts from './locales/ru/gifts.json';
import ruHome from './locales/ru/home.json';
import ruInfo from './locales/ru/info.json';
import ruPolicy from './locales/ru/privacy-policy.json';
import ruPromotions from './locales/ru/promotions.json';
import ruSeo from './locales/ru/seo.json';
import ruTerms from './locales/ru/terms.json';
import kkCart from './locales/kk/cart.json';
import kkCommon from './locales/kk/common.json';
import kkContacts from './locales/kk/contacts.json';
import kkDoors from './locales/kk/doors.json';
import kkFacades from './locales/kk/facades.json';
import kkFavorites from './locales/kk/favorites.json';
import kkFurniture from './locales/kk/furniture.json';
import kkGifts from './locales/kk/gifts.json';
import kkHome from './locales/kk/home.json';
import kkInfo from './locales/kk/info.json';
import kkPolicy from './locales/kk/privacy-policy.json';
import kkPromotions from './locales/kk/promotions.json';
import kkSeo from './locales/kk/seo.json';
import kkTerms from './locales/kk/terms.json';

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
        cart: ruCart,
        common: ruCommon,
        contacts: ruContacts,
        doors: ruDoors,
        facades: ruFacades,
        favorites: ruFavorites,
        furniture: ruFurniture,
        gifts: ruGifts,
        home: ruHome,
        info: ruInfo,
        'privacy-policy': ruPolicy,
        promotions: ruPromotions,
        seo: ruSeo,
        terms: ruTerms,

      },
      kk: {
        cart: kkCart,
        common: kkCommon,
        contacts: kkContacts,
        doors: kkDoors,
        facades: kkFacades,
        favorites: kkFavorites,
        furniture: kkFurniture,
        gifts: kkGifts,
        home: kkHome,
        info: kkInfo,
        'privacy-policy': kkPolicy,
        promotions: kkPromotions,
        seo: kkSeo,
        terms: kkTerms,
      },
    },
  });

//export default i18n;
