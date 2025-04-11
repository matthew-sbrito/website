import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import { DictionaryComponentProps, Locales } from '@/dictionaries';
import { cn } from '@/utils/cn';

import { Backdrop } from '@/components/ui/backdrop';

import {
  HeaderMenuProps,
  headerMenuVariants,
  menuHeaderClassName,
} from './common';

type Props = DictionaryComponentProps & HeaderMenuProps;

export function LocaleMenu({ opened, toggle, x, scrollY, dictionary }: Props) {
  const router = useRouter();

  function switchLocale(locale: Locales) {
    const localePath = `/${locale}`;

    if (window.location.href.includes(localePath)) return;

    const pathnameNoLocale = window.location.href
      .replace('/en', localePath)
      .replace('/pt', localePath);

    window.history.replaceState(null, '', pathnameNoLocale);

    router.replace(pathnameNoLocale);
  }

  return (
    <Backdrop opened={opened} transparent={true} toggle={toggle}>
      <motion.div
        className={cn(menuHeaderClassName, 'w-40')}
        style={{
          left: x ? x - 130 : 0,
          top: `calc(var(--header-height) + 5px + ${scrollY}px)`,
        }}
        initial="closed"
        animate={opened ? 'opened' : 'closed'}
        variants={headerMenuVariants}>
        <button
          className={cn('flex gap-2 items-center text-xs font-semibold', {
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
          className={cn('flex gap-2 items-center text-xs font-semibold', {
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
    </Backdrop>
  );
}
