'use client';

import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { fromLeftAnimation } from '@/constants/animations';

type Props = {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function SectionContainer({ id, title, subtitle, children }: Props) {
  return (
    <section
      id={id}
      className="pt-12 lg:pt-0 grid-child min-h-[--view-height] flex flex-col items-center justify-center">
      <div className="w-[90%] flex flex-col gap-5">
        <motion.div className="flex flex-col" {...fromLeftAnimation}>
          <h2 className="text-md sm:text-lg lg:text-xl text-main">{title}</h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold italic">
            {subtitle}
          </h3>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
