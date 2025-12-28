'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  motion,
  HTMLMotionProps,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';

interface ParallaxItemProps extends HTMLMotionProps<'div'> {
  start: number;
  end: number;
}

export const Parallax = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('relative min-h-dvh w-full', className)} {...props} />
  );
};

export function PrallaxContainer({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('px-default min-h-screen', className)} {...props} />
  );
}
export function ParallaxItem({
  start,
  end,
  className,
  style,
  ...props
}: ParallaxItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        opacity,
        ...style,
      }}
      {...props}
    />
  );
}
