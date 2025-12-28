import { HeroParallax } from '@/components/atoms/custom/hero-parallax';
import {
  Parallax,
  ParallaxItem,
  PrallaxContainer,
} from '@/components/atoms/custom/parallax';
import {
  ContainerStagger,
  TextStaggerInview,
} from '@/components/atoms/custom/stagger';
import { usePinBoundaries } from '@/lib/parallax-pin';
import { ANIMATION_VARIANTS } from '@/lib/systaliko-animation-variants';
import { cn } from '@/lib/utils';
import { MotionConfig, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const ContainerAbout = (props: Props) => {
  const animationVariants = ANIMATION_VARIANTS['z'];
  const sectionRef = useRef<HTMLDivElement | any>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  const [textDone, setTextDone] = useState(false);
  const [pinHeight, setPinHeight] = useState(0);

  const pinState = usePinBoundaries(sectionRef, textDone);

  useEffect(() => {
    if (!pinnedRef.current) return;
    setPinHeight(pinnedRef.current.offsetHeight);
  }, []);

  const products = [
    {
      title: 'Moonbeam',
      link: 'https://gomoonbeam.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
    },
    {
      title: 'Cursor',
      link: 'https://cursor.so',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cursor.png',
    },
    {
      title: 'Rogue',
      link: 'https://userogue.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/rogue.png',
    },

    {
      title: 'Editorially',
      link: 'https://editorially.org',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editorially.png',
    },
    {
      title: 'Editrix AI',
      link: 'https://editrix.ai',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/editrix.png',
    },
    {
      title: 'Pixel Perfect',
      link: 'https://app.pixelperfect.quest',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
    },

    {
      title: 'Algochurn',
      link: 'https://algochurn.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
    },
    {
      title: 'Aceternity UI',
      link: 'https://ui.aceternity.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
    },
    {
      title: 'Tailwind Master Kit',
      link: 'https://tailwindmasterkit.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
    },
    {
      title: 'SmartBridge',
      link: 'https://smartbridgetech.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
    },
    {
      title: 'Renderwork Studio',
      link: 'https://renderwork.studio',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
    },

    {
      title: 'Creme Digital',
      link: 'https://cremedigital.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
    },
    {
      title: 'Golden Bells Academy',
      link: 'https://goldenbellsacademy.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
    },
    {
      title: 'Invoker Labs',
      link: 'https://invoker.lol',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/invoker.png',
    },
    {
      title: 'E Free Invoice',
      link: 'https://efreeinvoice.com',
      thumbnail:
        'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
    },
  ];
  return (
    <div className="bg-white dark:bg-neutral-900">
      <HeroParallax products={products} />
    </div>
  );
};

export default ContainerAbout;
