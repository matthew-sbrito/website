import { ComponentProps } from 'react';

import { motion } from 'framer-motion';

type AnimationProps = ComponentProps<typeof motion.div>;

export const scaleAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

export const fadeUpYAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export const fadeUpXAnimation: AnimationProps = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};
