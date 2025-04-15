import { Header } from '@/components/header';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Experiences } from '@/components/sections/experiences';
import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';

import { DictionaryPageProps, getDictionary } from '@/dictionaries';

type Props = DictionaryPageProps;

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary} />
      <main className="grid-container gap-y-10 scroll-smooth px-4 pb-8 lg:px-8">
        <Hero dictionary={dictionary} />
        <About dictionary={dictionary} />
        <Skills dictionary={dictionary} />
        <Experiences dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <footer className="h-16"></footer>
    </>
  );
}
