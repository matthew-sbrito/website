'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export function Me() {
  return (
    <motion.div
      className="grid place-items-center w-[100%] lg:w-[40%] p-3"
      initial={{ opacity: 0, y: 200, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 200, scale: 0.5 }}
      transition={{ duration: 0.5 }}>
      <div className="relative w-[17rem] h-[17rem]  md:w-[22rem] md:h-[22rem] lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden">
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
