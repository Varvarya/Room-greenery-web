import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './localizations/locales/en/translations.json';
import translationUA from './localizations/locales/ua/translations.json';


const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ua',
    debug: true,
    lng: 'ua',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
