/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Footer from 'app/components/footer';
export { metadata } from './metadata';

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
        </div>
      </section>
      <Footer />
    </div>
  );
}
