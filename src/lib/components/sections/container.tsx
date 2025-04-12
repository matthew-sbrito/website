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
      className="grid-child flex min-h-[--view-height] flex-col items-center justify-center pt-12 lg:pt-0">
      <div className="flex w-[90%] flex-col gap-5">
        <motion.div className="flex flex-col" {...fromLeftAnimation}>
          <h2 className="text-md text-main sm:text-lg lg:text-xl">{title}</h2>
          <h3 className="text-xl font-bold italic sm:text-2xl lg:text-3xl">
            {subtitle}
          </h3>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
