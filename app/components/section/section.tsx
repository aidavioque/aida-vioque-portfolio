'use client';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import cx from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  const [isInView, setIsInView] = useState(false);
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <InView as="div" onChange={(inView) => setIsInView(inView)}>
      <motion.div
        id={id}
        className={cx('pt-24', className)}
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 2, ease: 'easeOut' }}
        variants={variants}
      >
        {children}
      </motion.div>
    </InView>
  );
};

export default Section;
