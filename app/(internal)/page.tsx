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
      <section className="relative flex min-h-[calc(100vh-40px)] flex-col justify-evenly pt-10 md:pt-36 lg:pt-1">
        <div className="container flex flex-col items-center justify-between space-x-16 lg:flex-row">
          <div className="min-w-[65%] flex-1">
            <h1 className="pb-8 font-sans text-4xl lg:text-[52px]">
              Aida Vioque
            </h1>
            <p className="text-gray-600 mb-4 font-sans text-2xl leading-[36.95px]">
              I am a Product Designer with background in Illustration, Edition
              and Pedagogy, trying to make meaningful and usable things.
            </p>
            <Contact />
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
        className="container relative pb-48 pt-10 md:pt-36 lg:pt-1"
        id="product-design"
      >
        <h2 className="pb-16 text-5xl text-primary">Case studies</h2>
        <div className="flex flex-col items-center justify-center lg:pl-16">
          <Card
            title="Smart protection"
            description="Scaling a company that protects intellectual and industrial property rights on the internet."
            image="/images/projects/smart-protection-button.jpg"
            content={<SmartProtectionCase />}
          />
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
