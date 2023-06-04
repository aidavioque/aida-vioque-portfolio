/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
import Footer from 'app/components/footer';
// import Section from 'app/components/section';
export { metadata } from './metadata';

const NEXT_PUBLIC_WIP = process.env.NEXT_PUBLIC_WIP === 'true';

export default function Home() {
  return (
    <div>
      <section className="relative flex justify-center pt-36 lg:pt-1">
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <div className="flex-1">
            <h1 className="pb-8 font-sans text-4xl lg:text-[64px]">
              Aida Vioque
            </h1>
            <h2 className="pb-2 font-sans text-lg leading-relaxed">
              I am a Product Designer committed to integrating code and business
              needs to create innovative solutions centered around user
              experience.
            </h2>
            <div className="flex">
              <a
                className="mr-4 text-gray-300 underline"
                href="mailto:aida.aranvio@gmail.com"
                target="_blank"
              >
                Email
              </a>
              <a
                className="text-gray-300 underline"
                href="https://www.linkedin.com/in/aida-aranvio/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <img src="/images/bouquet.png" className="mb-10 w-[450px]" alt="" />
          </div>
          {/* {NEXT_PUBLIC_WIP && (
            <div className="min-w-1/2 lg:pl-16">
              <img
                src="/wip.gif"
                className="mb-10"
                style={{ height: '320px' }}
              />
              <h2 className="pb-24 font-sans text-4xl">
                Work in progress
              </h2>
            </div>
          )} */}
        </div>
      </section>
      {/* {!NEXT_PUBLIC_WIP && (
        <Section id="about" className="min-h-screen">
          <div>
            <h3 className="mb-16 text-center font-sans text-6xl">About</h3>
            <div className="flex justify-center">
              <div
                className="mb-16 h-16 w-16 rounded-full bg-cover"
                style={{ backgroundImage: `url(/aida.avif)` }}
              />
            </div>
            <div className="mb-16 text-center font-sans text-xl">
              La más linda que se haya visto. Oh my! ¡¡Cómo de linda es!!
            </div>
            <div className="flex justify-center">
              <Link className="text-center font-sans text-xl" href="/about">
                Read more
              </Link>
            </div>
          </div>
        </Section>
      )}
      {!NEXT_PUBLIC_WIP && (
        <Section id="projects" className="min-h-screen">
          <div>
            <h3 className="mb-36 text-center font-sans text-6xl">Projects</h3>
            <div className="flex justify-center">
              <div className="container grid grid-cols-3 gap-16">
                <div>
                  <img src="/aida.avif" className="mb-10" />
                  <div className="mb-6 text-center font-sans text-3xl">
                    Product designer
                  </div>
                  <div className="text-center font-sans text-xl">
                    Hola, es que eres super linda como product designer y vas a
                    ser la mejor
                  </div>
                </div>
                <div>
                  <img src="/aida.avif" className="mb-10" />
                  <div className="mb-6 text-center font-sans text-3xl">
                    Alligator
                  </div>
                  <div className="text-center font-sans text-xl">
                    Hola, es que eres super linda como product designer y vas a
                    ser la mejor
                  </div>
                </div>
                <div>
                  <img src="/aida.avif" className="mb-10" />
                  <div className="mb-6 text-center font-sans text-3xl">
                    Oh no
                  </div>
                  <div className="text-center font-sans text-xl">
                    Hola, es que eres super linda como product designer y vas a
                    ser la mejor, si!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}
      {!NEXT_PUBLIC_WIP && (
        <Section id="contact" className="min-h-screen">
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
      )} */}
      <Footer />
    </div>
  );
}
