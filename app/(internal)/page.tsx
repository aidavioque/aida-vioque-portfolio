/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
// import Footer from 'app/components/footer';
import Card from 'app/components/card';
import MiniFooter from 'app/components/mini-footer';
import PackagingCase from 'app/components/packaging-case';
import Arrow from 'app/components/arrow';
// import IllustrationSection from 'app/components/illustration-section';
import { Button } from '#/components/ui/button';
export { metadata } from './metadata';
import {
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-40px)] flex-col justify-evenly pt-10 md:pt-36 lg:pt-1">
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <div className="flex-1">
            <h1 className="pb-8 font-sans text-4xl lg:text-[52px]">
              Aida Vioque
            </h1>
            <p className="text-gray-600 pb-2 font-sans text-lg leading-relaxed">
              I am a Product Designer with background in Illustration, Edition
              and Pedagogy, trying to make meaningful and usable things.
            </p>
            <div className="flex">
              <a
                className="mr-4 font-semibold text-sky-700 underline"
                href="mailto:aida.aranvio@gmail.com"
                target="_blank"
              >
                Email
              </a>
              <a
                className="font-semibold text-sky-700 underline"
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
        <div className="flex justify-center">{<Arrow />}</div>
      </section>
      <section
        className="container relative pt-10 pb-48 md:pt-36 lg:pt-1"
        id="product-design"
      >
        <h2 className="pb-16 text-5xl text-primary">Product design</h2>
        <div className="flex flex-col items-center justify-center lg:pl-16">
          <Card
            title="Information request proposal"
            description="Informative flow in a shipping company to reduce anxiety, increase confidence, and achieve higher user activation."
            image="/images/projects/package.png"
            content={<PackagingCase />}
          />
          <Card
            title="Contest registration flow"
            description="Registration flow to participate in a contest to win a Monstera plant."
            image="/images/projects/monstera.jpg"
            content={
              <div className="h-screen overflow-auto md:h-full">
                <DialogHeader>
                  <DialogTitle className="pb-2 text-center font-sans text-2xl font-normal text-black">
                    Monstera contest registration flow
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Registration flow for an contest where participants have the
                    chance to win a Monstera plant. This design aims to simplify
                    the registration process, providing a easy and efficient
                    experience for users.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <img
                    src="/images/projects/full/monstera.jpeg"
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
          <Card
            title="Simple payment screens"
            description="Simple design exercise to investigate and test with forms."
            image="/images/projects/payment.jpg"
            content={
              <div className="h-screen overflow-auto md:h-full">
                <DialogHeader>
                  <DialogTitle className="pb-2 text-center font-sans text-2xl font-normal text-black">
                    Simple payment screens
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Simple design exercise to investigate and test with forms.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <img
                    src="/images/projects/full/payment.jpeg"
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
          {/* <Card
            title="Smart Protection"
            description="Marketing campaign in different media platforms"
            image="/images/projects/smart-protection.jpg"
            content={
              <div className="h-screen overflow-auto md:h-full">
                <DialogHeader>
                  <DialogTitle className="text-center font-sans text-2xl font-normal text-black pb-2">
                    Smart Protection
                  </DialogTitle>
                  <DialogDescription className='text-center'>
                    Marketing campaign in different media platforms
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <img
                    src="/images/projects/full/smart-protection.jpg"
                    alt="smart-protection"
                  />
                </div>
                <div id="contact">
                  <DialogFooter>
                    <MiniFooter />
                  </DialogFooter>
                </div>
              </div>
            }
          /> */}
          <Card
            title="Monuments of the world"
            description="Interactive illustration of monuments of the world"
            image="/images/projects/monuments.png"
            content={
              <div className="h-screen overflow-auto md:h-full">
                <DialogHeader>
                  <DialogTitle className="pb-2 text-center font-sans text-2xl font-normal text-black">
                    Monuments of the world
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Interactive illustration of monuments of the world
                  </DialogDescription>
                </DialogHeader>
                <div className="flex w-full flex-col items-center justify-center py-4">
                  <div className="py-4">
                    <Link href="/infografia" target="_blank">
                      <img
                        className="max-w-[600px]"
                        src="/images/projects/monuments.png"
                        alt="monuments of the world"
                      />
                    </Link>
                  </div>
                  <Button asChild>
                    <Link href="/infografia" target="_blank">
                      See the project
                    </Link>
                  </Button>
                </div>
                <div>
                  <DialogFooter>
                    <MiniFooter />
                  </DialogFooter>
                </div>
              </div>
            }
          />
        </div>
      </section>
      {/* <IllustrationSection />
      <Footer /> */}
      <div className="flex justify-end">
        <div className="container absolute bottom-6 text-right">
          <Arrow bottom />
        </div>
      </div>
    </>
  );
}
