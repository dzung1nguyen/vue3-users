export default {
  appName: import.meta.env.VITE_APP_NAME ?? 'Vue',
  locale: import.meta.env.VITE_I18N_LOCALE ?? 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE ?? 'en',
};
