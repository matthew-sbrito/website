'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { MenuIcon } from 'lucide-react';

import { DictionaryComponentProps } from '@/dictionaries';

import { LinksSection } from './links';
import { LocaleButton } from './locale-button';
import { LocaleMenu } from './locale-menu';
import { MobileMenu } from './mobile-menu';
import { ThemeButton } from './theme-button';
import { ThemeMenu } from './theme-menu';

type Props = DictionaryComponentProps;

export function Header({ dictionary }: Props) {
  const [scrollY, setScrollY] = useState(0);

  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

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
    if (menuLocaleOpen || menuThemeOpen || menuMobileOpen) {
      window.document.body.style.overflowY = 'hidden';
      return;
    }

    window.document.body.style.overflowY = 'auto';
  }, [menuLocaleOpen, menuThemeOpen, menuMobileOpen]);

  return (
    <>
      <header className="grid-container sticky top-0 z-20 h-[--header-height] gap-2 bg-gradient-to-b from-background/75 to-transparent lg:pt-1 print:h-0">
        <nav className="grid-child flex h-full items-center justify-between border bg-card/75 px-3 py-1 text-card-foreground backdrop-blur-md lg:rounded-2xl print:hidden">
          <a href="#home">
            <div className="relative h-[2rem] w-[2rem] overflow-hidden rounded-full">
              <Image
                className="object-cover"
                src="/images/me.jpg"
                alt="Matheus Brito's Photo"
                fill
              />
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LinksSection dictionary={dictionary} />
            </div>
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
            {/* Mobile toggle menu */}
            <div className="flex items-center gap-3 lg:hidden">
              <MenuIcon
                size={20}
                onClick={() =>
                  setMenuMobileOpen(current => !current)
                }></MenuIcon>
            </div>
          </div>
        </nav>
      </header>
      <MobileMenu
        dictionary={dictionary}
        opened={menuMobileOpen}
        toggle={setMenuMobileOpen}
      />
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
