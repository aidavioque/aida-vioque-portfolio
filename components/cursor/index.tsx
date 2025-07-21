'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

function isPointerElement(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  // Check if the element or any ancestor matches pointer selectors
  const pointerSelector =
    'a,button,[role="button"],[tabindex="0"],input[type="button"],input[type="submit"],input[type="reset"]';
  if (target.closest(pointerSelector)) return true;
  if (getComputedStyle(target).cursor === 'pointer') return true;
  return false;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsPointer(isPointerElement(event.target));
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="cursor-none fixed pointer-events-none transition-transform"
      style={{
        top: position.y,
        left: position.x,
        transform: `translate(-50%, -50%)`,
        zIndex: 9999,
      }}
    >
      <div
        className={cn(
          'backdrop-filter backdrop-invert backdrop-hue-rotate-90 w-6 h-6 rounded-full duration-200 transition-transform',
          {
            'scale-[200%]': isPointer,
          },
        )}
      ></div>
    </div>
  );
}
