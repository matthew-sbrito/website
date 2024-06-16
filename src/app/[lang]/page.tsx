import { DictionaryPageProps, getDictionary } from '@/dictionaries';
import { Header } from '@/components/header';
import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';

type Props = DictionaryPageProps;

export default async function Page({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary} />
      <main className="grid-container gap-y-10 px-4 pb-8 lg:px-8">
        <Hero dictionary={dictionary} />
        <About dictionary={dictionary} />
      </main>
    </>
  );
}
