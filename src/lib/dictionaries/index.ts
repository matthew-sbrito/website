import 'server-only';

export type Locales = 'en' | 'pt';

export type DictionaryPageProps<T = unknown> = {
  params: { lang: Locales };
} & T;

export type DictionaryComponentProps<T = unknown> = {
  dictionary: Dictionary;
} & T;

const dictionaries = {
  en: () => import('./en/dictionary.json').then(module => module.default),
  pt: () => import('./pt/dictionary.json').then(module => module.default),
};

export const getDictionary = async (locale: Locales) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
