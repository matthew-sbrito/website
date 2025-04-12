import { DictionaryComponentProps } from '@/dictionaries';

import { HeroText } from './hero-text';
import { Me } from './me';

type Props = DictionaryComponentProps;

export function Hero({ dictionary }: Props) {
  return (
    <section
      id="home"
      className="grid-child flex min-h-[--view-height] flex-col items-center justify-center gap-2 lg:flex-row">
      <HeroText dictionary={dictionary} />
      <Me />
    </section>
  );
}
