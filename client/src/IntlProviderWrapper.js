import React from 'react';
import { IntlProvider } from 'react-intl';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

const messages = {
  en: enTranslation,
  fr: frTranslation,
};

export default function IntlProviderWrapper({ children, locale = 'en' }) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}
