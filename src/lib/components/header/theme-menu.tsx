'use client';

import { useTheme } from 'next-themes';
import { createPortal } from 'react-dom';

import { motion } from 'framer-motion';

import {
  LaptopMinimalIcon,
  LucideProps,
  MoonIcon,
  SunIcon,
} from 'lucide-react';

import { DictionaryComponentProps } from '@/dictionaries';
import { cn } from '@/utils/cn';

import { Backdrop } from '@/components/ui/backdrop';

import {
  HeaderMenuProps,
  headerMenuVariants,
  menuHeaderClassName,
} from './common';

type Props = DictionaryComponentProps & HeaderMenuProps;

type Theme = 'dark' | 'light' | 'system';

export function ThemeMenu({
  dictionary,
  opened: open,
  toggle,
  x,
  scrollY,
}: Props) {
  const { theme: currentTheme, setTheme, themes } = useTheme();

  return (
    <Backdrop opened={open} transparent={true} toggle={toggle}>
      <motion.div
        className={menuHeaderClassName}
        style={{
          left: x ? x - 100 : 0,
          top: `calc(var(--header-height) + 5px + ${scrollY}px)`,
        }}
        initial="closed"
        animate={open ? 'opened' : 'closed'}
        variants={headerMenuVariants}>
        {(themes as Theme[]).map(theme => (
          <button
            key={theme}
            className={cn('flex gap-2 items-center text-xs font-semibold', {
              'text-main': currentTheme == theme,
            })}
            onClick={() => setTheme(theme)}
            suppressHydrationWarning={true}>
            <ThemeIcon theme={theme} size={18} className="fill-current" />
            <span className="font-semibold">{dictionary.theme[theme]}</span>
          </button>
        ))}
      </motion.div>
    </Backdrop>
  );
}

function ThemeIcon({ theme, ...props }: LucideProps & { theme: string }) {
  if (theme == 'light') return <SunIcon {...props} />;

  if (theme == 'dark') return <MoonIcon {...props} />;

  return <LaptopMinimalIcon {...props} />;
}
