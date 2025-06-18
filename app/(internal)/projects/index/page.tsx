/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Block from '@/components/block';
import { cn } from '@/lib/utils';
import ViewMoreCard from '@/components/view-more-card';

const TriBlock = ({
  image1,
  image2,
  image3,
  text1,
  text2,
  text3,
  bigText1,
  bigText2,
  bigText3,
  className,
}: {
  image1?: string;
  image2?: string;
  image3?: string;
  text1?: string | React.ReactNode;
  text2?: string | React.ReactNode;
  text3?: string | React.ReactNode;
  bigText1?: string | React.ReactNode;
  bigText2?: string | React.ReactNode;
  bigText3?: string | React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'inline-flex w-full flex-wrap justify-center gap-y-12 lg:justify-between',
        className,
      )}
    >
      <div className="inline-flex w-[343px] flex-col items-center justify-start gap-8">
        {image1 && <Image src={image1} alt="" width={100} height={100} />}
        <div className="space-y-6">
          {bigText1 && (
            <div className="text-semibold text-center font-serif text-primary">
              {bigText1}
            </div>
          )}
          <div className="text-center text-xl font-normal leading-7 text-gray-700">
            {text1}
          </div>
        </div>
      </div>
      <div className="inline-flex w-[343px] flex-col items-center justify-start gap-8">
        {image2 && <Image src={image2} alt="" width={100} height={100} />}
        <div className="space-y-6">
          {bigText2 && (
            <div className="text-semibold text-center font-serif text-primary">
              {bigText2}
            </div>
          )}
          <div className="text-center text-xl font-normal leading-7 text-gray-700">
            {text2}
          </div>
        </div>
      </div>
      <div className="inline-flex w-[343px] flex-col items-center justify-start gap-8">
        {image3 && <Image src={image3} alt="" width={100} height={100} />}
        <div className="space-y-6">
          {bigText3 && (
            <div className="text-semibold text-center font-serif text-primary">
              {bigText3}
            </div>
          )}

          <div className="text-center text-xl font-normal leading-7 text-gray-700">
            {text3}
          </div>
        </div>
      </div>
    </div>
  );
};

