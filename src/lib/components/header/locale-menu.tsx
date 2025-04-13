import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';

import { Backdrop } from '@/components/ui/backdrop';

import { menuAnimation } from '@/constants/animations';
import { DictionaryComponentProps, Locales } from '@/dictionaries';
import { cn } from '@/utils/cn';

import { HeaderMenuProps, menuHeaderClassName } from './common';

type Props = DictionaryComponentProps & HeaderMenuProps;

export function LocaleMenu({ opened, toggle, x, scrollY, dictionary }: Props) {
  const router = useRouter();

  function switchLocale(locale: Locales) {
    const localePath = `/${locale}`;

    if (window.location.href.includes(localePath)) return;

    const pathnameNoLocale = window.location.href
      .replace('/en', localePath)
      .replace('/pt', localePath);

    window.location.href = pathnameNoLocale;
  }

  return (
    <Backdrop opened={opened} transparent={true} toggle={toggle}>
      <AnimatePresence>
        {opened && (
          <motion.div
            className={cn(menuHeaderClassName, 'w-40')}
            style={{
              left: x ? x - 130 : 0,
              top: `calc(var(--header-height) + 5px + ${scrollY}px)`,
            }}
            {...menuAnimation}>
            <button
              className={cn('flex items-center gap-2 text-xs font-semibold', {
                'text-main': dictionary.locale === 'en',
              })}
              onClick={() => switchLocale('en')}>
              <Image
                src="images/flags/en.svg"
                alt="United State Of America Flag"
                width={20}
                height={20}
              />
              English
            </button>
            <button
              className={cn('flex items-center gap-2 text-xs font-semibold', {
                'text-main': dictionary.locale === 'pt',
              })}
              onClick={() => switchLocale('pt')}>
              <Image
                src="images/flags/pt-br.svg"
                alt="Brazil Flag"
                width={20}
                height={20}
              />
              Português
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Backdrop>
  );
}
