import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from '@/i18n/locales/en';
import { fr } from '@/i18n/locales/fr';
import { supportedLanguages, type Language } from '@/theme/colors';

function resolveDeviceLanguage(): Language {
  const deviceLanguage = getLocales()[0]?.languageCode ?? 'fr';
  return supportedLanguages.includes(deviceLanguage as Language)
    ? (deviceLanguage as Language)
    : 'fr';
}

export const defaultLanguage = resolveDeviceLanguage();

const resources = {
  fr: { translation: fr },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: 'fr',
  debug: __DEV__,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
