/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
// import Footer from 'app/components/footer';
import Card from 'app/components/card';
import MiniFooter from 'app/components/mini-footer';
import PackagingCase from 'app/components/packaging-case';
import SmartProtectionCase from 'app/components/smart-protection-case';

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

import Contact from 'app/components/contact';
import Link from 'next/link';
const CardContent = ({
  image,
  title,
  description,
  children,
}: {
  image?: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}) => (
  <div className="h-screen overflow-auto md:h-full">
    <div className="mb-4 flex justify-center">
      <DialogHeader>
        <DialogTitle className="text-center text-[38px] font-normal leading-relaxed">
          {title}
        </DialogTitle>
        <DialogDescription className="max-w-[600px] text-center text-xl font-normal  leading-[30px] text-slate-700 text-opacity-50">
          {description}
        </DialogDescription>
      </DialogHeader>
    </div>
    <div className="py-4">{image}</div>
    {children}
    <div id="contact">
      <DialogFooter>
        <MiniFooter />
      </DialogFooter>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <section className="container relative my-10 grid grid-cols-12 flex-col">
        <div className="col-span-10 col-start-2 my-8">
          <h1 className="mt-8 pb-8 font-serif text-4xl font-semibold lg:text-8xl">
            Product Designer
          </h1>
          <div className="max-w-[512px] text-xl leading-7 text-gray-700">
            <p className="mb-8 font-sans">Hi, I&apos;m Aida</p>
            <p className="mb-8 font-sans">
              I care about crafting useful and beautiful designs that solve real
              problems. I understand the needs and behaviors of people.
            </p>
            <p className="mb-8 font-sans">
              My secret spice is my experience in editing, education, and
              illustration.
            </p>
          </div>
        </div>
      </section>
      <section className="container relative pb-48" id="product-design">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-10 col-start-2">
            <Card
              title="From networking to signing contracts"
              category="Product design"
              description="How to ran a design sprint to redesign the E-learning Experience and achieve higher retention rates."
              buttonText="View case study"
              link="/projects/smart-protection"
              image="/images/projects/smart-protection-button.jpg"
            />
          </div>
          <div className="col-span-10 col-start-2">
            <Card
              title="Information request proposal"
              description="Informative flow in a shipping company to reduce anxiety, increase confidence, and achieve higher user activation."
              image="/images/projects/package.png"
              content={<PackagingCase />}
            />
          </div>
          <div className="col-span-10 col-start-2">
            <Card
              title="Contest registration flow"
              description="Registration flow to participate in a contest to win a Monstera plant."
              image="/images/projects/monstera.jpg"
              content={
                <CardContent
                  title="Monstera contest registration flow"
                  description="Registration flow for an contest where participants have the chance to win a Monstera plant. This design aims to simplify the registration process, providing an easy and efficient experience for users."
                  image={
                    <img
                      src="/images/projects/full/monstera.jpg"
                      alt="Simple payment screens image"
                    />
                  }
                />
              }
            />
          </div>
          <div className="col-span-10 col-start-2">
            <Card
              title="Simple payment screens"
              description="Simple design exercise to investigate and test with forms."
              image="/images/projects/payment.jpg"
              content={
                <CardContent
                  title="Simple payment screens"
                  description="Simple design exercise to investigate and test with forms."
                  image={
                    <img
                      src="/images/projects/full/payment.jpeg"
                      alt="sign up image"
                    />
                  }
                />
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
          </div>
          <div className="col-span-10 col-start-2">
            <Card
              title="Monuments of the world"
              description="Interactive illustration of monuments of the world"
              image="/images/projects/monuments.png"
              content={
                <CardContent
                  title="Monuments of the world"
                  description="Interactive illustration of monuments of the world."
                >
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
                </CardContent>
              }
            />
          </div>
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
