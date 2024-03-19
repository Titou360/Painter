import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import headerTranslationsEN from './public/locales/en/header.json';
import headerTranslationsFR from './public/locales/fr/header.json';
import navbarTranslationEN from './public/locales/en/navbar.json';
import navbarTranslationFR from './public/locales/fr/navbar.json';



const resources = {
  en: {
    header: headerTranslationsEN,
    navbar: navbarTranslationEN,
  },
  fr: {
    header: headerTranslationsFR,
    navbar: navbarTranslationFR,
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
