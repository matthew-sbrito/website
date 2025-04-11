import Image from 'next/image';

import { DictionaryComponentProps } from '@/dictionaries';

type Props = DictionaryComponentProps;

export function About({ dictionary }: Props) {
  return (
    <section
      id="about"
      className="grid-child min-h-[--view-height] flex flex-col items-center justify-center">
      <div className="w-[90%] flex flex-col gap-5">
        <div className="flex gap-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-main">
            {dictionary.about.heading}
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold italic">
            {dictionary.about.subHeading}
          </h3>
        </div>
        <div className="flex flex-col 2xl:flex-row items-center gap-12">
          <div className="flex flex-col gap-2.5 font-medium">
            {dictionary.about.description.split('\n').map((text, key) => (
              <p key={key}>{text}</p>
            ))}
          </div>
          <Image
            className="shadow-lg rounded-xl shadow-main"
            src="/images/coding-screen.png"
            alt="Coding..."
            width={480}
            height={270}
          />
        </div>
      </div>
    </section>
  );
}
