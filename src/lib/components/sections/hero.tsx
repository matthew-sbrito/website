import Image from 'next/image';

import { DictionaryComponentProps } from '@/dictionaries';

import { Typing } from '@/components/ui/typing';

type Props = DictionaryComponentProps<{}>;

export function Hero({ dictionary }: Props) {
  return (
    <section
      id="home"
      className="grid-child min-h-[--view-height] flex flex-col lg:flex-row items-center justify-center gap-2">
      <div className="w-[90%] grid place-items-center lg:w-[60%]">
        <div className="w-full min-h-40 p-3">
          <h1 className="font-bold text-2xl sm:text-3xl">
            {dictionary.home.greetings}
          </h1>
          <h1 className="font-bold text-2xl sm:text-3xl">
            {dictionary.home.me}
          </h1>
          <h2 className="font-bold text-xl sm:text-2xl">
            {dictionary.home.whatIAm.concat(' ')}
          </h2>
          <Typing
            className="font-bold text-xl sm:text-2xl text-main"
            words={dictionary.home.whatIAmList}
          />
        </div>
      </div>
      <div className="w-[70%] lg:w-[40%] p-3">
        <Image
          src="/images/me.png"
          alt="Matheus Brito's Photo"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
