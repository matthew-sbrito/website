'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export function ContactImage() {
  return (
    <motion.div
      className="relative -z-50 min-h-[225px] min-w-[225px] md:min-h-[350px] md:min-w-[350px]"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.5 }}>
      <Image
        className="scale-125 animate-pulse"
        src="/images/contact/word.png"
        alt="Word"
        fill
      />
    </motion.div>
  );
}
