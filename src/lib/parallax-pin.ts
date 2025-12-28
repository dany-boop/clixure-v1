import { RefObject, useEffect, useState } from 'react';

export function usePinBoundaries(
  ref: RefObject<HTMLElement>,
  enabled: boolean
) {
  const [state, setState] = useState<'idle' | 'pinned' | 'released'>('idle');

  useEffect(() => {
    if (!ref.current || !enabled) return;

    const el = ref.current;
    const vh = window.innerHeight;

    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY;

    // Absolute document positions
    const start = rect.top + scrollTop + vh * 0.2; // when text fully visible

    const end = rect.bottom + scrollTop - vh; // end of pin

    const onScroll = () => {
      const y = window.scrollY;

      if (y >= start && y <= end) {
        setState('pinned');
      } else if (y > end) {
        setState('released');
      } else {
        setState('idle');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [enabled]);

  return state;
}
