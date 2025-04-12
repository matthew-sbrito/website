import Image from 'next/image';

import { SocialMedias } from '@/components/medias';

import { DictionaryComponentProps } from '@/dictionaries';

import { SectionContainer } from '../container';
import { ContactImage } from './contact-image';
import { ContactForm } from './form';

type Props = DictionaryComponentProps;

export function Contact({ dictionary }: Props) {
  return (
    <SectionContainer
      id="contact"
      title={dictionary.contact.title}
      subtitle={dictionary.contact.subtitle}>
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
        <ContactForm dictionary={dictionary} />
        <div className="flex flex-col items-center justify-center">
          <ContactImage />
          <div className="mt-2">
            <SocialMedias />
          </div>
          <div className="flex flex-col gap-2"></div>
        </div>
      </div>
    </SectionContainer>
  );
}
