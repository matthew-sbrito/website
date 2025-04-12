'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ChevronUpIcon } from 'lucide-react';

import { cn } from '@/utils/cn';

export function ToUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    window.addEventListener('scroll', () => setShow(window.scrollY > 0), ac);
    return () => ac.abort();
  }, []);

  function toUpHandle() {
    window.scrollTo({ top: 0 });
  }

  return createPortal(
    <button
      onClick={toUpHandle}
      className={cn(
        'fixed bottom-5 right-5 p-2 rounded-full bg-main opacity-0 shadow-sm pointer-events-none duration-200 ease-in animate-pulse-bordered',
        {
          'opacity-100 pointer-events-auto cursor-pointer': show,
        }
      )}>
      <ChevronUpIcon size={35} className="text-white" />
    </button>,
    document.body
  );
}
