/* eslint-disable @next/next/no-img-element */
'use client';
import { useRef, useState, useEffect } from 'react';
import Mosaic from '@/components/mosaic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '#/lib/isMobile';

const IllustrationSection = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const isMobile = useIsMobile();
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const illustrationSectionRef = useRef(null);
  const aliceRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: illustrationSectionRef,
    offset: ['start start', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-320, screenWidth + 850]);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, screenHeight * (isMobile ? 8 : 4)],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.48, 0.55],
    [0, 1, 1, 0],
  );
  return (
    <div className="overflow-hidden" ref={illustrationSectionRef}>
      <section className="container relative pb-24 pt-10 md:pt-36 lg:pt-1 ">
        <h2 className="pb-16 text-5xl text-primary">Design and Illustration</h2>
        {
          <motion.div
            initial={{ x: 20 }}
            className="absolute top-0 z-50"
            style={{ x, y, opacity }}
          >
            <img
              src="/images/alicia.png"
              alt=""
              className="h-[335px] w-[300px] drop-shadow-2xl"
              ref={aliceRef}
            />
          </motion.div>
        }
        <Mosaic />
      </section>
    </div>
  );
};

export default IllustrationSection;
