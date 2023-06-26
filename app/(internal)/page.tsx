/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Footer from 'app/components/footer';
import Card from 'app/components/card';
import MiniFooter from 'app/components/mini-footer';
import Arrow from 'app/components/arrow';
import IllustrationSection from 'app/components/illustration-section';
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
        <div className="flex justify-center">{<Arrow />}</div>
      </section>
      <section
        className="container relative pt-10 pb-48 md:pt-36 lg:pt-1"
        id="product-design"
      >
        <h2 className="pb-16 text-5xl text-primary">Product design</h2>
        <div className="lg:pl-16">
          <Card
            title="Information request proposal in a shipping company"
            description="Informative flow  to reduce anxiety, increase confidence, and achieve higher user activation."
            image="/images/projects/package.png"
            content={
              <div className="overflow-auto">
                <DialogHeader>
                  <DialogTitle className="font-sans text-4xl font-normal text-black">
                    <div className="w-[600px] text-[32px] font-normal leading-9 text-slate-800">
                      Minimizing obstacles: Information request proposal in a
                      shipping company
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    Informative flow to reduce anxiety, increase confidence, and
                    achieve higher user activation.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <img
                    src="/images/projects/full/package.png"
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
          <Card
            title="Smart Protection"
            description="Marketing campaign in different media platforms"
            image="/images/projects/smart-protection.jpg"
            content={
              <div className="overflow-auto">
                <DialogHeader>
                  <DialogTitle className="font-sans text-4xl font-normal text-black">
                    Smart Protection
                  </DialogTitle>
                  <DialogDescription>
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
          />
          <Card
            title="Monuments of the world"
            description="Interactive illustration of monuments of the world"
            image="/images/projects/monuments.png"
            content={
              <div className="overflow-auto">
                <DialogHeader>
                  <DialogTitle className="font-sans text-4xl font-normal text-black">
                    Monuments of the world
                  </DialogTitle>
                  <DialogDescription>
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
      <IllustrationSection />
      <Footer />
    </>
  );
}
