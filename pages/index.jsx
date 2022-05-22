/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import cx from 'classnames';

const NEXT_PUBLIC_WIP = process.env.NEXT_PUBLIC_WIP === 'true';

const Section = ({ children, className, id }) => {
  const [isInView, setIsInView] = useState(false);
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aida Aranguren Portfolio</title>
        <meta name="description" content="Aida Aranguren Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-8 overflow-auto relative bg-backround">
        <section className="relative flex justify-center">
          <div className="container flex flex-col lg:flex-row justify-between">
            <div className="min-w-1/2 flex-1 ">
              <h1 className="font-sans text-7xl lg:text-9xl pb-12 lg:pb-24 text-primary">
                <div>Aida</div>
                <div>Aranguren</div>
              </h1>
              <h2 className="font-sans text-4xl pb-24 leading-relaxed text-primary">
                <div>Hi! I am a Jr. Product Designer, </div>
                <div>UX Writer, & Instructional Designer</div>
              </h2>
            </div>
            {NEXT_PUBLIC_WIP && (
              <div className="min-w-1/2 lg:pl-16">
                <img
                  src="/wip.gif"
                  className="mb-10"
                  style={{ height: '320px' }}
                />
                <h2 className="font-sans text-4xl pb-24 text-primary">
                  Work in progress
                </h2>
              </div>
            )}
          </div>
        </section>
        {!NEXT_PUBLIC_WIP && <Header />}
        {!NEXT_PUBLIC_WIP && (
          <Section id="about" className="min-h-screen text-primary">
            <div>
              <h3 className="font-sans text-center text-6xl mb-16">About</h3>
              <div className="flex justify-center">
                <div
                  className="h-16 w-16 bg-cover rounded-full mb-16"
                  style={{ backgroundImage: `url(/aida.avif)` }}
                />
              </div>
              <div className="font-sans text-xl text-center mb-16">
                La más linda que se haya visto. Oh my! ¡¡Cómo de linda es!!
              </div>
              <div className="flex justify-center">
                <Link className="font-sans text-xl text-center" href="/about">
                  Read more
                </Link>
              </div>
            </div>
          </Section>
        )}
        {!NEXT_PUBLIC_WIP && (
          <Section id="projects" className="min-h-screen text-primary">
            <div>
              <h3 className="font-sans text-center text-6xl mb-36">Projects</h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-16 container">
                  <div>
                    <img src="/aida.avif" className="mb-10" />
                    <div className="font-sans text-3xl text-center mb-6">
                      Product designer
                    </div>
                    <div className="font-sans text-xl text-center">
                      Hola, es que eres super linda como product designer y vas
                      a ser la mejor
                    </div>
                  </div>
                  <div>
                    <img src="/aida.avif" className="mb-10" />
                    <div className="font-sans text-3xl text-center mb-6">
                      Alligator
                    </div>
                    <div className="font-sans text-xl text-center">
                      Hola, es que eres super linda como product designer y vas
                      a ser la mejor
                    </div>
                  </div>
                  <div>
                    <img src="/aida.avif" className="mb-10" />
                    <div className="font-sans text-3xl text-center mb-6">
                      Oh no
                    </div>
                    <div className="font-sans text-xl text-center">
                      Hola, es que eres super linda como product designer y vas
                      a ser la mejor, si!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        )}
        {!NEXT_PUBLIC_WIP && (
          <Section id="contact" className="min-h-screen text-primary">
            <div>
              <a href="mailto:aida.aranvio@gmail.com">
                Contact
                <img
                  src="/ufo.svg"
                  alt="contact"
                  height={60}
                  width={60}
                  className={styles.contact}
                />
              </a>
            </div>
          </Section>
        )}
      </main>
      <Footer />
    </div>
  );
}
