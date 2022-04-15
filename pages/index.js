/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
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
        className={cx("pt-24", className)}
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 2, ease: 'easeOut' }}
        variants={variants}
      >
        { children }
      </motion.div>
   </InView>
  )
};

const Menu = () => (
  <ul className="flex">
      <li className="pr-6">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="pr-6">
        <Link href="/#work">
          <a>Work</a>
        </Link>
      </li>
      <li className="pr-6">
        <Link href="/#soft-skills">
          <a>Soft skills</a>
        </Link>
      </li>
      <li className="pr-6">
        <Link href="/#projects">
          <a>Projects</a>
        </Link>
      </li>
      <li className="pr-6">
        <Link href="/#other-work">
          <a>Other work</a>
        </Link>
      </li>
      <li className="pr-6">
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aida Vioque Portfolio</title>
        <meta name="description" content="Aida Vioque Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-8 overflow-auto relative bg-backround">
        <section className="min-h-screen relative">
          <h1 className="font-sans text-9xl pb-24 text-primary">
            <div>
              Aida
            </div>
            <div>
            Vioque
            </div>
          </h1>
          <h2 className="font-sans text-4xl pb-24 text-primary">
            Hi! I'm a Product designer
          </h2>
          <div className="absolute bottom-24 right-0" style={{
                width: '36%',
                aspectRatio: '819/668' }}>
            <Image src="/aida.avif" alt="Aida photo" layout="fill" />
          </div>
          <div className="absolute top-4 right-4 font-sans text-primary flex">
            <Menu />
          </div>
        </section>
        <Section id="work" className="min-h-screen text-primary">
          <div>
            <h3 className="font-sans text-right text-6xl mb-36">
              Work
            </h3>
            <div className="font-sans text-3xl">
              Product designer
            </div>
            <div className="font-sans text-3xl">
              Alligator
            </div>
            <div className="font-sans text-3xl">
              Oh no
            </div>
          </div>
        </Section>
        <Section id="soft-skills" className="min-h-screen text-primary">
          <div>
            <h3 className="font-sans text-right text-6xl mb-36">
              Soft Skills
            </h3>
            <div className="font-sans text-3xl">
              Product designer
            </div>
            <div className="font-sans text-3xl">
              Alligator
            </div>
            <div className="font-sans text-3xl">
              Oh no
            </div>
          </div>
        </Section>
        <Section id="projects" className="min-h-screen text-primary">
          <div>
            <h3 className="font-sans text-right text-6xl mb-36">
              Projects
            </h3>
            <div className="font-sans text-3xl">
              Product designer
            </div>
            <div className="font-sans text-3xl">
              Alligator
            </div>
            <div className="font-sans text-3xl">
              Oh no
            </div>
          </div>
        </Section>
        <Section id="contact" className="min-h-screen text-primary">
          <div>
            <a href="mailto:aida.aranvio@gmail.com">
              Contact
              <img src="/ufo.svg" alt="contact" height={60} width={60}  className={styles.contact}/>
            </a>
          </div>
        </Section>
      </main>
      <footer className="text-primary fixed bottom-0 left-0 pb-6 pt-2 pl-12 w-full bg-backround">
        <a href="mailto:aida.aranvio@gmail.com">
          aida.vioque@gmail.com
        </a>
        <Link href="/" >
          <a className="text-right pl-6 text-primary">⬆</a>
        </Link>
      </footer>
    </div>
  )
}
