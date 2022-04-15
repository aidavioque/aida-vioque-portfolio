/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Link from 'next/link'
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section = ({ children, className }) => {
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
        className={className}
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 2, ease: 'easeOut' }}
        variants={variants}
      >
        { children }
      </motion.div>
   </InView>
  )
};

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
          <h1 className="font-sans text-9xl pb-24">
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
          <a href="mailto:aida.aranvio@gmail.com" className="absolute top-4 right-4 font-sans text-primary">
            Contact
            <img src="/ufo.svg" alt="contact" height={60} width={60}  className={styles.contact}/>
          </a>
        </section>
        <Section className="min-h-screen text-primary">
          <div>
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
          Yar Pirate Ipsum
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.

          Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
        </Section>
      </main>
    </div>
  )
}
