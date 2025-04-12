'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { MenuIcon } from 'lucide-react';

import { DictionaryComponentProps } from '@/dictionaries';

import { LinksSection } from './links';
import { LocaleButton } from './locale-button';
import { LocaleMenu } from './locale-menu';
import { ThemeButton } from './theme-button';
import { ThemeMenu } from './theme-menu';

type Props = DictionaryComponentProps;

export function Header({ dictionary }: Props) {
  const [scrollY, setScrollY] = useState(0);

  const [menuLocaleOpen, setMenuLocaleOpen] = useState(false);
  const localeRef = useRef<HTMLButtonElement>(null);
  const localeRect = localeRef.current?.getBoundingClientRect();

  const [menuThemeOpen, setMenuThemeOpen] = useState(false);
  const themeRef = useRef<HTMLButtonElement>(null);
  const themeRect = themeRef.current?.getBoundingClientRect();

  useEffect(() => {
    const ac = new AbortController();

    setScrollY(window.scrollY);
    window.addEventListener('scroll', () => setScrollY(window.scrollY), ac);

    return () => ac.abort();
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
            <div className="relative w-[2rem] h-[2rem] rounded-full overflow-hidden">
              <Image
                className="object-cover"
                src="/images/me.jpg"
                alt="Matheus Brito's Photo"
                fill
              />
            </div>
          </a>
          {/* Desktop menu */}
          <div className="absolute lg:relative">
            <LinksSection dictionary={dictionary}>
            <li className='p-1'>
              <ThemeButton
              dictionary={dictionary}
              onClick={() => setMenuThemeOpen(true)}
              ref={themeRef}
            />
            </li>
            <li className='p-1'>
              <LocaleButton
              dictionary={dictionary}
              onClick={() => setMenuLocaleOpen(true)}
              ref={localeRef}
            />
            </li>
            </LinksSection>            
          </div>

          {/* Mobile toggle menu */}
          <div className="flex gap-3 items-center lg:hidden">
            <MenuIcon size={20}></MenuIcon>
          </div>
        </nav>
      </header>
      <ThemeMenu
        x={themeRect?.x}
        scrollY={scrollY}
        opened={menuThemeOpen}
        toggle={setMenuThemeOpen}
        dictionary={dictionary}
      />
      <LocaleMenu
        dictionary={dictionary}
        x={localeRect?.x}
        scrollY={scrollY}
        opened={menuLocaleOpen}
        toggle={setMenuLocaleOpen}
      />
    </>
  );
}
