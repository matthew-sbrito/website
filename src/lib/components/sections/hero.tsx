import Image from 'next/image';

import { ArrowRight } from 'lucide-react';

import { DictionaryComponentProps } from '@/dictionaries';

import { Typing } from '@/components/ui/typing';

type Props = DictionaryComponentProps;

export function Hero({ dictionary }: Props) {
  return (
    <section
      id="home"
      className="grid-child min-h-[--view-height] flex flex-col lg:flex-row items-center justify-center lg:gap-2">
      <div className="w-[90%] grid place-items-center lg:w-[60%]">
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
              <span
                key={index}
                className="text-main-light bg-main-dark text-xs lg:text-sm font-semibold py-1 px-3 rounded-lg">
                {chip}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="text-white cursor-pointer bg-main py-2 px-3 lg:py-3 lg:px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-main transition-all disabled:opacity-50 w-max shadow-button text-sm lg:text-base">
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
      </div>
      <div className="grid place-items-center w-[100%] lg:w-[40%] p-3">
        <div className="relative w-[17rem] h-[17rem] lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden">
          <Image
            className="object-cover"
            src="/images/me.jpg"
            alt="Matheus Brito's Photo"
            fill
          />
        </div>
      </div>
    </section>
  );
}
