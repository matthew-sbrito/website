'use client';

import { motion } from 'framer-motion';

import { fromLeftAnimation } from '@/constants/animations';

type Props = {
  description: string;
};

export function AboutText({ description }: Props) {
  return (
    <div className="flex flex-col gap-2.5 font-medium">
      {description.split('\n').map((text, index) => (
        <motion.p
          key={index}
          {...fromLeftAnimation}
          transition={{ delay: 0.1 * index }}>
          {text}
        </motion.p>
      ))}
    </div>
  );
}
