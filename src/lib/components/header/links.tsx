'use client';

import { useEffect, useState } from 'react';

import { SECTIONS } from '@/constants/sections';
import { DictionaryComponentProps } from '@/dictionaries';
import { cn } from '@/utils/cn';
import { checkIsElement } from '@/utils/dom';

type Props = DictionaryComponentProps;

export function LinksSection({ dictionary }: Props) {
  const [sectionId, setSectionId] = useState('home');

  function onIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries.find(entry => entry.isIntersecting);

    if (entry == undefined) return;

    const element = entry.target as HTMLElement;
    const currentSectionId = element.dataset.reference ?? element.id;

    setSectionId(prevId =>
      currentSectionId === prevId ? prevId : currentSectionId
    );
  }

  useEffect(() => {
    const elements = SECTIONS.map(x => document.getElementById(x.id)).filter(
      checkIsElement
    );

    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.5,
    });

    elements.forEach(x => observer.observe(x));

    return () => {
      elements.forEach(x => observer.unobserve(x));
    };
  }, []);

  return (
    <ul className="flex gap-5 p-2">
      {SECTIONS.map(section => (
        <li key={section.id}>
          <a
            suppressHydrationWarning
            href={section.link}
            className={cn('font-semibold text-sm transition duration-300', {
              'text-main': section.id === sectionId,
            })}>
            {dictionary.header[section.id]}
          </a>
        </li>
      ))}
      <li>
        <a
          href={dictionary.resume.link}
          target="_blank"
          className="font-semibold text-sm">
          {dictionary.header.resume}
        </a>
      </li>
    </ul>
  );
}
