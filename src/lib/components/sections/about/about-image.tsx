'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export function AboutImage() {
  return (
    <motion.div      
      className='relative min-w-[260px] min-h-[140px] md:min-w-[480px] md:min-h-[270px]'        
      initial={{ opacity: 0, y: 200  }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200  }}
      transition={{ duration: 0.5 }}>
       <Image
          className="shadow-lg rounded-xl shadow-main"
          src="/images/coding-screen.png"
          alt="Coding..."
          fill
        />
    </motion.div> 
  );
}
