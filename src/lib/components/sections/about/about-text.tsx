'use client';

import { fadeUpXAnimation } from "@/constants/animations";
import { motion } from "framer-motion";

type Props = {
    description: string;
}

export function AboutText({description}: Props) {
    return (
        <div className="flex flex-col gap-2.5 font-medium">
        {description.split('\n').map((text, index) => (
          <motion.p  key={index} {...fadeUpXAnimation} transition={{ delay: 0.1 * index }}>{text}</motion.p>
        ))}
      </div>
    )
}