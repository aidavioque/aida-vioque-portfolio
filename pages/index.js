/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aida Vioque Portfolio</title>
        <meta name="description" content="Aida Vioque Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div>
            Aida
          </div>
          <div>
           Vioque
          </div>
        </h1>
        <section className={styles.section}>
          <div className={styles.role}>
            Product designer
          </div>
          <div className={styles.role}>
            Alligator
          </div>
          <div className={styles.role}>
            Oh no
          </div>
        </section>
        <div className={styles.imageContainer}>
          <Image src="/aida.avif" alt="Aida photo" layout='fill' />
        </div>
        <a href="mailto:aida.aranvio@gmail.com" className={styles.contactContainer}>
          Contact
          <img src="/ufo.svg" alt="contact" height={60} width={60}  className={styles.contact}/>
        </a>
      </main>
    </div>
  )
}
