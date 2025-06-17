'use client';

import React from 'react';
import { AnimatePresence, motion, MotionValue } from 'framer-motion';

type AnimatedItemsProps<T> = {
  items: T[];
  children: (item: T) => React.ReactNode;
};

function AnimatedItems<T>({ items, children }: AnimatedItemsProps<T>) {
  return (
    <AnimatePresence>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="max-w-[600px] w-full relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          {children(item)}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
export default AnimatedItems;
