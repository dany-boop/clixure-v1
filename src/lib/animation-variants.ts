import { Variants } from 'framer-motion';

// Easing array equivalent to "easeInOut"
const easeInOutCubic: [number, number, number, number] = [0.42, 0, 0.58, 1];

export const sidebarVariants: Variants = {
  closed: {
    x: '-100%' as any, // cast to bypass TS strictness
    opacity: 0,
    transition: { duration: 0.3, ease: easeInOutCubic },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

export const menuContainerVariants: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export const menuItemVariants: Variants = {
  closed: { opacity: 0, x: -30 },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 14 },
  },
};

export const bottomSectionVariants: Variants = {
  closed: { opacity: 0, y: 20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.4, ease: easeInOutCubic },
  },
};

export const textVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
};
export const splashVariants: Variants = {
  hidden: {
    scaleY: 0,
    scaleX: 1.2,
    opacity: 0,
    transformOrigin: 'bottom left',
    rotate: -12,
  },
  visible: {
    scaleY: 1.1,
    scaleX: 1.1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.25,
      ease: [0.9, -0.4, 0.2, 1.4],
    },
  },
  settle: {
    scaleY: 1,
    scaleX: 1,
    rotate: -3,
    transition: {
      duration: 0.25,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};
