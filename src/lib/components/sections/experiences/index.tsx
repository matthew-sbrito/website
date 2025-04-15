import { experiences } from '@/constants/experiences';
import { DictionaryComponentProps } from '@/dictionaries';

import { SectionContainer } from '../container';
import { ExperienceCard } from './experience';

type Props = DictionaryComponentProps;

export function Experiences({ dictionary }: Props) {
  return (
    <SectionContainer
      id="experiences"
      title={dictionary.experiences.title}
      subtitle={dictionary.experiences.subtitle}>
      <div className="pt-6 flex flex-col gap-4">
        {experiences.map((experience, itemIndex) => (
          <ExperienceCard
            key={itemIndex}
            index={itemIndex}
            experience={experience}
            dictionary={dictionary}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
