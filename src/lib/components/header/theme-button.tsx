import { ComponentProps } from 'react';
import { ThemeIcon } from './theme-icon';
import { DictionaryComponentProps } from '@/dictionaries';

type Props = DictionaryComponentProps<ComponentProps<'button'>>;

export function ThemeButton({ dictionary, ...props }: Props) {
  return (
    <button 
    title={dictionary.header.themeButtonTitle} 
    className="group flex items-center gap-1 max-h-min" {...props}>
      <ThemeIcon size={18} />
    </button>
  );
}

