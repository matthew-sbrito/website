import { redirect } from 'next/navigation';

import { DictionaryPageProps, getDictionary } from '@/dictionaries';

type Props = DictionaryPageProps;

export default async function CV({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return redirect(dictionary.resume.redirectLink);
}
