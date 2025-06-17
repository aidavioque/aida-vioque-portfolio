'use client';
import { useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverImagesProps {
  children: ReactNode;
  images: string[];
  className?: string;
  spreadAngle?: number; // Angle to spread images, default is 60 degrees
}

export default function HoverImages({
  children,
  images,
  className,
  spreadAngle = 60,
}: HoverImagesProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      {children}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence>
          {isHovered &&
            images.map((src, index) => {
              // Calculate rotation and translation for spread effect
              const angle =
                (index / images.length) * spreadAngle -
                (images.length > 1 ? 15 : 0); // Spread images by 60 degrees total
              const translateX = Math.sin((angle * Math.PI) / 180) * 350; // Adjust 350 for more/less spread
              const translateY = -Math.cos((angle * Math.PI) / 180) * 20 - 70; // Adjust 20 for vertical positioning

              return (
                <motion.div
                  key={src}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: angle - 10,
                    x: translateX,
                    y: translateY + 60,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: angle,
                    x: translateX,
                    y: translateY,
                    transition: {
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: angle + 20,
                    x: translateX,
                    y: translateY + 60,
                    transition: { duration: 0.15 },
                  }}
                  className="absolute"
                  style={{
                    zIndex: images.length - index, // Ensure images stack correctly
                  }}
                >
                  <Image
                    src={src}
                    alt={`Hover image ${index + 1}`}
                    width={100} // Adjust as needed
                    height={100} // Adjust as needed
                    className="object-cover rounded-lg shadow-xl"
                    priority={index < 3} // Prioritize loading for first few images
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
}
