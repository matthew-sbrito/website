import { DictionaryComponentProps } from '@/dictionaries';

import { HeroText } from './hero-text';
import { Me } from './me';

type Props = DictionaryComponentProps;

export function Hero({ dictionary }: Props) {
  return (
    <section
      id="home"
      className="grid-child min-h-[--view-height] flex flex-col lg:flex-row items-center justify-center gap-2">
      <HeroText dictionary={dictionary} />
      <Me />
    </section>
  );
}
