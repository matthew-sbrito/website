'use client';

import { useTheme } from 'next-themes';
import { ReactNode } from 'react';

import { Toaster } from 'sonner';

type Props = {
  children: ReactNode;
};

export function ToastProvider({ children }: Props) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <Toaster
        theme={resolvedTheme === 'light' ? 'light' : 'dark'}
        duration={4000}
        position="top-right"
        richColors
      />
      {children}
    </>
  );
}
