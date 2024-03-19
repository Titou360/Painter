import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import aboutTranslationEN from './public/locales/en/about.json';
import aboutTranslationFR from './public/locales/fr/about.json';

import headerTranslationsEN from './public/locales/en/header.json';
import headerTranslationsFR from './public/locales/fr/header.json';

import navbarTranslationEN from './public/locales/en/navbar.json';
import navbarTranslationFR from './public/locales/fr/navbar.json';

import extraFooterTranslationEN from './public/locales/en/extraFooter.json';
import extraFooterTranslationFR from './public/locales/fr/extraFooter.json';

import scrollInfoEN from './public/locales/en/scrollInfo.json';
import scrollInfoFR from './public/locales/fr/scrollInfo.json';

import heroEN from './public/locales/en/hero.json';
import heroFR from './public/locales/fr/hero.json';



const resources = {
  en: {
    header: headerTranslationsEN,
    navbar: navbarTranslationEN,
    about: aboutTranslationEN,
    extraFooter: extraFooterTranslationEN,
    scrollInfo: scrollInfoEN,
    hero: heroEN
  },
  fr: {
    header: headerTranslationsFR,
    navbar: navbarTranslationFR,
    about: aboutTranslationFR,
    extraFooter: extraFooterTranslationFR,
    scrollInfo: scrollInfoFR,
    hero: heroFR
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
