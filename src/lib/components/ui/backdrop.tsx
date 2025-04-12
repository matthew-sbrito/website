'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Variants, motion } from 'framer-motion';

import { cn } from '@/utils/cn';

export const backdropVariants: Variants = {
  opened: {
    opacity: 1,
    pointerEvents: 'auto',
  },
  closed: {
    opacity: 0,
    pointerEvents: 'none',
  },
};

type Props = {
  opened: boolean;
  transparent?: boolean;
  toggle: (opened: boolean) => void;
  children: ReactNode;
};

export function Backdrop({ opened, transparent, toggle, children }: Props) {
  return createPortal(
    <div>
      <motion.div
        className={cn('fixed w-screen h-screen inset-0 z-30', {
          'bg-black/30': !transparent,
        })}
        initial="inactive"
        animate={opened ? 'opened' : 'closed'}
        variants={backdropVariants}
        onClick={() => toggle(false)}></motion.div>
      {children}
    </div>,
    document.body
  );
}
