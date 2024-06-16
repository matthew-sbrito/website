'use client';

import { Variants, motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const backdropVariants: Variants = {
  active: {
    opacity: 1,
    pointerEvents: 'auto',
  },
  inactive: {
    opacity: 0,
    pointerEvents: 'none',
  },
};

type Props = {
  active: boolean;
  transparent?: boolean;
  toggle: (active: boolean) => void;
};

export function Backdrop({ active, transparent, toggle }: Props) {
  return (
    <motion.div
      className={cn('fixed w-screen h-screen inset-0 z-30', {
        'bg-black/30': !transparent,
      })}
      initial="inactive"
      animate={active ? 'active' : 'inactive'}
      variants={backdropVariants}
      onClick={() => toggle(false)}></motion.div>
  );
}
