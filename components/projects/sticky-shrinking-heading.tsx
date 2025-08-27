'use client';

import React, { useEffect, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  minScale?: number; // Minimum scale after shrinking
  shrinkDistance?: number; // Pixels over which the shrink completes
};

export default function StickyShrinkingHeading({
  children,
  className,
  minScale = 0.84,
  shrinkDistance = 240,
}: Props) {
  const prefersReduced = useReducedMotion();

  // Global scroll position (in pixels)
  const { scrollY } = useScroll();

  // Absolute document Y where the Projects section starts
  const [sectionTop, setSectionTop] = useState<number | null>(null);

  useEffect(() => {
    const computeTop = () => {
      const el = document.getElementById('projects');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setSectionTop(window.scrollY + rect.top);
    };
    computeTop();
    window.addEventListener('resize', computeTop);
    // In case content above loads later and shifts layout, recompute once after a tick
    const t = setTimeout(computeTop, 100);
    return () => {
      window.removeEventListener('resize', computeTop);
      clearTimeout(t);
    };
  }, []);

  // Map scrollY to a scale that shrinks quickly at the beginning of the section scroll
  const rawScale = useTransform(scrollY, (y) => {
    if (sectionTop == null) return 1; // Initial SSR-aligned value
    const start = sectionTop; // when the section hits the top of the viewport
    const end = start + Math.max(1, shrinkDistance);
    const p = (y - start) / (end - start); // progress 0->1 across shrink distance
    const clamped = Math.min(1, Math.max(0, p));
    const scaleNow = 1 - (1 - minScale) * clamped; // linear; swap for easing if desired
    return scaleNow;
  });

  const scale = useSpring(rawScale, { stiffness: 220, damping: 28, mass: 0.8 });

  return (
    <motion.h2
      className={className}
      style={{
        transformOrigin: 'left top',
        willChange: 'transform',
        scale: prefersReduced ? 1 : (scale as any),
      }}
    >
      {children}
    </motion.h2>
  );
}
