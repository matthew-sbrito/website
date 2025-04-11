import { Variants } from 'framer-motion';

export const headerMenuVariants: Variants = {
  opened: {
    opacity: 1,
    scale: 1,
    pointerEvents: 'auto',
  },
  closed: {
    opacity: 0,
    scale: 0,
    pointerEvents: 'none',
  },
};

export const menuHeaderClassName =
  'z-30 border rounded-lg p-2 flex flex-col w-32 gap-3 absolute bg-card/75 backdrop-blur-sm';

export type HeaderMenuProps = {
  opened: boolean;
  toggle: (opened: boolean) => void;
  x?: number;
  scrollY?: number;
};
