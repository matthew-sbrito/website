'use client';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

import { XIcon } from 'lucide-react';

import { fromRightAnimation } from '@/constants/animations';
import { DictionaryComponentProps } from '@/dictionaries';

import { SocialMedias } from '../medias';
import { Backdrop } from '../ui/backdrop';
import { MenuProps } from './common';
import { LinksSection } from './links';

type Props = DictionaryComponentProps & MenuProps;

export function MobileMenu({ opened, toggle, dictionary }: Props) {
  return (
    <Backdrop className="lg:hidden" opened={opened} toggle={toggle}>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="fixed right-0 top-0 z-40 h-dvh w-3/5 bg-background"
            {...fromRightAnimation}>
            <div className="h-full flex flex-col justify-center py-14 gap-4">
              <button
                className="absolute top-4 right-4"
                onClick={() => toggle(false)}>
                <XIcon />
              </button>
              {/* Header */}
              <div className="flex flex-col gap-4">
                <span className="h-[1px] w-full bg-main"></span>
                <div className="flex items-center px-3 gap-2">
                  <div className="relative w-7 h-7">
                    <Image
                      className="object-contain"
                      alt="rocket"
                      src="/favicon.ico"
                      fill
                    />
                  </div>
                  <span className="flex-1 text-sm text-center">
                    {dictionary.header.together}
                  </span>
                </div>
                <span className="h-[1px] w-full bg-main"></span>
              </div>
              {/* Links */}
              <div className="px-6 flex-1">
                <LinksSection
                  dictionary={dictionary}
                  afterSection={() => toggle(false)}
                />
              </div>
              {/* Medias */}
              <div className="flex flex-col items-center gap-4">
                <span className="h-[1px] w-full bg-main"></span>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-bold italic">
                    {dictionary.contact.subtitle}
                  </span>
                  <SocialMedias dictionary={dictionary} />
                </div>
                <span className="h-[1px] w-full bg-main"></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Backdrop>
  );
}
