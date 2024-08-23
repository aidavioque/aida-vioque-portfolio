'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedUnderline: FC<AnimatedUnderlineProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div className={cn('group relative', className)}>
      {children}
      <motion.div className="absolute -bottom-2 left-0 -mt-0.5 h-0.5 w-full origin-left -translate-y-0.5 scale-x-0 transform bg-black transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
};

export default AnimatedUnderline;
