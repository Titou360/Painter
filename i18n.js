import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import headerTranslationsEN from './public/locales/en/header.json';
import headerTranslationsFR from './public/locales/fr/header.json';

const resources = {
  en: {
    header: headerTranslationsEN
  },
  fr: {
    header: headerTranslationsFR
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
