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
      title={dictionary.skills.title}
      subtitle={dictionary.skills.subtitle}>
      <div className="flex flex-col gap-2">
        {skillsByGroup.map((group, groupIndex) => (
          <div
            key={group.key}
            className={cn('flex flex-col gap-4 pb-4 lg:flex-row lg:py-8', {
              'border-b border-main': groupIndex !== skillsByGroup.length - 1,
            })}>
            <h4 className="text-lg font-semibold italic text-main-light sm:text-xl lg:min-w-48 lg:text-2xl">
              {dictionary.skills[group.key]}
            </h4>
            <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
              {group.sources.map((stack, itemIndex) => (
                <SkillCard
                  key={stack.name}
                  index={itemIndex}
                  stack={stack}
                  dictionary={dictionary}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
