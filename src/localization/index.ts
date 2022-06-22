import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import i18n from 'i18n-js';

export const translationGetters = {
  en: () => require('./en.json'),
};

export const Localization = (key: string) => {
  return i18n.t(key);
};
export const initLocalization = () => {
  // set i18n-js config
  i18n.translations = {
    ['en']: translationGetters.en(),
  };
};
