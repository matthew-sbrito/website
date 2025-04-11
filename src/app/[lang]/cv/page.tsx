import { redirect } from 'next/navigation';

import { DictionaryPageProps, getDictionary } from '@/dictionaries';

type Props = DictionaryPageProps;

export default async function CV({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  return redirect(dictionary.resume.redirectLink);
}
