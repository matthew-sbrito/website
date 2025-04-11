import { DictionaryPageProps, getDictionary } from '@/dictionaries';

import { Header } from '@/components/header';
import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { ToUp } from '@/components/ui/to-up';

type Props = DictionaryPageProps;

export default async function Page({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary} />
      <main className="grid-container gap-y-10 px-4 pb-8 lg:px-8 scroll-smooth">
        <Hero dictionary={dictionary} />
        <About dictionary={dictionary} />
        <Skills dictionary={dictionary} />
      </main>
      <ToUp />
    </>
  );
}
