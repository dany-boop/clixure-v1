import React from 'react';
import { motion } from 'framer-motion';
import { splashVariants } from '@/lib/animation-variants';
import Link from 'next/link';
import MagneticButton from '@/components/atoms/common/magnetic-button';

const ContainerIntro = () => {
  return (
    <main className="relative bg-transparent px-4 sm:px-8 lg:px-16">
      <div
        className="
      relative z-10 flex flex-col
      font-bold leading-tight
      text-[clamp(2.5rem,8vw,7rem)]
      text-center lg:text-left
    "
      >
        <h1 className="relative inline-block">
          Budget
          <span className="relative inline-block mx-1 sm:mx-2 px-3 sm:px-6">
            <motion.span
              variants={splashVariants}
              initial="hidden"
              animate={['visible', 'settle']}
              className="absolute inset-0 -skew-x-12 bg-[#D84315]/50 backdrop-blur-[3px]"
            />
            <span className="relative text-[#FFD700] z-10">UMKM</span>
          </span>
        </h1>

        <p className="relative inline-block">
          Hasil{' '}
          <span className="relative inline-block mx-1 sm:mx-2 px-3 sm:px-6">
            <motion.span
              variants={splashVariants}
              initial="hidden"
              animate={['visible', 'settle']}
              transition={{ delay: 0.25 }}
              className="absolute inset-0 -skew-x-12 bg-[#059669]/50 backdrop-blur-[3px]"
            />
            <span className="relative text-[#1E3A8A] z-10">Enterprise</span>
          </span>
        </p>
      </div>

      <div
        className="
      mt-6 flex flex-col gap-4
      items-center
      sm:flex-row sm:gap-5
      sm:justify-center
      font-semibold
      text-lg sm:text-xl lg:text-2xl
    "
      >
        <MagneticButton className="py-4 sm:py-6 px-6 rounded-lg bg-primary text-white">
          Konsultasi Sekarang
        </MagneticButton>

        <Link
          href=""
          className="text-center underline-offset-4 hover:underline"
        >
          Lihat Portfolio
        </Link>
      </div>
    </main>
  );
};
export default ContainerIntro;
