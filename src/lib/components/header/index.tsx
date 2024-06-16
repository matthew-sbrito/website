'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { LoaderCircleIcon } from 'lucide-react';

import { DictionaryComponentProps } from '@/dictionaries';

import { LinksSection } from './links';
import { LocaleButton } from './locale-button';
import { LocaleMenu } from './locale-menu';
import { ThemeButton } from './theme-button';
import { ThemeMenu } from './theme-menu';

type Props = DictionaryComponentProps<{}>;

export function Header({ dictionary }: Props) {
  const [scrollY, setScrollY] = useState(0);

  const [menuLocaleOpen, setMenuLocaleOpen] = useState(false);
  const localeRef = useRef<HTMLButtonElement>(null);
  const localeRect = localeRef.current?.getBoundingClientRect();

  const [menuThemeOpen, setMenuThemeOpen] = useState(false);
  const themeRef = useRef<HTMLButtonElement>(null);
  const themeRect = themeRef.current?.getBoundingClientRect();

  useEffect(() => {
    const updateScroll = () => setScrollY(window.scrollY);

    updateScroll();

    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    if (menuLocaleOpen || menuThemeOpen) {
      window.document.body.style.overflowY = 'hidden';
      return;
    }

    window.document.body.style.overflowY = 'auto';
  }, [menuLocaleOpen, menuThemeOpen]);

  return (
    <>
      <header className="grid-container sticky top-0 z-20 h-[--header-height] gap-2 bg-gradient-to-b from-background/75 to-transparent md:pt-1 print:h-0">
        <nav className="grid-child flex h-full items-center justify-between border bg-card/75 px-3 py-1 text-card-foreground backdrop-blur-md md:rounded-2xl print:hidden">
          <a href="#home">
            <Image
              src="/images/me.png"
              alt="Matheus Brito's Photo"
              width={32}
              height={32}
            />
          </a>
          <div className="flex gap-3">
            <LinksSection dictionary={dictionary} />
            <ThemeButton
              dictionary={dictionary}
              onClick={() => setMenuThemeOpen(true)}
              ref={themeRef}
            />
            <LocaleButton
              dictionary={dictionary}
              onClick={() => setMenuLocaleOpen(true)}
              ref={localeRef}
            />
          </div>
        </nav>
      </header>
      <LocaleMenu
        dictionary={dictionary}
        x={localeRect?.x}
        scrollY={scrollY}
        open={menuLocaleOpen}
        toggle={setMenuLocaleOpen}
      />
      <ThemeMenu
        x={themeRect?.x}
        scrollY={scrollY}
        open={menuThemeOpen}
        toggle={setMenuThemeOpen}
        dictionary={dictionary}
      />
    </>
  );
}

function LoadingIcons() {
  return (
    <div className="flex items-center gap-1 max-h-min">
      <LoaderCircleIcon className="animate-spin" size={18} />
    </div>
  );
}
