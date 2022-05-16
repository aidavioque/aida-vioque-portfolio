/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Link from 'next/link';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import cx from 'classnames';

const Section = ({ children, className, id }) => {
  const [isInView, setIsInView] = useState(false);
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
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

const About = ({ children }) => (
  <div className="relative container grid grid-cols-2 gap-16">
    <div className="absolute flex items-center top-0 h-full w-full justify-center">
      <div className="bg-primary w-1 h-full" />
    </div>
    {children}
  </div>
);

const AboutField = ({ title, children, isEven }) => (
  <div
    className={cx('flex flex-col', {
      'items-start': !isEven,
      'items-end': isEven
    })}
  >
    <h4 className={cx('text-2xl font-bold mb-4', { 'text-right': isEven })}>
      {title}
    </h4>
    {children}
  </div>
);

const ABOUT_FIELDS = [
  {
    title: 'Product designer',
    text: 'blablablabalbalbal'
  },
  {
    title: 'Product designer',
    text: 'blablablabalbalbal'
  },
  {
    title: 'La más linda',
    text: 'blablablabalbalbal'
  }
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aida Vioque Portfolio</title>
        <meta name="description" content="Aida Vioque Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-8 overflow-auto relative bg-backround">
        <Header />
        <Section id="about" className="min-h-screen text-primary">
          <div>
            <h3 className="font-sans text-center text-6xl mb-36">About</h3>
            <div className="flex items-center justify-center">
              <About>
                {ABOUT_FIELDS.map(({ title, text }, i) => (
                  <>
                    {i % 2 !== 0 && <div></div>}
                    <AboutField isEven={i % 2 === 0} title={title}>
                      {text}
                    </AboutField>
                    {i % 2 === 0 && <div></div>}
                  </>
                ))}
              </About>
            </div>
          </div>
        </Section>
      </main>
      <footer className="text-primary fixed bottom-0 left-0 pb-6 pt-2 pl-12 w-full bg-backround">
        <a href="mailto:aida.aranvio@gmail.com" className="hover:scale-110">
          aida.vioque@gmail.com
        </a>
        <Link href="/">
          <a className="text-right pl-6 text-primary hover:scale-110">⬆</a>
        </Link>
      </footer>
    </div>
  );
}
