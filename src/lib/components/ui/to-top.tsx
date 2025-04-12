'use client';

import { useCallback, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { ChevronUpIcon } from 'lucide-react';

export function ToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => console.log(show), [show]);

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 200) {
      setShow(true);
      return;
    }

    if (show && window.scrollY <= 200) {
      setShow(false);
      return;
    }
  }, [show]);

  useEffect(() => {
    const ac = new AbortController();
    window.addEventListener('scroll', handleScroll, ac);
    return () => ac.abort();
  }, [handleScroll]);

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}>
          <button
            onClick={toTop}
            className="p-2 rounded-full bg-main shadow-sm animate-pulse-bordered">
            <ChevronUpIcon size={35} className="text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
