import { ComponentProps } from 'react';

import { DictionaryComponentProps } from '@/dictionaries';

import { ThemeIcon } from './theme-icon';

type Props = DictionaryComponentProps & ComponentProps<'button'>;

export function ThemeButton({ dictionary, ...props }: Props) {
  return (
    <button
      title={dictionary.header.themeButtonTitle}
      className="group flex gap-1 max-h-min"
      {...props}>
      <ThemeIcon size={18} />
    </button>
  );
}
