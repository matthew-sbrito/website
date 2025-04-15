'use client';

import { ReactNode, useEffect, useState } from 'react';

import { SECTIONS } from '@/constants/sections';
import { DictionaryComponentProps } from '@/dictionaries';
import { cn } from '@/utils/cn';
import { checkIsElement, isVisibleInContainer } from '@/utils/dom';

type Props = DictionaryComponentProps & {
  afterSection?: () => void;
  children?: ReactNode;
};

export function LinksSection({ dictionary, afterSection, children }: Props) {
  const [sectionId, setSectionId] = useState('home');

  function onIntersection(entries: IntersectionObserverEntry[]) {
    console.log(entries);

    const entry = entries.find(entry => entry.isIntersecting);

    console.log(entry);

    if (entry == undefined) return;

    const element = entry.target as HTMLElement;
    const currentSectionId = element.dataset.reference ?? element.id;

    setSectionId(prevId =>
      currentSectionId === prevId ? prevId : currentSectionId
    );
  }

  function checkCurrentSection() {
    const elements = SECTIONS.map(x => document.getElementById(x.id)).filter(
      checkIsElement
    );

    for (const element of elements) {
      if (isVisibleInContainer(document.documentElement, element)) {
        setSectionId(element.id);
        return;
      }
    }
  }

  useEffect(() => {
    checkCurrentSection();

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
    <ul className="flex flex-col lg:items-center  gap-3 lg:gap-4 lg:flex-row">
      {SECTIONS.map(section => (
        <li key={section.id}>
          <a
            suppressHydrationWarning
            href={section.link}
            onClick={afterSection}
            className={cn('text-sm font-semibold transition duration-300', {
              'text-main': section.id === sectionId,
            })}>
            {dictionary.header[section.id]}
          </a>
        </li>
      ))}
      <li>
        <a
          href={dictionary.resume.link}
          onClick={afterSection}
          target="_blank"
          className="text-sm font-semibold">
          {dictionary.header.resume}
        </a>
      </li>
      {children}
    </ul>
  );
}
