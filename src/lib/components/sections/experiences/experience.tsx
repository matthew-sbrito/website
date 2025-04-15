'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { fromBottomAnimation, scaleAnimation } from '@/constants/animations';
import { DictionaryComponentProps } from '@/dictionaries';
import { Experience } from '@/models/experience.model';
import { getDateLabel } from '@/utils/get-date-label';

type Props = DictionaryComponentProps & {
  index: number;
  experience: Experience;
};

export function ExperienceCard({ dictionary, index, experience }: Props) {
  const dateLabel = getDateLabel(
    dictionary.locale,
    experience.startedAt,
    experience.endedAt
  );

  return (
    <motion.article
      className="flex gap-8"
      {...fromBottomAnimation}
      transition={{ delay: index * 0.1, type: 'spring' }}>
      <div className="flex flex-col items-center px-2 gap-3">
        {experience.imageUrl ? (
          <div className="relative w-[3.75rem] h-[5rem] border border-gray-500 rounded-full overflow-hidden p-2">
            <Image
              className="object-cover"
              alt={experience.company}
              src={experience.imageUrl}
              fill
            />
          </div>
        ) : (
          <div className="ps-16"></div>
        )}

        <div className="h-full w-[1px] bg-gray-600"></div>
      </div>
      <div className="flex flex-col gap-2">
        {experience.link ? (
          <a
            href={experience.link}
            target="_blank"
            className="text-gray-500 hover:text-main transition duration-200 max-w-max">
            @ {experience.company}
          </a>
        ) : (
          <span className="text-gray-500">@ {experience.company}</span>
        )}
        <span className="dark:text-gray-300">
          {dictionary.experiences.positions[experience.key]}
        </span>
        <div className="flex gap-2 text-gray-500">
          <span>{dateLabel}</span>
        </div>
        <p className="dark:text-gray-300">
          {dictionary.experiences.descriptions[experience.key]}
        </p>
        <div className="flex flex-col pt-2 pb-6 gap-3">
          <span className="text-sm lg:text-md text-main font-bold">
            {dictionary.experiences.skills}
          </span>
          <div className="flex flex-wrap gap-x-2 gap-y-4 gap md:max-w-1/3">
            {experience.skills.map((skill, index) => (
              <motion.div
                key={index}
                {...scaleAnimation}
                transition={{ delay: 0.6 + index * 0.1 }}>
                <span className="rounded-lg text-nowrap bg-main-dark px-3 py-2 text-sm font-semibold text-main-light lg:text-sm">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
