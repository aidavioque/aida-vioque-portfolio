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

const Highlighted = ({ text }: { text: string }) => (
  <div className="inline-flex h-20 items-center justify-start gap-6 rounded-[10px] bg-orange-300 bg-opacity-20 px-6 py-4">
    <div className="text-center text-base font-normal leading-normal text-slate-700">
      {text}
    </div>
  </div>
);

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
              I am a Product Designer and illustrator, with a Pedagogy
              background trying to make meaningful and usable experiences.
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
        <div className="flex flex-col items-center justify-center lg:pl-16">
          <Card
            title="Information request proposal"
            description="Informative flow in a shipping company to reduce anxiety, increase confidence, and achieve higher user activation."
            image="/images/projects/package.png"
            content={
              <div className="h-screen overflow-auto md:h-full">
                <DialogHeader>
                  <DialogTitle className="pb-2 text-center font-sans text-2xl font-normal text-black">
                    <p>Minimizing obstacles:</p>Information request proposal in
                    a shipping company
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    My main goal is to design a simple, informative flow
                    accompanied by a UX Writing proposal to reduce anxiety,
                    increase confidence, and achieve higher user activation.
                  </DialogDescription>
                </DialogHeader>
                <div className="container mt-24">
                  <div className="mb-12 flex gap-12">
                    <div className="flex max-w-[50%] flex-col justify-center space-y-8 pt-1 text-center text-sm">
                      <div>
                        <h4 className="py-2 font-bold uppercase">My role</h4>
                        <ul className="space-y-2">
                          <li>Product Designer</li>
                          <li>UX writer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="py-2 font-bold uppercase">
                          Setting up the tone
                        </h4>
                        <p className="max-w-[450px] space-y-2">
                          Among the 4 dimensions of tone, I have chosen a casual
                          and slightly enthusiastic approach, while maintaining
                          friendliness and generating trust in the user.
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/projects/full/packing1.jpg"
                        alt="package"
                      />
                    </div>
                  </div>
                  <div className="mb-12 flex gap-12">
                    <div>
                      <img
                        src="/images/projects/full/packing2.jpg"
                        alt="package"
                      />
                    </div>
                    <div className="flex max-w-[50%] flex-col justify-center space-y-2 pt-1 text-center text-sm">
                      <h4 className="py-4 font-bold uppercase">
                        Why did I take this approach
                      </h4>
                      <div className="space-y-8">
                        <ul className="space-y-2">
                          <li>Based on Hick&apos;s Law</li>
                          <li>
                            <Highlighted text="The time it takes to make a decision increases with the number and complexity of choices." />
                          </li>
                          <li>
                            The fewer options, the faster the choice and the
                            less anxiety.
                          </li>
                        </ul>
                        <ul className="space-y-2">
                          <li>The Law of Conservation of Complexity</li>
                          <li>
                            <Highlighted text="For any system there is a certain amount of complexity which cannot be reduced." />
                          </li>
                          <li>
                            Reducing the complexity of the steps and the
                            language (UX writing) that accompanies the flow.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 flex gap-12">
                    <div className="flex max-w-[50%] flex-col justify-center space-y-2 pt-1 text-center text-sm">
                      <h4 className="py-2 font-bold uppercase">
                        Divide and rule
                      </h4>
                      <p className="max-w-[450px] text-sm">
                        To alleviate the anxiety associated with providing data,
                        I have divided the form into two blocks, aiming to
                        reduce cognitive load and simplify the process.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/projects/full/packing3.jpg"
                        alt="package"
                      />
                    </div>
                  </div>
                  <div className="mb-12 flex gap-12">
                    <div>
                      <img
                        src="/images/projects/full/packing4.jpg"
                        alt="package"
                      />
                    </div>
                    <div className="flex max-w-[50%] flex-col justify-center space-y-2 pt-1 text-center text-sm">
                      <h4 className="py-2 font-bold uppercase">
                        Gathering Relevant Information
                      </h4>
                      <p className="max-w-[450px]">
                        I focused on collecting only the relevant information to
                        avoid potential frictions and ensure that the user stays
                        on track. The solution will be customized according to
                        the needs of the potential client.
                      </p>
                    </div>
                  </div>
                  <div className="mb-12 flex gap-12">
                    <div className="flex max-w-[50%] flex-col justify-center space-y-2 pt-1 text-center text-sm">
                      <h4 className="py-2 font-bold uppercase">Success!</h4>
                      <p className="max-w-[450px]">
                        Overall, my approach is centered around minimizing
                        obstacles and frictions in the information request
                        process in the shipping company, through a proposal
                        designed to reduce anxiety, keep the user informed, and
                        gather only necessary information.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/projects/full/packing5.jpg"
                        alt="package"
                      />
                    </div>
                  </div>
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
      <IllustrationSection />
      <Footer />
    </>
  );
}
