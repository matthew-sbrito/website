import Image from 'next/image';
import { ComponentProps } from 'react';

import { DictionaryComponentProps } from '@/dictionaries';

type Props = DictionaryComponentProps & ComponentProps<'button'>;

export function LocaleButton({ dictionary, ...props }: Props) {
  return (
    <button
      title={dictionary.header.localeButtonTitle}
      className="flex items-center gap-1 max-h-min"
      {...props}>
      {dictionary.locale === 'pt' ? (
        <Image
          src="/images/flags/pt-br.svg"
          alt="Brazil's Flag"
          width={18}
          height={18}
        />
      ) : (
        <Image
          src="/images/flags/en.svg"
          alt="United State Of America's Flag"
          width={18}
          height={18}
        />
      )}
    </button>
  );
}
