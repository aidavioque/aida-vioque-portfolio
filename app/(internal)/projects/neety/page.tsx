/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Block from '@/components/block';
import ViewMoreCard from '@/components/view-more-card';

function Neety() {
  return (
    <>
      {/* Hero */}
      <div className="container grid py-12 pt-24">
        <div className="grid-cols-12 space-y-16">
          <section className="relative grid grid-cols-12 flex-col">
            <div className="col-span-12">
              <h1 className="mt-8 pb-8 font-serif text-4xl font-semibold lg:text-8xl">
                Designing clarity into <span className="text-primary">AI</span>
                -powered sales automation
              </h1>
              <p className="font-sans text-xl leading-7 text-gray-700/70">
                Redesign a human focused experience for a B2B SaaS tool to
                generate LinkedIn leads with AI.
              </p>
            </div>
          </section>

          {/* Hero image (temporary placeholder until Figma export) */}
          <Image
            src="/images/projects/neety.png"
            className="w-full"
            alt="Neety case study hero"
            width={1252}
            height={691}
          />

          {/* Example Block (structure placeholder, copy to be replaced with Figma content) */}
          <Block
            TitleTag="h3"
            category="Context"
            title={
              <>
                <span className="text-primary">Why</span> are we here?
              </>
            }
            text={
              <>
                Copy will be filled from Figma. This section will introduce the
                product and the design goals at a high level.
              </>
            }
          />
        </div>
      </div>

      {/* You might be interested */}
      <div className="bg-gray-800">
        <div className="container grid w-full gap-4 pb-24">
          <div className="grid-cols-12">
            <div className="mt-[40px] flex flex-col gap-4 py-6 lg:mt-[112px]">
              <div className="font-serif text-[52px] font-semibold leading-[46.80px] text-white">
                You might be interested
              </div>
              <div className="text-xl font-normal leading-7 text-white">
                Take a look to other case studies, you might find what you are
                looking for.
              </div>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-16 py-6">
              <ViewMoreCard
                link="/projects/smart-protection"
                image="/images/projects/interested-4.png"
                category="ui design"
                title="Boosting product awareness"
                text="How to effectively communicate product improvements to customers and attract new users."
              />
              <ViewMoreCard
                link="/projects/samoo"
                image="/images/projects/interested-2.png"
                category="product design"
                title="Good networking increase conversion rates"
                text="How to ran a design sprint to redesign the E-learning Experience and achieve higher retention rates."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Neety;
