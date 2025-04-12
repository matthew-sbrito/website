import 'server-only';

export type Locales = 'en' | 'pt';

export type DictionaryPageProps = { params: Promise<{ lang: Locales }> };

export type DictionaryComponentProps = { dictionary: Dictionary };

const dictionaries = {
  en: () => import('./en/dictionary.json').then(module => module.default),
  pt: () => import('./pt/dictionary.json').then(module => module.default),
};

export const getDictionary = async (locale: Locales) => {
  const dictionary =
    locale in dictionaries ? dictionaries[locale] : dictionaries.en;
  return dictionary();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
