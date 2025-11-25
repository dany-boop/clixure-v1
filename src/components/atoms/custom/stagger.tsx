'use client';
import * as React from 'react';
import {
  HTMLMotionProps,
  motion,
  MotionConfig,
  stagger,
  StaggerOrigin,
} from 'motion/react';
import { ANIMATION_VARIANTS, AnimationT } from '@/lib/systaliko-animation-variants';
interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
}
interface ContainerStaggerProps extends HTMLMotionProps<'div'> {
  staggerChildren?: number;
  delayChildren?: number;
  staggerDirection?: 1 | -1;
}

export const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  ContainerStaggerProps
>(
  (
    {
      staggerChildren = 0.2,
      delayChildren = 0.2,
      staggerDirection = 1,
      className,
      transition,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          staggerChildren,
          delayChildren,
          staggerDirection,
          ...transition,
        }}
        {...props}
      />
    );
  }
);
ContainerStagger.displayName = 'ContainerStagger';

export function WordStagger({ children, animation, ...props }: WordProps) {
  const characters = String(children).split('');
  const animationVariants = ANIMATION_VARIANTS[animation || 'default'];
  return (
    <span className="inline-block text-nowrap" {...props}>
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={animationVariants}
          key={`${char}-${index}`}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

interface TextStaggerProps extends HTMLMotionProps<'span'> {
  staggerValue?: number;
  staggerStart?: StaggerOrigin;
  animation?: AnimationT;
  as?: React.ElementType;
}

export function TextStaggerInview({
  children,
  transition,
  className,
  viewport = { once: true, amount: 0.25 },
  staggerValue = 0.02,
  staggerStart = 'first',
  animation,
  as: Component = 'span',
  ...props
}: TextStaggerProps) {
  const words = String(children).split(' ');
  const MotionComponent = motion.create(Component);
  return (
    <MotionComponent
      initial="hidden"
      whileInView={'visible'}
      viewport={viewport}
      className={className}
      transition={{
        delayChildren: stagger(staggerValue, { from: staggerStart }),
      }}
      {...props}
    >
      <MotionConfig
        transition={{
          ease: transition?.ease || 'easeOut',
          ...transition,
        }}
      >
        {words.map((word, index) => (
          <React.Fragment key={`${word}-${index}`}>
            <WordStagger animation={animation}>{word}</WordStagger>
            {index < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </MotionConfig>
    </MotionComponent>
  );
}
