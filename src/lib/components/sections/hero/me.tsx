'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export function Me() {
  return (
    <motion.div
      className="grid w-[100%] place-items-center p-3 lg:w-[40%]"
      initial={{ opacity: 0, y: 200, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 200, scale: 0.5 }}
      transition={{ duration: 0.5 }}>
      <div className="relative h-[17rem] w-[17rem] overflow-hidden rounded-full md:h-[22rem] md:w-[22rem] lg:h-[30rem] lg:w-[30rem]">
        <Image
          className="object-cover"
          src="/images/me.jpg"
          alt="Matheus Brito's Photo"
          fill
        />
      </div>
    </motion.div>
  );
}
