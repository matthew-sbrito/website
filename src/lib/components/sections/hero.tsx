import Image from 'next/image';

import { DictionaryComponentProps } from '@/dictionaries';

import { Typing } from '@/components/ui/typing';

type Props = DictionaryComponentProps;

export function Hero({ dictionary }: Props) {
  return (
    <section
      id="home"
      className="grid-child min-h-[--view-height] flex flex-col lg:flex-row items-center justify-center gap-2">
      <div className="w-[90%] grid place-items-center lg:w-[60%]">
        <div className="w-full min-h-40 p-3">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            {dictionary.home.greetings} {dictionary.home.me}{' '}
            <span className="text-main">{dictionary.home.myName}</span>
          </h1>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            {dictionary.home.whatIAm.concat(' ')}
            <Typing
              className="font-bold text-main"
              words={dictionary.home.whatIAmList}
            />
          </h2>
        </div>
      </div>
      <div className="w-[70%] lg:w-[40%] p-3">
        <div className="relative w-[30rem] h-[30rem] rounded-full overflow-hidden">
          <Image
            className="object-cover"
            src="/images/me.jpg"
            alt="Matheus Brito's Photo"
            fill
          />
        </div>
      </div>
    </section>
  );
}
