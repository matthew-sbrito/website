'use client';

import { useEffect, useState } from 'react';

const getHash = () =>
  typeof window != 'undefined'
    ? decodeURIComponent(window.location.hash.replace('#', ''))
    : '';

export function useHash(): string {
  const [hash, setHash] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => setHash(getHash());

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return hash;
}
