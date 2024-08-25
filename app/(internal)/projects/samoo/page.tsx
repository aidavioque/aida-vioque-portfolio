/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Block from '@/components/block';

import ViewMoreCard from '@/components/view-more-card';

function SmartProtection() {
  return (
    <>
      <div className="container grid py-12">
        <div className="grid-cols-12 space-y-16">
          <section className="container relative grid grid-cols-12 flex-col">
            <div className="col-span-12 max-w-[720px]">
              <h1 className="mt-8 pb-8 font-serif text-4xl font-semibold lg:text-8xl">
                From networking to signing contracts
              </h1>
              <p className="font-sans text-xl leading-7 text-gray-700">
                How to ran a design sprint to redesign the E-learning Experience
                and achieve higher retention rates.
              </p>
            </div>
          </section>
          <Image
            src="/images/projects/samoo-1.png"
            className="w-full"
            alt=""
            width={1252}
            height={691}
          />
          <Block
            TitleTag="h3"
            category="Context"
            title={
              <div>
                <span className="text-[42px] font-semibold leading-[46px] text-[#2a8288]">
                  What is
                </span>
                <span className="text-[42px] font-semibold leading-[46px] text-[#171923]">
                  {' '}
                  e-learning Experience?
                </span>
              </div>
            }
            text={
              <div className="flex flex-col gap-4 lg:gap-8">
                <p>
                  We live in a world where constant updating in the professional
                  field is essential, and events that allow professionals to
                  connect and present technological advances are increasingly
                  relevant.
                </p>
                <p>
                  This is the case of Samoo&apos;s e-Learning Experience, a
                  two-day event designed to promote networking and close
                  contracts between attendees and companies in the educational
                  sector.{' '}
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
                          Samoo
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          Project type
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          Web app
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          my role
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          Product designer
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
                          timeline
                        </div>
                        <div className="text-xl font-normal leading-7 text-gray-900">
                          2 weeks
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
            category="Esto es un título"
            title="Podcast: let’s keep it simple"
            image="/images/projects/smart-protection-2.png"
            imageHeight={1303}
            imageWidth={608}
            imageClassName="shadow-sm"
            text={
              <>
                Our goal for the podcast launch was to educate a diverse
                audience on critical topics such as brand protection, product
                monitoring, and counterfeit prevention.
              </>
            }
          />
          <p className="max-w-[512px] text-xl leading-7 text-black">
            We aim to serve as an accessible and valuable source of information
            on these subjects by featuring experts in the field, allowing
            individuals to stay updated on intellectual property matters.
          </p>
          <Image
            src="/images/projects/smart-protection-3.png"
            className=""
            alt="podcast case study"
            width={674}
            height={570}
          />
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Social Media Content"
            image="/images/projects/smart-protection-4.png"
            imageHeight={635}
            imageWidth={665}
            text={
              <>
                The articles for the blog and LinkedIn aim to provide key
                information to facilitate understanding of complex topics and
                are accompanied by visuals that illustrate their essence.
              </>
            }
          />
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Esto es un título"
            text={
              <>
                The aesthetic is friendly, with a contemporary language, soft
                edges, and using the brand colors and elements for
                communications.
              </>
            }
          />
          <div className="flex w-full items-center justify-center py-12">
            <Image
              src="/images/projects/smart-protection-5.png"
              className=""
              alt="podcast case study"
              width={878}
              height={484}
            />
          </div>
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Product Newsletters"
            layout="image-left"
            image="/images/projects/smart-protection-6.png"
            imageHeight={635}
            imageWidth={665}
            text={
              <>
                A newsletter was launched to inform users about updates, new
                features, and how to use them.
              </>
            }
          />
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Esto es un título"
            image="/images/projects/smart-protection-7.png"
            imageHeight={736}
            imageWidth={708}
            text={
              <>
                The product newsletter is a versatile tool for maintaining,
                nurturing, and expanding the customer base.
              </>
            }
          />
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Product Newsletters"
            layout="image-left"
            image="/images/projects/smart-protection-8.png"
            imageHeight={620}
            imageWidth={676}
            text={
              <>
                It helps us stay connected, build trust, and provide ongoing
                value to our audience, ultimately contributing to the success
                and growth of your product or brand.
              </>
            }
          />
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Instagram content strategy"
            text={
              <>
                A strong content strategy enables effective communication of
                product benefits, meaningful audience engagement, and long-term
                relationship building. We started with a strong “call to
                adventure”...
              </>
            }
          />
          <div className="flex w-full items-center justify-center py-12">
            <Image
              src="/images/projects/smart-protection-9.png"
              className=""
              alt="Instagram case study"
              width={1253}
              height={342}
            />
          </div>
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Product Newsletters"
            image="/images/projects/smart-protection-10.png"
            imageHeight={688}
            imageWidth={676}
            text={
              <>
                ... followed by a “meeting the mentor”, these educational posts
                demonstrate possible violations and explain their consequences.
                The importance of visual art is fundamental in illustrating
                differences.
              </>
            }
          />
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Product Newsletters"
            layout="image-left"
            image="/images/projects/smart-protection-11.png"
            imageHeight={346}
            imageWidth={717}
            textClassName="lg:max-w-[512px]"
            text={
              <>
                Some designs aim to emotionally connect with users by presenting
                relatable scenarios.
              </>
            }
          />
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Product Newsletters"
            textClassName="lg:max-w-[512px]"
            text={
              <>
                Some educational posts are divided into easily digestible
                chunks, with a clear call to action at the end.
              </>
            }
          />
          <div className="flex w-full items-center justify-center py-12">
            <Image
              src="/images/projects/smart-protection-12.png"
              className=""
              alt="Instagram case study"
              width={905}
              height={769}
            />
          </div>
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title="Colour palette"
            textClassName="lg:max-w-[512px]"
            text={
              <>
                Blue is commonly associated with confidence and professionalism.
                For a company dedicated to the protection of brands and
                intellectual property, this colour evokes credibility and
                security. For text and interface elements, a darker shade of
                blue is utilized as it offers a striking contrast against the
                lime green and deep blue background. Unique and distinctive
                colour palette, with a tech and fresh, innovative look and feel.
              </>
            }
          />
          <div className="flex max-w-[676px] flex-col gap-2 pb-12">
            <div className=" text-xl font-medium leading-9 text-gray-400">
              Fluor blue: primary actions, brand identity
            </div>
            <div className="inline-flex gap-4">
              <div className="h-[94px] w-[94px] bg-[#0122e0]" />
              <div className="h-[94px] w-[94px] bg-[#0122e0]/75" />
              <div className="h-[94px] w-[94px] bg-[#0122e0]/50" />
              <div className="h-[94px] w-[94px] bg-[#0122e0]/25" />
              <div className="h-[94px] w-[94px] bg-[#0122e0]/10" />
            </div>
            <div className="w-[94px] text-center text-sm font-normal leading-[34px] text-gray-700/50">
              #0122E0
            </div>
            <div className="flex  flex-col gap-6">
              <div className=" text-xl font-medium leading-9 text-gray-400">
                Fluor green: secondary
              </div>
            </div>
            <div className=" inline-flex gap-4">
              <div className="h-[94px] w-[94px] bg-[#c3eb3c]" />
              <div className="h-[94px] w-[94px] bg-[#c3eb3c]/75" />
              <div className="h-[94px] w-[94px] bg-[#c3eb3c]/50" />
              <div className="h-[94px] w-[94px] bg-[#c3eb3c]/25" />
              <div className="h-[94px] w-[94px] bg-[#c3eb3c]/10" />
            </div>
            <div className="w-[94px] text-center text-sm font-normal leading-[34px] text-gray-700/50">
              #C3EB3C
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-xl font-medium leading-9 text-gray-400">
                Dark blue: texts
              </div>
            </div>
            <div className=" inline-flex gap-4">
              <div className="h-[94px] w-[94px] bg-[#000832]" />
              <div className="h-[94px] w-[94px] bg-[#000832]/75" />
              <div className="h-[94px] w-[94px] bg-[#000832]/50" />
              <div className="h-[94px] w-[94px] bg-[#000832]/25" />
              <div className="h-[94px] w-[94px] bg-[#000832]/10" />
            </div>
            <div className="w-[94px] text-center text-sm font-normal leading-[34px] text-gray-700/50">
              #000832
            </div>
          </div>
          <Block
            TitleTag="h3"
            category="key learning"
            title="Product Newsletters"
            textClassName="lg:max-w-[512px]"
            text={
              <>
                More important than following the same steps in the right order
                every time is the ability to understand when and how each method
                should be used, and why it will help the designer come up with a
                better solution to a problem. Designers who can think for
                themselves will make better decisions when their first real
                project arises.
              </>
            }
          />
          <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-center lg:gap-6">
            <div className="inline-flex min-w-[200px] max-w-[342px] flex-col items-start justify-start gap-6">
              <div className=" text-[28px] font-bold leading-[34px] text-black">
                Go back to the goal
              </div>
              <div className=" text-xl leading-7 text-[#2d3748]">
                More important than following the same steps in the right order
                every time is the ability to understand when and how each method
                should be used, and why it will help the designer come up with a
                better solution to a problem.
              </div>
            </div>
            <div className="inline-flex min-w-[200px] max-w-[342px] flex-col items-start justify-start gap-6">
              <div className=" text-[28px] font-bold leading-[34px]  text-black">
                Strategy
              </div>
              <div className=" text-xl leading-7 text-[#2d3748]">
                More important than following the same steps in the right order
                every time is the ability to understand when and how each method
                should be used, and why it will help the designer come up with a
                better solution to a problem.
              </div>
            </div>
            <div className="inline-flex min-w-[200px] max-w-[342px] flex-col items-start justify-start gap-6">
              <div className=" text-[28px] font-bold leading-[34px]  text-black">
                Design is in everything
              </div>
              <div className=" text-xl leading-7 text-[#2d3748]">
                More important than following the same steps in the right order
                every time is the ability to understand when and how each method
                should be used, and why it will help the designer come up with a
                better solution to a problem.
              </div>
            </div>
          </div>
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
                image="/images/projects/interested-1.png"
              />
              <ViewMoreCard
                link="/projects/samoo"
                image="/images/projects/interested-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmartProtection;
