import { ComponentProps } from 'react';

import { DictionaryComponentProps } from '@/dictionaries';

import { ThemeIcon } from './theme-icon';

type Props = DictionaryComponentProps & ComponentProps<'button'>;

export function ThemeButton({ dictionary, ...props }: Props) {
  return (
    <button
      title={dictionary.header.themeButtonTitle}
      className="group flex max-h-min gap-1"
      {...props}>
      <ThemeIcon size={18} />
    </button>
  );
}
