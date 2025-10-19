import React from 'react';
import { motion } from 'framer-motion';
import { splashVariants } from '@/lib/animation-variants';

const ContainerIntro = () => {
  return (
    <div className=" flex flex-col font-bold text-[7em] leading-tight ">
      <h1 className="relative inline-block">
        Budget
        <span className="relative inline-block mx-2 px-6">
          {/* splash background */}
          <motion.span
            variants={splashVariants}
            initial="hidden"
            animate={['visible', 'settle']}
            className="absolute inset-0 -skew-x-12 bg-[#D84315]/50  backdrop-saturate-150"
            style={{
              borderRadius: '2px',
              zIndex: 0,
            }}
          />
          {/* text (always visible) */}
          <span className="relative text-[#FFD700] z-10">UMKM</span>
        </span>
      </h1>

      <p className="relative inline-block">
        Hasil{' '}
        <span className="relative inline-block mx-2 px-6">
          {/* splash background */}
          <motion.span
            variants={splashVariants}
            initial="hidden"
            animate={['visible', 'settle']}
            transition={{ delay: 0.25 }}
            className="absolute inset-0 -skew-x-12 bg-[#059669]/50  backdrop-saturate-150"
            style={{
              borderRadius: '2px',
              zIndex: 0,
            }}
          />
          {/* text (always visible) */}
          <span className="relative text-[#1E3A8A] z-10">Enterprise</span>
        </span>
      </p>
    </div>
  );
};
export default ContainerIntro;
