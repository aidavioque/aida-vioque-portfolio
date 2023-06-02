/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head';
import Link from 'next/link';
import cx from 'classnames';
import Section from 'app/components/section/section';

const AboutComponent = ({ children }) => (
  <div className="container relative grid grid-cols-2 gap-16">
    <div className="absolute top-0 flex h-full w-full items-center justify-center">
      <div className="h-full w-1 bg-primary" />
    </div>
    {children}
  </div>
);

const AboutField = ({ title, children, isEven }) => (
  <div
    className={cx('flex flex-col', {
      'items-start': !isEven,
      'items-end': isEven,
    })}
  >
    <h4 className={cx('mb-4 text-2xl font-bold', { 'text-right': isEven })}>
      {title}
    </h4>
    {children}
  </div>
);

const ABOUT_FIELDS = [
  {
    title: 'Product designer',
    text: 'blablablabalbalbal',
  },
  {
    title: 'Product designer',
    text: 'blablablabalbalbal',
  },
  {
    title: 'La más linda',
    text: 'blablablabalbalbal',
  },
];

function About() {
  return (
    <div>
      <Head>
        <title>Aida Vioque Portfolio</title>
        <meta name="description" content="Aida Vioque Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen overflow-auto bg-backround p-8">
        <Section id="about" className="min-h-screen text-primary">
          <div>
            <h3 className="mb-36 text-center font-sans text-6xl">About</h3>
            <div className="flex items-center justify-center">
              <AboutComponent>
                {ABOUT_FIELDS.map(({ title, text }, i) => (
                  <>
                    {i % 2 !== 0 && <div></div>}
                    <AboutField isEven={i % 2 === 0} title={title}>
                      {text}
                    </AboutField>
                    {i % 2 === 0 && <div></div>}
                  </>
                ))}
              </AboutComponent>
            </div>
          </div>
        </Section>
      </main>
      <footer className="fixed bottom-0 left-0 w-full bg-backround pb-6 pt-2 pl-12 text-primary">
        <a href="mailto:aida.aranvio@gmail.com" className="hover:scale-110">
          aida.vioque@gmail.com
        </a>
        <Link href="/" className="pl-6 text-right text-primary hover:scale-110">
          ⬆
        </Link>
      </footer>
    </div>
  );
}

export default About;
