'use client';

import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  duration?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  duration = 20,
}: MarqueeProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: vertical ? 0 : reverse ? ['-50%', '0%'] : ['0%', '-50%'],
      y: vertical ? (reverse ? ['-50%', '0%'] : ['0%', '-50%']) : 0,
      transition: {
        duration,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls, reverse, vertical, duration]);

  return (
    <div
      className={cn(
        'group relative overflow-hidden',
        vertical ? 'flex-col' : 'flex',
        className
      )}
    >
      <motion.div
        animate={controls}
        onHoverStart={() => pauseOnHover && controls.stop()}
        // onHoverEnd={() => pauseOnHover && controls.start()}
        className={cn('flex w-max', vertical ? 'flex-col' : 'flex-row')}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
