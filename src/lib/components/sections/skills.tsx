import Image from 'next/image';

import { stackList } from '@/constants/stacks';
import { DictionaryComponentProps } from '@/dictionaries';
import { cn } from '@/utils/cn';
import { groupBy } from '@/utils/group-by';

type Props = DictionaryComponentProps;

export function Skills({ dictionary }: Props) {
  const skillsByGroup = groupBy(stackList, x => x.grouping);

  return (
    <section
      id="skills"
      className="grid-child min-h-[--view-height] flex flex-col items-center justify-center">
      <div className="pt-20 w-[90%] flex flex-col gap-6">
        <div className="flex gap-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-main">
            {dictionary.skills.heading}
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold italic">
            {dictionary.skills.subHeading}
          </h3>
        </div>
        <div className="flex flex-col">
          {skillsByGroup.map((group, index) => (
            <div
              key={group.key}
              className={cn('flex px-6 py-10 items-center bg-main/50', {
                'bg-main/35': index % 2 === 1,
              })}>
              <h4 className="min-w-48 text-lg sm:text-xl lg:text-2xl font-semibold">
                {dictionary.skills[group.key]}
              </h4>
              <div className="flex flex-row gap-4 flex-wrap">
                {group.sources.map(stack => (
                  <article
                    key={stack.name}
                    className="p-6 flex justify-center items-center gap-4 duration-200 ease-in hover:scale-105">
                    <Image
                      src={stack.imageUrl}
                      alt={stack.name}
                      width={40}
                      height={40}
                    />
                    <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                      {stack.name}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
