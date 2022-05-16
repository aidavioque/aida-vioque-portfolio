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
        <section className="min-h-screen relative flex justify-center">
          <div className="container">
            <h1 className="font-sans text-9xl pb-24 text-primary">
              <div>Aida</div>
              <div>Aranguren</div>
            </h1>
            <h2 className="font-sans text-4xl pb-24 text-primary">
              Hi! I'm a Product designer
            </h2>
          </div>
        </section>
        <Header />
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
                    Hola, es que eres super linda como product designer y vas a
                    ser la mejor
                  </div>
                </div>
                <div>
                  <img src="/aida.avif" className="mb-10" />
                  <div className="font-sans text-3xl text-center mb-6">
                    Alligator
                  </div>
                  <div className="font-sans text-xl text-center">
                    Hola, es que eres super linda como product designer y vas a
                    ser la mejor
                  </div>
                </div>
                <div>
                  <img src="/aida.avif" className="mb-10" />
                  <div className="font-sans text-3xl text-center mb-6">
                    Oh no
                  </div>
                  <div className="font-sans text-xl text-center">
                    Hola, es que eres super linda como product designer y vas a
                    ser la mejor, si!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
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
      </main>
      <Footer />
    </div>
  );
}
