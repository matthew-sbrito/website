import { stackList } from '@/constants/stacks';
import { DictionaryComponentProps } from '@/dictionaries';
import { cn } from '@/utils/cn';
import { groupBy } from '@/utils/group-by';

import { SectionContainer } from '../container';
import { SkillCard } from './skill';

type Props = DictionaryComponentProps;

export function Skills({ dictionary }: Props) {
  const skillsByGroup = groupBy(stackList, x => x.grouping);

  return (
    <SectionContainer
      id="skills"
      title={dictionary.skills.heading}
      subtitle={dictionary.skills.subHeading}>
      <div className="flex flex-col">
        {skillsByGroup.map((group, groupIndex) => (
          <div
            key={group.key}
            className={cn('py-8 flex flex-col lg:flex-row gap-4', {
              'border-b border-main': groupIndex !== skillsByGroup.length - 1,
            })}>
            <h4 className="lg:min-w-48 text-lg sm:text-xl lg:text-2xl font-semibold text-main-light italic">
              {dictionary.skills[group.key]}
            </h4>
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
              {group.sources.map((stack, itemIndex) => (
                <SkillCard
                  key={stack.name}
                  index={itemIndex}
                  stack={stack}
                  suffixMonths={dictionary.skills.experienceMonths}
                  suffixYears={dictionary.skills.experienceYears}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
