'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { ArrowRight } from 'lucide-react';

import { SocialMedias } from '@/components/medias';
import { Typing } from '@/components/ui/typing';

import { scaleAnimation } from '@/constants/animations';
import { STARTED_CAREER_AT } from '@/constants/career';
import { DictionaryComponentProps } from '@/dictionaries';
import { getExperienceTime } from '@/utils/get-experience-time';

type Props = DictionaryComponentProps;

export function HeroText({ dictionary }: Props) {
  const experienceTime = getExperienceTime(
    dictionary.locale,
    STARTED_CAREER_AT
  );

  return (
    <motion.div
      className="grid w-[90%] place-items-center lg:w-[60%]"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}>
      <div className="min-h-36 w-full p-1 lg:min-h-40 lg:p-3">
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          {dictionary.home.greetings}
        </h1>
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          {dictionary.home.me}{' '}
          <span className="text-main">{dictionary.home.myName}</span>
        </h1>
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          {dictionary.home.whatIAm.concat(' ')}
        </h2>
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          <Typing
            className="font-bold text-main"
            words={dictionary.home.whatIAmList}
          />
        </h2>
      </div>
      <div className="flex w-full flex-col gap-3 lg:gap-4 lg:ps-4">
        <div className="flex flex-wrap gap-2">
          <motion.div {...scaleAnimation} transition={{ delay: 0.6 }}>
            <span className="rounded-lg bg-main-dark px-3 py-1 text-xs font-semibold text-main-light lg:text-sm">
              +{experienceTime} {dictionary.skills.experience}
            </span>
          </motion.div>
        </div>
        <SocialMedias dictionary={dictionary} />
        <a
          href="#contact"
          className="shadow-button flex w-max cursor-pointer items-center justify-center gap-2 rounded-lg bg-main px-3 py-2 text-sm text-white transition-all duration-200 ease-in hover:bg-main-light disabled:opacity-50 lg:px-4 lg:py-2.5 lg:text-base">
          <span className="font-semibold">{dictionary.home.getInTouch}</span>
          <ArrowRight size={20} />
        </a>
      </div>
    </motion.div>
  );
}
