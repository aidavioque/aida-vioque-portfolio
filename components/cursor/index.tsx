'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

function isPointerElement(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  const tag = target.tagName.toLowerCase();
  if (
    tag === 'a' ||
    tag === 'button' ||
    tag === 'input' ||
    tag === 'select' ||
    tag === 'textarea'
  )
    return true;
  if (
    target.getAttribute('role') === 'button' ||
    target.getAttribute('tabindex') === '0'
  )
    return true;
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
    document.body.style.cursor = 'none'; // Hide default cursor

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto'; // Restore default cursor
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        transform: `translate(-50%, -50%)`,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.15s cubic-bezier(.4,0,.2,1)',
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
