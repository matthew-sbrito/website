import { DictionaryComponentProps } from '@/dictionaries';

import { SectionContainer } from '../container';
import { AboutText } from './about-text';
import { AboutImage } from './about-image';

type Props = DictionaryComponentProps;

export function About({ dictionary }: Props) {
  return (
    <SectionContainer
      id="about"
      title={dictionary.about.heading}
      subtitle={dictionary.about.subHeading}>
      <div className="flex flex-col 2xl:flex-row items-center gap-12">
        <AboutText description={dictionary.about.description} />
       <AboutImage />
      </div>
    </SectionContainer>
  );
}
