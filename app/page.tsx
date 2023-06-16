/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Footer from 'app/components/footer';
import Card from 'app/components/card';
import MiniFooter from 'app/components/mini-footer';
export { metadata } from './metadata';
import {
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-40px)] justify-center pt-10 md:pt-36 lg:pt-1">
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <div className="flex-1">
            <h1 className="pb-8 font-sans text-4xl lg:text-[64px]">
              Aida Vioque
            </h1>
            <p className="pb-2 font-sans text-lg leading-relaxed">
              I am a Product Designer committed to integrating code and business
              needs to create innovative solutions centered around user
              experience.
            </p>
            <div className="flex">
              <a
                className="text-gray-300 mr-4 underline"
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
            <img
              src="/images/cohete.gif"
              className="mb-10 w-[450px] translate-y-16"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container relative pt-10 pb-48 md:pt-36 lg:pt-1">
        <h2 className="pb-16 text-5xl text-primary">Product design</h2>
        <div className="pl-16">
          <Card
            title="Sign up form flow"
            description="Descripción del caso de estudio"
            image="/images/projects/monstera.jpg"
            content={
              <div className="overflow-auto">
                <DialogHeader>
                  <DialogTitle className="font-sans text-4xl font-normal text-black">
                    Sign up form flow
                  </DialogTitle>
                  <DialogDescription>
                    Descripción del caso de estudio
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <img
                    src="/images/projects/full/monstera.jpg"
                    alt="sign up image"
                  />
                </div>
                <div id="contact">
                  <DialogFooter>
                    <MiniFooter />
                  </DialogFooter>
                </div>
              </div>
            }
          />
        </div>
      </section>
      <section className="container relative pt-10 pb-48 md:pt-36 lg:pt-1">
        <h2 className="pb-16 text-5xl text-primary">Design and Illustration</h2>
        <div className="pl-16"></div>
      </section>
      <DialogFooter>
        <MiniFooter />
      </DialogFooter>
      <Footer />
    </>
  );
}
