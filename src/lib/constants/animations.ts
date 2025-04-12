import { ComponentProps } from 'react';

import { motion } from 'framer-motion';

type AnimationProps = ComponentProps<typeof motion.div>;

export const scaleAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

export const fromTopAnimation = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export const fromBottomAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export const fromLeftAnimation: AnimationProps = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export const fromRightAnimation: AnimationProps = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export const menuAnimation: AnimationProps = {
  initial: {
    opacity: 0,
    scale: 0,
    pointerEvents: 'none',
  },
  animate: {
    opacity: 1,
    scale: 1,
    pointerEvents: 'auto',
  },
  exit: {
    opacity: 0,
    scale: 0,
    pointerEvents: 'none',
  },
};