function Index() {
  return (
    <>
      <div className="container grid py-24">
        <div className="grid-cols-12 space-y-16">
          <section className="relative grid grid-cols-12 flex-col">
            <div className="col-span-12">
              <h1 className="mt-8 pb-8 font-serif text-4xl font-semibold leading-[75.60px] lg:text-8xl">
                Poor UX research insights undermine designers
              </h1>
              <p className="max-w-[740px] font-sans text-xl leading-7 text-gray-700/70">
                How we overcame challenges and adjusted efforts to successfully
                complete the project despite initial research flaws.
              </p>
            </div>
          </section>
          <div className="relative">
            <div className="absolute z-10 flex h-full w-full items-center justify-center">
              <div className="max-h-[704px] max-w-[991px]">
                <Image
                  src="/images/video/index.gif"
                  alt="Index app presentation"
                  width={991}
                  height={704}
                />
              </div>
            </div>
            <Image
              src="/images/projects/index-1.svg"
              className="w-full"
              alt=""
              width={1252}
              height={783}
            />
          </div>
          <Block
            TitleTag="h3"
            category="Context"
            title={
              <div>
                Why{' '}
                <span className="text-[42px] font-semibold leading-[46px] text-[#2a8288]">
                  quantity{' '}
                </span>
                and{' '}
                <span className="text-[42px] font-semibold leading-[46px] text-[#2a8288]">
                  quality{' '}
                </span>
                matter?
              </div>
            }
            text={
              <div className="flex flex-col gap-4 lg:gap-8">
                <p>
                  To make a name for yourself in scientific research, you need
                  to{' '}
                  <span className="font-bold">
                    publish in relevant journals
                  </span>
                  , to be indexed and, therefore, cited as a researcher. The
                  more papers you publish, the more chances you have of
                  visibility in the academic world.
                </p>
                <p>
                  In this project, we consider the journal&apos;s{' '}
                  <span className="font-bold">perspective</span>, where
                  high-quality articles meeting specific parameters are
                  essential to overcome publication challenges.
                </p>
              </div>
            }
            text2={
              <>
                <div className="flex flex-col  gap-8 lg:min-w-[511px]">
                  <div className="font-serif text-base font-semibold uppercase leading-tight text-gray-900">
                    {' '}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start justify-center gap-6">
                      <div className="flex flex-col gap-1">
                        <div className="font-serif text-base font-semibold uppercase leading-tight text-gray-400">
                          Client
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          Index
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          Industry
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          Scientific publishing industry
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          my role
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          Design lead
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          timeline
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          2 months
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
      <div className="inline-flex w-full flex-col items-center justify-center gap-12 bg-gray-900">
        <div className="grid py-[72px]">
          <div className="container inline-flex grid-cols-12 flex-col gap-8 font-serif">
            <div className="text-center text-base font-semibold uppercase leading-tight text-white/80">
              the brief
            </div>
            <div className="w-full text-center">
              <span className="min-w-full text-[42px] font-semibold leading-[46px] text-white">
                Optimize and simplify the editorial workflow for scientific
                journals, automating manual and repetitive tasks for editors to
                focus on their mission and article management.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid py-12">
        <div className="space-y-12">
          <Block
            TitleTag="h3"
            category="Challenge"
            title={
              <>
                How do you approach a project when there is{' '}
                <span className="text-primary">little information </span>{' '}
                available and low valuable insights to work with?
              </>
            }
            text={
              <>
                As the main challenge of this project was the lack of
                information to guide our solutions, we decided to take a
                different approach.
              </>
            }
          />
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container grid space-y-12 py-12">
          <div className="w-full text-center">
            <span className="min-w-full text-[42px] font-semibold leading-[46px]">
              <div className="self-stretch text-center">
                <span className="">
                  We shifted our proposal to address usability issues through{' '}
                </span>
                <span className="text-primary">heuristic analysis</span>
                <span className="">
                  , then moved on to tactical objectives.
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="container grid py-12">
        <div className="mt-14 space-y-12">
          <Block
            TitleTag="h3"
            category="design system"
            title={
              <>
                All under the{' '}
                <span className="text-primary">same umbrella</span>
              </>
            }
            text={
              <p>
                We redesigned the product to align with its strong scientific
                branding, implementing slight typographic adjustments to enhance
                on-screen readability
              </p>
            }
          />
          <div className="flex w-full justify-center">
            <Image
              src="/images/projects/index-2.png"
              alt=""
              width={908}
              height={658}
            />
          </div>
          <Block
            TitleTag="h3"
            category="design system"
            title={
              <>
                It&apos;s challenging to{' '}
                <span className="text-primary">design a painless form</span>
              </>
            }
            text={
              <ul className="list-disc pl-6 text-xl">
                <li>Intuitive screens</li>
                <li>Chat bot for help within the process</li>
                <li>Translator</li>
                <li>Information in two languages</li>
                <li>Saving options</li>
              </ul>
            }
          />
          <div className="flex w-full justify-center">
            <Image
              className="shadow-lg"
              src="/images/projects/index-3.png"
              alt=""
              width={902}
              height={642}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container grid space-y-12 py-12">
          <Block
            TitleTag="h3"
            category="design system"
            title={
              <>
                Our proposal is to <span className="text-primary"> unify</span>{' '}
                under the same{' '}
                <span className="text-primary"> design system</span>
              </>
            }
            text={
              <ul className="list-disc pl-6 text-xl">
                <li>
                  The main action on the page should have a limited color
                  palette, with a specified color.
                </li>
                <li>
                  There should be a clear separation between the main action and
                  the navigation bar.
                </li>
                <li>Ensure aesthetic and functional unity.</li>
              </ul>
            }
            image="/images/projects/index-4.png"
            imageHeight={507}
            imageWidth={671}
          />
        </div>
      </div>
      <div className="container grid py-12">
        <div className="grid-cols-12 space-y-16">
          <Block
            TitleTag="h3"
            category="solution"
            title={
              <>
                Reducing <span className="text-primary"> cognitive load</span>
              </>
            }
            text={
              <>
                Our approach to presenting the standards is to simplify and ease
                readability, with the goal for the author to understand how and
                when to apply them.
              </>
            }
          />
          <div className="flex w-full justify-center">
            <Image
              className="shadow-lg"
              src="/images/projects/index-5.png"
              alt=""
              width={902}
              height={642}
            />
          </div>
          <Block
            TitleTag="h3"
            category="key learning"
            title={
              <>
                What have I <span className="text-primary">learned</span>?
              </>
            }
          />
          <TriBlock
            className="!mt-8 items-start"
            bigText1={
              <div className="text-left font-serif text-3xl font-bold text-gray-900">
                Research matters
              </div>
            }
            bigText2={
              <div className="text-left font-serif text-3xl font-bold text-gray-900">
                Design for real-world problems
              </div>
            }
            bigText3={
              <div className="text-left font-serif text-3xl font-bold text-gray-900">
                Communication is key
              </div>
            }
            text1={
              <div className="text-left">
                Data serves as the guide for making decisions. Having good
                research skills will help you save time
              </div>
            }
            text2={
              <div className="text-left">
                In this project, there were multiple aspects to consider.
                Understanding which metrics we want to impact can help avoid
                disappointments.
              </div>
            }
            text3={
              <div className="text-left">
                It is important to establish clear agreements with both the
                client and the team
              </div>
            }
          />
        </div>
      </div>
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

export default Index;
