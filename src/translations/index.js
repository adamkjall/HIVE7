// NOTE: This is a fairly simplified language definition.
// In case you need to build an extensive multilingual application,
// It is probably worth having a look at setting-up i18next instead:
// https://react.i18next.com/
import en from './en';

const DEFAULT_LOCALE = 'en';

const TRANSLATIONS = {
  en
};

/**
 * Get translations dictionary for a given locale
 * It is strongly recommended to get the locale from the URL as a parameter
 * E.g: /:locale/page-1 --> /en/page-1
 *
 * It is then easy to access it from ReactRouter using withRouter:
 * @see https://reacttraining.com/react-router/web/example/url-params
 *
 * @param string locale
 *
 * @return object
 */
export const getTranslations = locale =>
  locale in TRANSLATIONS ? TRANSLATIONS[locale] : TRANSLATIONS[DEFAULT_LOCALE];
