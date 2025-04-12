'use client';

import { useTheme } from 'next-themes';
import { createPortal } from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';

import {
  LaptopMinimalIcon,
  LucideProps,
  MoonIcon,
  SunIcon,
} from 'lucide-react';

import { Backdrop } from '@/components/ui/backdrop';

import { menuAnimation } from '@/constants/animations';
import { DictionaryComponentProps } from '@/dictionaries';
import { cn } from '@/utils/cn';

import { HeaderMenuProps, menuHeaderClassName } from './common';

type Props = DictionaryComponentProps & HeaderMenuProps;

type Theme = 'dark' | 'light' | 'system';

export function ThemeMenu({ dictionary, opened, toggle, x, scrollY }: Props) {
  const { resolvedTheme, setTheme, themes } = useTheme();

  return (
    <Backdrop opened={opened} transparent={true} toggle={toggle}>
      <AnimatePresence>
        {opened && (
          <motion.div
            className={menuHeaderClassName}
            style={{
              left: x ? x - 100 : 0,
              top: `calc(var(--header-height) + 5px + ${scrollY}px)`,
            }}
            {...menuAnimation}>
            {(themes as Theme[]).map(theme => (
              <button
                key={theme}
                className={cn('flex items-center gap-2 text-xs font-semibold', {
                  'text-main': resolvedTheme == theme,
                })}
                onClick={() => setTheme(theme)}
                suppressHydrationWarning={true}>
                <ThemeIcon theme={theme} size={18} className="fill-current" />
                <span className="font-semibold">{dictionary.theme[theme]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Backdrop>
  );
}

function ThemeIcon({ theme, ...props }: LucideProps & { theme: string }) {
  if (theme == 'light') return <SunIcon {...props} />;

  if (theme == 'dark') return <MoonIcon {...props} />;

  return <LaptopMinimalIcon {...props} />;
}
