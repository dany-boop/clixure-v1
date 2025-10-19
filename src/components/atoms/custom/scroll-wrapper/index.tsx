'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Create Lenis instance
    const lenis = new Lenis({
      duration: 1.5, // Smoothness duration (higher = slower, smoother)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(3, -10 * t)), // Smooth easing curve
      smoothWheel: true,
      // smoothTouch: true, // ✅ enables smooth scroll on mobile touch
      touchMultiplier: 1.5, // Optional: slightly faster on mobile
    });

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: hook into scroll events if needed
    // lenis.on('scroll', (e) => console.log(e));

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
