import Image from 'next/image';

import { stackList } from '@/constants/stacks';
import { DictionaryComponentProps } from '@/dictionaries';
import { cn } from '@/utils/cn';
import { groupBy } from '@/utils/group-by';

import { SectionContainer } from './container';

type Props = DictionaryComponentProps;

export function Skills({ dictionary }: Props) {
  const skillsByGroup = groupBy(stackList, x => x.grouping);

  return (
    <SectionContainer
      id="skills"
      title={dictionary.skills.heading}
      subtitle={dictionary.skills.subHeading}>
      <div className="flex flex-col">
        {skillsByGroup.map((group, index) => (
          <div
            key={group.key}
            className={cn('py-8 flex flex-col lg:flex-row gap-4', {
              'border-b border-main': index !== skillsByGroup.length - 1,
            })}>
            <h4 className="lg:min-w-48 text-lg sm:text-xl lg:text-2xl font-semibold text-main-light italic">
              {dictionary.skills[group.key]}
            </h4>
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
              {group.sources.map(stack => (
                <article
                  key={stack.name}
                  className="p-6 flex flex-col justify-center items-center gap-2 duration-200 ease-in bg-foreground/10 rounded-lg hover:text-main hover:bg-main-light/20 dark:hover:bg-main-light/10">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-md sm:text-lg lg:text-xl font-semibold">
                      {stack.name}
                    </span>
                    <Image
                      src={stack.imageUrl}
                      alt={stack.name}
                      width={25}
                      height={25}
                    />
                  </div>
                  {'months' in stack ? (
                    <div className="w-full">
                      {stack.months} {dictionary.skills.experienceMonths}
                    </div>
                  ) : null}
                  {'years' in stack ? (
                    <div className="w-full">
                      {stack.years} {dictionary.skills.experienceYears}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
