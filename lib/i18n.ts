'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import id from '../public/locales/id/common.json';
import en from '../public/locales/en/common.json';

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        id: { common: id },
        en: { common: en },
      },
      fallbackLng: 'id',
      lng: 'id',
      ns: ['common'],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
      react: { useSuspense: false },
    });
}

export default i18n; 