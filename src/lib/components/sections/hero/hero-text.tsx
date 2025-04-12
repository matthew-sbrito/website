'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { ArrowRight } from 'lucide-react';

import { scaleAnimation } from '@/constants/animations';
import { DictionaryComponentProps } from '@/dictionaries';

import { Typing } from '@/components/ui/typing';

type Props = DictionaryComponentProps;

export function HeroText({ dictionary }: Props) {
  return (
    <motion.div
      className="w-[90%] grid place-items-center lg:w-[60%]"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}>
      <div className="w-full min-h-36 lg:min-h-40 p-1 lg:p-3">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          {dictionary.home.greetings}
        </h1>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          {dictionary.home.me}{' '}
          <span className="text-main">{dictionary.home.myName}</span>
        </h1>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          {dictionary.home.whatIAm.concat(' ')}
        </h2>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          <Typing
            className="font-bold text-main"
            words={dictionary.home.whatIAmList}
          />
        </h2>
      </div>
      <div className="w-full flex flex-col gap-3 lg:gap-4 lg:ps-4">
        <div className="flex flex-wrap gap-2">
          {dictionary.home.chips.map((chip, index) => (
            <motion.div
              key={index}
              {...scaleAnimation}
              transition={{ delay: 0.6 }}>
              <span className="text-main-light bg-main-dark text-xs lg:text-sm font-semibold py-1 px-3 rounded-lg">
                {chip}
              </span>
            </motion.div>
          ))}
        </div>
        <a
          href="#contact"
          className="text-white cursor-pointer bg-main py-2 px-3 lg:py-3 lg:px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-main-light transition-all ease-in duration-200 disabled:opacity-50 w-max shadow-button text-sm lg:text-base">
          <span className="font-semibold">{dictionary.home.getInTouch}</span>
          <ArrowRight size={20} />
        </a>
        <div className="flex items-center gap-2 lg:gap-4 px-2 lg:px-3 py-1 lg:py-2 bg-main max-w-max rounded-lg">
          <a href="https://linkedin.com/in/matthew-sbrito" target="_blank">
            <div className="relative w-5 h-5">
              <Image
                className="invert pb-1"
                src="/images/contact/linkedin.svg"
                alt="LinkedIn"
                fill
              />
            </div>
          </a>
          <a href="http://wa.me/5577998442230" target="_blank">
            <div className="relative w-4 h-4 lg:w-5 lg:h-5">
              <Image
                className="invert"
                src="/images/contact/whatsapp.svg"
                alt="Whatsapp"
                fill
              />
            </div>
          </a>
          <a href="mailto:matheusdevback@gmail.com" target="_blank">
            <div className="relative w-5 h-5 lg:w-6 lg:h-6">
              <Image
                className="invert"
                src="/images/contact/email.svg"
                alt="Email"
                fill
              />
            </div>
          </a>
          <a href="http://github.com/matthew-sbrito" target="_blank">
            <div className="relative w-4 h-4 lg:w-5 lg:h-5">
              <Image
                className="invert"
                src="/images/contact/github.svg"
                alt="Github"
                fill
              />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
