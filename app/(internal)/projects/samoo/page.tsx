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
        'inline-flex w-full flex-wrap justify-between gap-y-12',
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
function SmartProtection() {
  return (
    <>
      <div className="container grid py-12">
        <div className="grid-cols-12 space-y-16">
          <section className="relative grid grid-cols-12 flex-col">
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
                <span className="text-[42px] font-semibold leading-[46px] text-gray-900">
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
        </div>
      </div>
      <div className="inline-flex w-full flex-col items-center justify-center gap-12 bg-gray-900">
        <div className="grid py-[72px]">
          <div className="container inline-flex grid-cols-12 flex-col gap-8 font-serif">
            <div className="text-center text-base font-semibold uppercase leading-tight text-white/80">
              the brief
            </div>
            <div className="w-full text-center">
              <span className="text-[42px] font-semibold leading-[46px] text-white">
                Design and development of a{' '}
              </span>
              <span className="text-gradient text-[42px] font-semibold leading-[46px]">
                mobile first solution
              </span>
              <span className="font-serif text-[42px] font-semibold leading-[46px] text-white">
                {' '}
                for the management, promotion and communication of events,
                focused on E-learning Experience 2025.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid py-12">
        <div className="space-y-12">
          <Block
            TitleTag="h3"
            category="Success metrics"
            title={
              <>
                How does <span className="text-primary">success</span> looks
                like for Samoo?
              </>
            }
            text={
              <>
                For us, aligning the client&apos;s objectives with the results
                is essential to ensure the success of the project. In
                collaboration with the Data team, we establish what will be the{' '}
                <span className="font-bold">
                  key metrics to measure Samoo's objectives.
                </span>{' '}
                We identified three main focuses that would define our success:
              </>
            }
          />
          <div className="inline-flex w-full flex-wrap items-center justify-between gap-y-12">
            <div className="inline-flex w-[343px] flex-col items-center justify-start gap-8">
              <Image
                src="/images/projects/samoo-1.svg"
                alt=""
                width={100}
                height={100}
              />
              <div className="text-center text-xl font-normal leading-7 text-gray-700">
                Closing contracts between attendees and companies
              </div>
            </div>
            <div className="inline-flex w-[343px] flex-col items-center justify-start gap-8">
              <Image
                src="/images/projects/samoo-2.svg"
                alt=""
                width={100}
                height={100}
              />
              <div className="text-center text-xl font-normal leading-7 text-gray-700">
                Percentage of attendees who return for future editions.
              </div>
            </div>
            <div className="inline-flex w-[343px] flex-col items-center justify-start gap-8">
              <Image
                src="/images/projects/samoo-3.svg"
                alt=""
                width={100}
                height={100}
              />
              <div className="text-center text-xl font-normal leading-7 text-gray-700">
                How satisfactory is the experience lived during the event
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container grid space-y-12 py-12">
          <Block
            TitleTag="h3"
            category="secondary research: netnography"
            title={
              <>
                <span className="text-primary">Why</span> is E-learning
                Experience important?
              </>
            }
            text={
              <>
                I search for information and data about the current state of
                e-learning on a global scale.{' '}
                <span className="font-bold">
                  I have experience designing, developing, and reviewing content
                  for e-learning programs,
                </span>{' '}
                so the search process should be more manageable for me.{' '}
                <p className="mt-8">
                  It is a niche with growing global influence every day.
                </p>
              </>
            }
          />
          <TriBlock
            bigText1={<div className="text-8xl">+5.000</div>}
            bigText2={<div className="text-8xl">+6%</div>}
            bigText3={
              <div className="text-8xl">
                3<sup className="text-4xl">rd</sup>
              </div>
            }
            text1="millions of euros invoiced in e-learning in Spain in 2021"
            text2="annual growth foreseed in Spain’s e-Learning market until 2026"
            text3="largest market worldwide in 2019"
          />
        </div>
      </div>
      <div className="container grid py-12">
        <div className="mt-14 space-y-12">
          <div className="flex text-xl lg:justify-end">
            <div className="max-w-[511px]">
              After asking ourselves a few questions, we can begin to sketch out
              what the client needs, what the value of the event is within the
              overall context, how we understand where we want to go and what
              the user needs.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container grid space-y-12 py-12">
          <Block
            TitleTag="h3"
            category="Esto es un título"
            title={
              <div className="text-white">
                Addressing{' '}
                <span className="text-primary">the significant issues:</span>{' '}
                where should we focus our attention
              </div>
            }
            text={
              <div className="space-y-8 text-white">
                <p>
                  We have considered the challenge from various perspectives and
                  we have identified three key challenges that will guide us in
                  developing solutions that can
                  <span className="font-bold">make a significant impact.</span>
                </p>
                <p>
                  However, things must be said, it is quite ambitious to achieve
                  all of them within the limited time available.
                </p>
              </div>
            }
          />
          <TriBlock
            className="mt-12 items-start"
            bigText1={
              <div className="text-left font-serif text-3xl font-bold">
                Slow agenda
              </div>
            }
            bigText2={
              <div className="text-left font-serif text-3xl font-bold">
                Manual matching
              </div>
            }
            bigText3={
              <div className="text-left font-serif text-3xl font-bold">
                Make it sexy
              </div>
            }
            text1={
              <div className="text-left text-white">
                The <span className="font-bold">agenda</span> and attendance
                management is currently done{' '}
                <span className="font-bold">manually</span> and is not easily
                scalable.
              </div>
            }
            text2={
              <div className="text-left text-white">
                The <span className="font-bold">matching</span> of attendees and
                speakers is currently done{' '}
                <span className="font-bold">manually</span>, making management
                of cancellations, rescheduling, and time clashes challenging.
              </div>
            }
            text3={
              <div className="text-left text-white">
                Closing a schedule with speakers and attendees as soon as
                possible, in order to{' '}
                <span className="font-bold">attract more audiences</span> to the
                event.
              </div>
            }
          />
        </div>
      </div>
      <div className="container grid py-12">
        <div className="grid-cols-12 space-y-16">
          <Block
            TitleTag="h3"
            category="The solution"
            title={
              <>
                The solution focuses on
                <span className="text-primary"> improving the metrics</span>
              </>
            }
            text={
              <>
                Our solution aims to facilitate the connection of work profiles
                based on their business affinities. It involves collecting
                interests in a personalized and interactive agenda and providing
                clear, instant updates on the event&apos;s progress through the
                collection of qualitative and quantitative data.
              </>
            }
          />
          <Image
            src="/images/projects/samoo-4.png"
            className="w-full"
            alt=""
            width={1252}
            height={432}
          />
          <Block
            TitleTag="h3"
            category="primary research: interview"
            title={
              <>
                <span className="text-primary">How </span>
                was the experience for the users in the past edition?
              </>
            }
            text={
              <div className="space-y-8">
                <p>
                  The numbers help us understand the event&apos;s importance for
                  Samoo and its clients, but we still need to know what the
                  experience is like for the attendees and how we can make it
                  flawless.
                </p>
                <p>
                  We contacted users from the last edition and sought to{' '}
                  <span className="font-bold">
                    understand the potential issues between user needs and
                    Samoo&apos;s objectives.
                  </span>
                </p>
              </div>
            }
          />
          <Block
            TitleTag="h3"
            title={
              <>
                And then,
                <span className="text-primary"> what specific needs </span>
                do we identified in the user?
              </>
            }
            text={
              <p>
                During the interviews, we discovered that a key action point
                involved{' '}
                <span className="font-bold">promoting networking:</span>{' '}
                reducing chance and facilitating active and meaningful
                connections between contacts.
              </p>
            }
          />
        </div>
        <TriBlock
          className="mt-12 items-start"
          bigText1={
            <div className="text-left font-serif text-3xl font-bold text-gray-900">
              Networking
            </div>
          }
          bigText2={
            <div className="text-left font-serif text-3xl font-bold text-gray-900">
              Feedback
            </div>
          }
          bigText3={
            <div className="text-left font-serif text-3xl font-bold text-gray-900">
              Personal agenda
            </div>
          }
          text1={
            <div className="text-left">
              “I didn&apos;t know the list of attendees in advance, something I
              was really missing. I imagine people who come from far away and
              don&apos;t have the option of networking beforehand. I was lucky
              and, by chance, we started talking to some teachers.”
            </div>
          }
          text2={
            <div className="text-left">
              “We received two emails after the event: one with a certificate
              and another with a Typeform for feedback, but I don&apos;t think
              we completed it.”
            </div>
          }
          text3={
            <div className="text-left">
              “We were clear about some topics that we couldn&apos;t miss. We
              saw that other people were looking at the welcome pack brochure
              and writing down what they found most interesting.”
            </div>
          }
        />
      </div>
      <div className="bg-gray-50">
        <div className="container grid py-12 text-center font-serif text-4xl font-semibold">
          <div className="inline">
            “I got lucky while networking and{' '}
            <span className="text-primary">by chance</span> we started talking
            to some teachers.”
          </div>
        </div>
      </div>
      <div className="container grid py-12">
        <div className="grid-cols-12 space-y-16">
          <Block
            TitleTag="h3"
            category="touchpoints of the event"
            title={
              <>
                Let&apos; map out the
                <span className="text-primary"> key moments </span>
                in the event experience.
              </>
            }
            text={
              <p>
                We outline user interaction steps during the event and ask them
                specific questions about how they solved certain issues. For
                example, we inquire about their networking approach, agenda
                organization, and experiences providing feedback.
              </p>
            }
            image="/images/projects/samoo-5.png"
            imageHeight={390}
            imageWidth={718}
            layout="image-left"
            textClassName="lg:max-w-[511px]"
          />
          <Block
            TitleTag="h3"
            category="user persona"
            title={
              <>
                <span className="text-primary">Empathy</span> with the user is
                crucial
              </>
            }
            text={
              <p>
                Understanding their needs, thoughts, and emotions is essential
                for providing an unforgettable and fruitful experience.
              </p>
            }
          />
          <Image
            src="/images/projects/samoo-6.png"
            className="w-full"
            alt="user persona"
            width={1252}
            height={875}
          />
          <Block
            TitleTag="h3"
            category="user persona"
            title={
              <>
                <span className="text-primary">Jot down ideas</span> and bring
                them to the team for discussion
              </>
            }
            text={
              <div>
                <p>
                  We now clearly understand our{' '}
                  <span className="font-bold">objectives</span>, the
                  <span className="font-bold"> problems</span> we need to solve,
                  and the friction users suffered from previous editions.
                </p>
                <p>
                  One of the most enjoyable aspects of the design process for me
                  is <span className="font-bold">ideation.</span>
                </p>
              </div>
            }
          />
          <div className="inline-flex w-full items-start justify-center gap-12">
            <div className="inline-flex w-[342px] flex-col gap-6 rounded-lg bg-gray-50 p-6 lg:min-h-[258px]">
              <div className="font-serif text-3xl font-bold text-gray-900">
                REGISTRATION
              </div>
              <ul className="list-disc pl-6 text-xl text-gray-900">
                <li>Registration of attendees to the event</li>
                <li>Profile registration process.</li>
              </ul>
            </div>
            <div className="inline-flex w-[342px] flex-col gap-6 rounded-lg bg-gray-50 p-6 lg:min-h-[258px]">
              <div className="font-serif text-3xl font-bold text-gray-900">
                EVENTS
              </div>
              <ul className="list-disc pl-6 text-xl text-gray-900">
                <li>List of attendees to the event</li>
                <li>Event information with complete details of the event.</li>
              </ul>
            </div>
            <div className="inline-flex w-[342px] flex-col gap-6 rounded-lg bg-gray-50 p-6 lg:min-h-[258px]">
              <div className="font-serif text-3xl font-bold text-gray-900">
                NETWORKING
              </div>
              <ul className="list-disc pl-6 text-xl text-gray-900">
                <li>
                  Matching algorithm based on tastes, tags, and data collected
                  from LinkedIn
                </li>
                <li>QR generation for matching between attendees</li>
                <li>One to One planning.</li>
              </ul>
            </div>
          </div>
          <div className="inline-flex w-full items-start justify-center gap-12">
            <div className="inline-flex w-[342px] flex-col gap-6 rounded-lg bg-gray-50 p-6 lg:min-h-[258px]">
              <div className="font-serif text-3xl font-bold text-gray-900">
                DASHBOARD
              </div>
              <ul className="list-disc pl-6 text-xl text-gray-900">
                <li>Feedback on presentations</li>
                <li>Management during the event</li>
                <li>Programming for the next edition.</li>
              </ul>
            </div>
            <div className="inline-flex w-[342px] flex-col gap-6 rounded-lg bg-gray-50 p-6 lg:min-h-[258px]">
              <div className="font-serif text-3xl font-bold text-gray-900">
                BOOKING
              </div>
              <ul className="list-disc pl-6 text-xl text-gray-900">
                <li>Accommodation proposal</li>
                <li>Transportation proposal</li>
              </ul>
            </div>
            <div className="inline-flex w-[342px] flex-col gap-6 rounded-lg bg-gray-50 p-6 lg:min-h-[258px]">
              <div className="font-serif text-3xl font-bold text-gray-900">
                PAYMENT
              </div>
              <ul className="list-disc pl-6 text-xl text-gray-900">
                <li>Payment platform integrated</li>
                <li>Automatic verification</li>
                <li>Unify the entire process within the app.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container grid py-12 font-serif text-4xl font-semibold text-white">
          <div className="mb-8 font-serif text-base font-semibold uppercase leading-tight text-white/80">
            the hypothesis
          </div>
          <div className="inline">
            If event management is automated and professional profiles are
            encouraged to connect, the E-learning Experience will become a
            reference.
          </div>
        </div>
      </div>
      <div className="container grid py-12">
        <div className="grid-cols-12 space-y-16">
          <Block
            TitleTag="h3"
            category="Wireflow"
            title={
              <>
                How can the user efficiently
                <span className="text-primary"> accomplish tasks?</span>
              </>
            }
            text={
              <>
                This outline combines the user flow structure with design
                screens, enabling us to spot potential obstacles or confusion
                before entering the development phase.
              </>
            }
          />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container grid w-full py-12">
          <Block
            TitleTag="h3"
            category="solution"
            title={
              <>
                The user can get the ticket and
                <span className="text-primary"> share their data </span>
                easily
              </>
            }
            text={
              <div className="space-y-8 text-xl font-normal text-gray-700">
                <p>
                  Process of accessing the platform where all the necessary data
                  is collected from users when creating their account for the
                  event.
                </p>
                <ul className="list-disc pl-6">
                  <li>Access for attendees and collaborators.</li>
                  <li>
                    Setting up topics of interest helps to organize the agenda
                    and connect with other attendees.
                  </li>
                  <li>
                    Entry via LinkedIn saves time and helps with matching
                    between people.
                  </li>
                  <li>
                    Integrated purchasing process verifies payment and automates
                    credentials.
                  </li>
                </ul>
              </div>
            }
            image="/images/projects/samoo-8.png"
            imageHeight={390}
            imageWidth={718}
            layout="image-left"
            textClassName="lg:max-w-[511px]"
          />
        </div>
      </div>
      <div className="pt-12">
        <div className="container grid w-full py-12">
          <Block
            TitleTag="h3"
            category="solution"
            title={
              <>
                Their
                <span className="text-primary"> preferences </span>
                will make it personal
              </>
            }
            text={
              <div className="space-y-8 text-xl font-normal text-gray-700">
                <p>
                  The program displayed will depend on the type of ticket
                  purchased.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Personalized agenda that records each person&apos;s
                    preferences and organizes One to One meetings.
                  </li>
                  <li>Search by filters</li>
                  <li>Filter events by topic.</li>
                </ul>
              </div>
            }
          />
          <Image
            src="/images/projects/samoo-9.png"
            className="w-full"
            alt=""
            width={1252}
            height={765}
          />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container grid w-full py-12">
          <Block
            TitleTag="h3"
            category="solution"
            title={<>How can the algorithm help?</>}
            text={
              <div className="space-y-8 text-xl font-normal text-gray-700">
                <p>
                  Personalized suggestions: an algorithm processes LinkedIn
                  profiles and selected tags.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Filters: attendees can filter by their most interesting
                    tags.
                  </li>
                  <li>
                    Networking: list of all registered attendees available
                    before the event.
                  </li>
                  <li>Connection via QR code.</li>
                </ul>
              </div>
            }
            image="/images/projects/samoo-10.png"
            imageHeight={657}
            imageWidth={702}
            textClassName="lg:max-w-[511px]"
          />
        </div>
      </div>
      <div className="pt-12">
        <div className="container grid w-full py-12">
          <Block
            TitleTag="h3"
            category="solution: dashboard"
            title={
              <>
                How can a client feel that
                <span className="text-primary">
                  {' '}
                  everything is under control?{' '}
                </span>
                Back office
              </>
            }
            text={
              <div className="text-gray-700">
                All necessary management will be provided during the event days.
                Data visualization involves collecting and displaying data from
                previous editions to enhance planning for future editions.
              </div>
            }
          />
          <Image
            src="/images/projects/samoo-9.png"
            className="w-full"
            alt=""
            width={1252}
            height={765}
          />
          <Block
            TitleTag="h3"
            category="solution: instant feedback"
            title={<>An easy and accesible way to drop some feedback</>}
            text={
              <div className="text-xl text-gray-700">
                We have improved the feedback collection system by making it
                instant and accessible from different points.
              </div>
            }
            image="/images/projects/samoo-14.png"
            imageHeight={932}
            imageWidth={718}
            layout="image-left"
            textClassName="lg:max-w-[511px]"
          />
          <div className="inline-flex flex-col gap-8 py-6">
            <div className="font-serif text-base font-semibold uppercase leading-tight text-gray-500">
              key learning
            </div>
            <div className="font-serif text-4xl font-semibold text-gray-900">
              What did I learn?
            </div>
          </div>
          <TriBlock
            bigText1={
              <div className="text-left font-serif text-3xl font-bold text-gray-900">
                Prioritize key needs
              </div>
            }
            bigText2={
              <div className="text-left font-serif text-3xl font-bold text-gray-900">
                Iteration and flexibility
              </div>
            }
            bigText3={
              <div className="text-left font-serif text-3xl font-bold text-gray-900">
                Close collaboration
              </div>
            }
            text1={
              <div className="text-left text-gray-900">
                When faced with multiple customer demands, I realized the
                importance of identifying and focusing on the most critical
                aspects in order to provide effective, high-impact solutions.
              </div>
            }
            text2={
              <div className="text-left text-gray-900">
                The design process is never straightforward. We had to iterate
                multiple times, especially in the registration flow, which
                taught me to be flexible and willing to adapt solutions based on
                feedback and emerging needs.
              </div>
            }
            text3={
              <div className="text-left text-gray-900">
                Working closely with data and development teams was essential to
                ensure that solutions were not only creative, but also feasible
                and aligned with business objectives.
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
                link="/projects/index"
                image="/images/projects/interested-3.png"
                category="product design"
                title="Scientific literature is a profitable business"
                text="More important than following the same steps in the right order every time is ..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmartProtection;
