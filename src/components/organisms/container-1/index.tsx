import React from 'react';
import { motion } from 'framer-motion';
import { splashVariants } from '@/lib/animation-variants';
import Link from 'next/link';
import MagneticButton from '@/components/atoms/common/magnetic-button';

const ContainerIntro = () => {
  return (
    <main className="relative bg-transparent">
      <div className="relative z-10 flex flex-col font-bold text-[7em] leading-tight">
        <h1 className="relative inline-block">
          Budget
          <span className="relative inline-block mx-2 px-6">
            {/* splash background */}
            <motion.span
              variants={splashVariants}
              initial="hidden"
              animate={['visible', 'settle']}
              className="absolute inset-0 -skew-x-12 bg-[#D84315]/50 backdrop-blur-[3px]"
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
              className="absolute inset-0 -skew-x-12 bg-[#059669]/50 backdrop-blur-[3px] "
            />
            {/* text (always visible) */}
            <span className="relative text-[#1E3A8A] z-10 ">Enterprise</span>
          </span>
        </p>
      </div>

      <div className="flex justify-center font-semibold text-2xl mt-5 gap-5">
        <MagneticButton className="py-6 px-4 rounded-lg bg-primary dark:bg-primary text-2xl text-white">
          Konsultasi Sekarang
        </MagneticButton>
        <Link href="" className="text-center align-middle">
          Lihat Portfolio
        </Link>
      </div>
    </main>
  );
};
export default ContainerIntro;
