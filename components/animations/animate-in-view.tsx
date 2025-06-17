'use client';
import { AnimatePresence, motion } from 'framer-motion';

const AnimateInView = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateInView;
