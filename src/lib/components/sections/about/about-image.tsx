'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export function AboutImage() {
  return (
    <motion.div
      className="relative min-h-[140px] min-w-[260px] md:min-h-[270px] md:min-w-[480px]"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.5 }}>
      <Image
        className="rounded-xl shadow-lg shadow-main"
        src="/images/coding-screen.png"
        alt="Coding..."
        fill
      />
    </motion.div>
  );
}
