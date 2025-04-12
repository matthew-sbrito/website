'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { StackModel } from '@/models/stack.model';

type Props = {
  index: number;
  stack: StackModel;
  suffixMonths: string;
  suffixYears: string;
};

export function SkillCard({ index, stack, suffixMonths, suffixYears }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.25, delay: index * 0.1 }}>
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-foreground/10 p-6 duration-200 ease-in hover:bg-main-light/20 hover:text-main dark:hover:bg-main-light/10">
        <div className="flex w-full items-center justify-between">
          <span className="text-md font-semibold sm:text-lg lg:text-xl">
            {stack.name}
          </span>
          <Image src={stack.imageUrl} alt={stack.name} width={25} height={25} />
        </div>
        {'months' in stack ? (
          <div className="w-full">
            {stack.months} {suffixMonths}
          </div>
        ) : null}
        {'years' in stack ? (
          <div className="w-full">
            {stack.years} {suffixYears}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
