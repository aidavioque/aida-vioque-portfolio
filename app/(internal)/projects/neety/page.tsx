/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Block from '@/components/block';
import ViewMoreCard from '@/components/view-more-card';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
        'flex w-full flex-wrap justify-center gap-y-12 gap-x-8 lg:justify-between',
        className,
      )}
    >
      <div className="flex w-[343px] flex-col items-center justify-start gap-8">
        {image1 && <Image src={image1} alt="" width={100} height={100} />}
        <div className="space-y-6">
          {bigText1 && (
            <div className="font-serif text-3xl font-semibold text-gray-900">
              {bigText1}
            </div>
          )}
          <div className="text-xl font-normal leading-7 text-gray-700">
            {text1}
          </div>
        </div>
      </div>
      <div className="inline-flex w-[343px] flex-col items-center justify-start gap-8">
        {image2 && <Image src={image2} alt="" width={100} height={100} />}
        <div className="space-y-6">
          {bigText2 && (
            <div className="font-serif text-3xl font-semibold text-gray-900">
              {bigText2}
            </div>
          )}
          <div className="text-xl font-normal leading-7 text-gray-700">
            {text2}
          </div>
        </div>
      </div>
      <div className="inline-flex w-[343px] flex-col items-center justify-start gap-8">
        {image3 && <Image src={image3} alt="" width={100} height={100} />}
        <div className="space-y-6">
          {bigText3 && (
            <div className="font-serif text-3xl font-semibold text-gray-900">
              {bigText3}
            </div>
          )}

          <div className="text-xl font-normal leading-7 text-gray-700">
            {text3}
          </div>
        </div>
      </div>
    </div>
  );
};
function Neety() {
  return (
    <>
      {/* Hero */}
      <div className="grid py-12 pt-24">
        <div className="grid-cols-12 space-y-16">
          <section className="container relative grid grid-cols-12 flex-col">
            <div className="col-span-12">
              <h1 className="mt-8 pb-8 font-serif text-4xl font-semibold lg:text-8xl">
                Redesign AI sales tool to make it feel human
              </h1>
              <p className="font-sans text-xl leading-7 text-gray-700/70">
                From confusion to conversion: redesign an informed and
                human-focused experience for a B2B SaaS tool to generate
                LinkedIn leads with AI.
              </p>
            </div>
          </section>

          {/* Hero image (temporary placeholder until Figma export) */}
          <Image
            src="/images/projects/neety/hero.png"
            className="container w-full"
            alt="Neety case study hero"
            width={1252}
            height={691}
          />
          <Block
            TitleTag="h3"
            category="What is Neety?"
            className="container"
            title={<>Increase trust and usability</>}
            text={
              <>
                <p className="mb-6">
                  Neety is a SaaS tool that helps sales teams automate LinkedIn
                  prospecting using AI.
                </p>
                <p>
                  We discovered thought research that users felt lost: unclear
                  flows, generic content, and no dashboard to understand what
                  the tool was doing for them.
                </p>
              </>
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
                          Neety
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          Product
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          AI powered SaaS B2C
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          my role
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          Product designer (UX/UI)
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          Format
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          Web platform
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Block
            TitleTag="h3"
            category="Problem"
            className="container"
            title={<>Poor UX</>}
            text={
              <>
                <p className="mb-6">
                  The platform had been designed with AI in mind, but the user
                  experience had not been considered.
                </p>
                <p>
                  The challenge was to improve the experience of a highly
                  technical and unintuitive platform.
                </p>
              </>
            }
          />
          <TriBlock
            className="container justify-start lg:justify-center p-4"
            bigText1={<>Low trust in automation</>}
            text1={
              <>
                Users felt they were losing control, couldn’t verify results,
                and therefore didn’t trust the system.
              </>
            }
            bigText2={<>Confusing flows and terminology</>}
            text2={
              <>
                Users didn’t understand what was happening inside Neety (were
                messages being sent? how many replies? what were the campaign
                results?).
              </>
            }
            bigText3={<>Lack of visibility of errors and pending actions</>}
            text3={
              <>
                It wasn’t clear which messages had failed to send or were still
                in queue.
              </>
            }
          />
          <div className="flex w-full flex-col items-center justify-center gap-12 bg-gray-900">
            <div className="grid py-[72px] lg:py-[208px]">
              <div className="container inline-flex grid-cols-12 flex-col gap-8 font-serif">
                <div className="text-center text-base font-semibold uppercase leading-tight text-white/80">
                  from research
                </div>
                <div className="max-w-[700px] text-center">
                  <span className="w-full text-[32px] font-semibold leading-[46px] text-white">
                    Users didn’t understand what was happening, how to control
                    it, or whether it was working at all.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Block
          TitleTag="h3"
          category="Impact"
          className="container py-4 lg:py-[100px]"
          title={<>Key outcomes</>}
          text={
            <>
              The result was a more intuitive experience, aligned with the
              commercial logic of its users.
            </>
          }
        />
        <TriBlock
          className="container"
          bigText1={
            <div className="text-8xl text-primary text-center">70%</div>
          }
          bigText2={
            <div className="text-8xl text-primary text-center">65%</div>
          }
          bigText3={
            <div className="text-8xl text-primary text-center">75%</div>
          }
          text1={
            <div className="text-center">
              said they trusted the system more after seeing clear metrics on
              messages, replies, and meetings.
            </div>
          }
          text2={
            <div className="text-center">
              found key information faster (average time {'<'}10s).
            </div>
          }
          text3={
            <div className="text-center">
              valued the change in copy and terminology.
            </div>
          }
        />
      </div>
      <Block
        TitleTag="h3"
        category="Solution"
        className="container py-4 lg:py-[100px] items-end"
        title={<>Hierarchy & Interactivity</>}
        text={
          <>
            Information hierarchy is crucial to understanding how to navigate.
            Microinteractions make a product more rewarding to use and,
            therefore, increase adoption rates.
          </>
        }
        video="/videos/n1.mp4"
        videoClassName="mt-12 lg:mt-0 rounded-2xl"
        videoHeight={600}
        videoWidth={600}
      />
      <Block
        TitleTag="h3"
        category="Solution"
        className="container py-4 lg:py-[100px] items-end"
        title={<>Improved UX writing</>}
        text={
          <>
            <p className="mb-6">
              In the interviews, no one understood the term “agents,” but they
              all spoke about “campaigns”.
            </p>
            <p>
              This change aligned the campaign creation flow with the mental
              model of sales and marketing teams.
            </p>
          </>
        }
        image="/images/projects/neety/n2.png"
        imageClassName="flex-1"
        layout="image-left"
        imageHeight={829}
        imageWidth={587}
      />
      <Block
        TitleTag="h3"
        category="Solution"
        className="container py-4 lg:py-[100px] items-end"
        title={<>One step at a time</>}
        text={
          <>
            As there are quite a few steps to start using the platform, a guided
            process reassures users and prevents them from feeling lost in
            technical details.
          </>
        }
        image="/images/projects/neety/n3.png"
        imageClassName="flex-1 mt-12 lg:mt-0"
        imageHeight={829}
        imageWidth={587}
      />
      <div className="flex w-full flex-col items-center justify-center gap-12 bg-gray-900">
        <div className="grid py-[72px] lg:py-[208px]">
          <div className="container inline-flex grid-cols-12 flex-col gap-8 font-serif">
            <div className="text-center text-base font-semibold uppercase leading-tight text-white/80">
              Learning
            </div>
            <div className="max-w-[700px] text-center">
              <span className="w-full text-[32px] font-semibold leading-[46px] text-white">
                Most users didn’t care that there was AI behind the tool — they
                cared about control, clarity, and whether their effort was
                leading to real conversations.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Block
        TitleTag="h3"
        category="Solution"
        className="container py-4 lg:py-[100px] items-end"
        layout="image-left"
        title={<>How to create a good prompt</>}
        text={
          <>
            <p className="mb-6">
              Unlike most LLMs where the text input is just a blank field, we
              decided to guide users to create more effective prompts.
            </p>
            <p>
              We also replaced AI jargon with everyday language to make the
              process more approachable.
            </p>
          </>
        }
        image="/images/projects/neety/n4.png"
        imageClassName="flex-1"
        imageHeight={829}
        imageWidth={587}
      />
      <Block
        TitleTag="h3"
        category="Solution"
        className="container py-4 lg:py-[100px] items-end"
        title={<>System feedback</>}
        text={
          <>
            We added visibility into the operational status of each message,
            because the lack of feedback generated distrust.
          </>
        }
        image="/images/projects/neety/n5.png"
        imageClassName="flex-1 mt-12 lg:mt-0"
        imageHeight={829}
        imageWidth={587}
      />
      <Block
        TitleTag="h3"
        category="Design system"
        className="container py-4 lg:py-[100px] items-end"
        title={<>Cognitive load and legacy</>}
        text={
          <>
            We added visibility into the operational status of each message,
            because the lack of feedback generated distrust.
          </>
        }
      />
      <div className="container">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-12 lg:mx-24 my-6 lg:my-0"
        >
          <CarouselContent className="lg:mx-[200px] gap-4">
            <CarouselItem className="pb-4 border border-gray-200 rounded-2xl">
              <Image
                src="/images/projects/neety/DS1.png"
                alt="Design System Button"
                width={1019}
                height={620}
              />
              <p className="text-center text-gray-600">Buttons</p>
            </CarouselItem>
            <CarouselItem className="pb-4 border border-gray-200 rounded-2xl">
              <Image
                src="/images/projects/neety/DS-2.png"
                alt="Design System Selection Cards"
                width={1019}
                height={620}
              />
              <p className="text-center text-gray-600">Selection cards</p>
            </CarouselItem>
            <CarouselItem className="pb-4 border border-gray-200 rounded-2xl">
              <Image
                src="/images/projects/neety/DS3.png"
                alt="Design System Campaign Status"
                width={1019}
                height={620}
              />
              <p className="text-center text-gray-600">Campaign status</p>
            </CarouselItem>
            <CarouselItem className="pb-4 border border-gray-200 rounded-2xl">
              <Image
                src="/images/projects/neety/DS4.png"
                alt="Design System Alert"
                width={1019}
                height={620}
              />
              <p className="text-center text-gray-600">Alert</p>
            </CarouselItem>
            <CarouselItem className="pb-4 border border-gray-200 rounded-2xl">
              <Image
                src="/images/projects/neety/DS5.png"
                alt="Design System Foundations"
                width={1019}
                height={620}
              />
              <p className="text-center text-gray-600">Foundations</p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="p-0" />
          <CarouselNext className="p-0" />
        </Carousel>
      </div>
      <Block
        TitleTag="h3"
        category="Key learning"
        className="container py-4 lg:pt-[100px] lg:pb-16"
        title={
          <>
            What have I <span className="text-primary">learned?</span>
          </>
        }
      />
      <TriBlock
        className="container mb-24 lg:mb-[124px] justify-start md:justify-center"
        bigText1={<>Language matters more than it seems</>}
        text1={<>It transformed the understanding of the whole tool.</>}
        bigText2={<>Onboarding was a missed opportunity</>}
        text2={
          <>
            It wasn’t prioritized due to tight deadlines, but it would have
            helped explain how Neety works.
          </>
        }
        bigText3={<>Reduced blockers</>}
        text3={
          <>
            We didn’t go into high-fidelity soon enough, and this showed in
            decision-making and team blockers.
          </>
        }
      />

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
