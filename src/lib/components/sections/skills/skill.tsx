'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { DictionaryComponentProps } from '@/dictionaries';
import { StackModel } from '@/models/stack.model';
import { getStackExperienceTime } from '@/utils/get-experience-time';

type Props = DictionaryComponentProps & {
  index: number;
  stack: StackModel;
};

export function SkillCard({ index, stack, dictionary }: Props) {
  const experienceTime = getStackExperienceTime(
    dictionary.locale,
    stack.startedAt
  );

  return (
    <motion.article
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.25, delay: index * 0.1 }}>
      <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-foreground/10 p-5 duration-200 ease-in hover:bg-main-light/20 hover:text-main dark:hover:bg-main-light/10">
        <div className="flex w-full items-center justify-between">
          <span className="font-semibold text-md sm:text-base lg:text-lg">
            {stack.name}
          </span>
          <Image src={stack.imageUrl} alt={stack.name} width={25} height={25} />
        </div>
        <div className="w-full">
          <span className="text-sm sm:text-md lg:text-base">
            {experienceTime} {dictionary.skills.experience}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
