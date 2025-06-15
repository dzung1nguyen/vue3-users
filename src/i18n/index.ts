import { createI18n } from 'vue-i18n';
import en from './en';
import config from '@/config';

const { locale, fallbackLocale } = config;

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale,
  messages: {
    en,
  },
});

export default i18n;
