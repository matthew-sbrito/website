'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export function ContactImage() {
  return (
    <motion.div
      className="-z-50 relative min-w-[225px] min-h-[225px] md:min-w-[350px] md:min-h-[350px]"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.5 }}>
      <Image
        className="animate-pulse scale-125"
        src="/images/contact/word.png"
        alt="Word"
        fill
      />
    </motion.div>
  );
}
