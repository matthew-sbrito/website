'use client';

import { ComponentProps, useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

type State = {
  wordIndex: number;
  letterIndex: number;
  reverse: boolean;
};

type Props = ComponentProps<'span'> & { words: string[] };

export function Typing({ words, className, ...props }: Props) {
  const [state, setState] = useState<State>({
    wordIndex: 0,
    letterIndex: 0,
    reverse: false,
  });

  const word = words[state.wordIndex];
  const currentWord = word.slice(0, state.letterIndex);

  useEffect(() => {
    const timer =
      word.length !== currentWord.length ? 1500 / word.length : 1000;

    const timeout = setTimeout(() => {
      const maxLength = state.letterIndex;

      if (word.length == maxLength && !state.reverse) {
        setState(state => ({ ...state, reverse: true }));
        return;
      }

      if (currentWord.length == 0 && state.reverse) {
        const nextWord =
          words.length - 1 > state.wordIndex ? state.wordIndex + 1 : 0;

        setState(state => ({
          ...state,
          reverse: false,
          wordIndex: nextWord,
        }));
        return;
      }

      setState(state => ({
        ...state,
        letterIndex: state.letterIndex + (state.reverse ? -1 : 1),
      }));
    }, timer);

    return () => clearTimeout(timeout);
  }, [state, setState, words, word, currentWord]);

  return (
    <span
      className={cn(
        'relative min-w-max max-w-min after:absolute after:right-[-6px] after:h-[100%] after:w-[4px] after:bg-main after:animate-cursor text-nowrap',
        className
      )}
      {...props}>
      {currentWord || '_'}
    </span>
  );
}
