import Image from 'next/image';

import { DictionaryComponentProps } from '@/dictionaries';

import { SectionContainer } from './container';

type Props = DictionaryComponentProps;

export function About({ dictionary }: Props) {
  return (
    <SectionContainer
      id="about"
      title={dictionary.about.heading}
      subtitle={dictionary.about.subHeading}>
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
    </SectionContainer>
  );
}
