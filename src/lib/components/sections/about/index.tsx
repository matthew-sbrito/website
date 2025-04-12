import { DictionaryComponentProps } from '@/dictionaries';

import { SectionContainer } from '../container';
import { AboutImage } from './about-image';
import { AboutText } from './about-text';

type Props = DictionaryComponentProps;

export function About({ dictionary }: Props) {
  return (
    <SectionContainer
      id="about"
      title={dictionary.about.title}
      subtitle={dictionary.about.subtitle}>
      <div className="flex flex-col-reverse items-center gap-12 2xl:flex-row">
        <AboutText description={dictionary.about.description} />
        <AboutImage />
      </div>
    </SectionContainer>
  );
}
