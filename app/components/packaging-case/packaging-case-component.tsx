/* eslint-disable @next/next/no-img-element */
'use client';

import MiniFooter from 'app/components/mini-footer';
import Arrow from 'app/components/arrow';
import {
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="!flex items-center justify-center">
        <img
          src="/images/projects/full/packing1.jpg"
          className="max-h-[600px]"
          alt="final designs 1"
        />
      </div>
      <div className="!flex items-center justify-center">
        <img
          src="/images/projects/full/packing2.jpg"
          className="max-h-[600px]"
          alt="final designs 2"
        />
      </div>
      <div className="!flex items-center justify-center">
        <img
          src="/images/projects/full/packing3.jpg"
          className="max-h-[600px]"
          alt="final designs 3"
        />
      </div>
      <div className="!flex items-center justify-center">
        <img
          src="/images/projects/full/packing4.jpg"
          className="max-h-[600px]"
          alt="final designs 4"
        />
      </div>
      <div className="!flex items-center justify-center">
        <img
          src="/images/projects/full/packing5.jpg"
          className="max-h-[600px]"
          alt="final designs 5"
        />
      </div>
    </Slider>
  );
};

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) => (
  <Container>
    <div className="text-teal-950 mb-4 text-[32px] font-semibold leading-[48px]">
      {title}
    </div>
    <div className="mb-8 text-2xl leading-[33px] text-trueGray-400">
      {description}
    </div>
    <div className="text-teal-950 flex flex-col space-y-8 text-xl leading-9">
      {children}
    </div>
  </Container>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[559px] text-2xl font-bold leading-[41px] text-sky-700">
    {children}
  </div>
);

const ResearchCard = ({ title, text }: { title: string; text: string }) => (
  <div className="inline-flex min-h-[272px] flex-col items-center justify-start gap-[21.93px] rounded-lg border bg-white px-[36.54px] py-[32.89px] shadow-2xl">
    <div className="flex flex-col items-center justify-end gap-[7.31px] uppercase">
      <h3 className="text-2xl font-semibold text-slate-800">{title}</h3>
    </div>
    <div className="flex flex-col items-start justify-start gap-[14.62px]">
      <div className="inline-flex items-center justify-start gap-[10.14px]">
        <div className="w-[230px] text-lg font-normal leading-relaxed text-slate-700">
          {text}
        </div>
      </div>
    </div>
  </div>
);
const myRole = (
  <div className="my-12 flex items-start justify-evenly">
    <div className="max-w-[250px]">
      <div className="text-xl font-normal uppercase leading-[34.84px] text-slate-800">
        My role
      </div>
      <ul className="text-lg font-medium leading-normal text-slate-700">
        <li>Product Designer</li>
        <li>UX writer</li>
      </ul>
    </div>
    <div className="max-w-[300px]">
      <div className="text-xl font-normal uppercase leading-[34.84px] text-slate-800">
        when
      </div>
      <ul className="text-lg font-medium leading-normal text-slate-700">
        <li>July 2023</li>
        <li>September 2023</li>
      </ul>
    </div>
    <div className="max-w-[300px]">
      <div className="text-xl font-normal uppercase leading-[34.84px] text-slate-800">
        category
      </div>
      <div className="text-lg font-medium leading-normal text-slate-700">
        Logistic and delivery, B2B, B2C
      </div>
    </div>
  </div>
);

const aarrrFramework = (
  <Section
    title="Metrics and AARRR framework"
    description="Where to focus to get it right."
  >
    <div>
      One of the project&rsquo;s greatest challenges is determining where to
      focus attention and begin measuring wisely.
    </div>
    <div>
      Based on the results presented in the following section, the conversation
      among Business, Marketing, and Product leads to the decision to focus
      attention on the top of the funnel, in acquisition.
    </div>
    <div className="flex w-full flex-col items-center justify-center text-center">
      <div className="text-gray-600 mb-4 text-2xl font-semibold uppercase leading-[30px]">
        AARRR framework
      </div>
      <img
        className="max-w-[350px]"
        src="/images/projects/funnel.jpg"
        alt="AARRR framework"
      />
    </div>
  </Section>
);

const lowWireframes = (
  <>
    <Section
      title="Low wireframes"
      description="We started out with the low-fi wireframes to think about the structure."
    />
    <img
      className="-mt-[106px] mb-[106px] max-w-[100%]"
      src="/images/projects/low.jpg"
      alt="low wireframes"
    />
  </>
);

const colourPalette = (
  <>
    <Section
      title="Colour palette"
      description="Colour scheme based on the 60-30-10 method."
    >
      <div className="text-teal-950 text-xl leading-9">
        Once the data was guiding my process, the content of the screens and the
        flow was defined, I created a rough design of it, and defining the
        fonts, the sizes and the colour palette.
      </div>
      <img
        className="-mt-[106px] mb-[106px] max-w-[100%]"
        src="/images/projects/color-scheme-1.png"
        alt="applied color scheme"
      />
      <div className="text-teal-950 text-xl leading-9">
        Based on our knowledge of the colour theory, we developed a trustworthy
        and amicable colour palette. The 70% of the design is clean and white.
        Body text and different headings has a darker and more grayish variation
        of the interactive / accent colour.
      </div>
      <img
        className="-mt-[106px] mb-[106px] max-w-[100%]"
        src="/images/projects/colors.png"
        alt="color scheme"
      />
    </Section>
  </>
);

const tableOfContents = (
  <>
    <Section
      title="Table of contents"
      description="Screens of the flow and information architecture."
    >
      <p>
        The information that will be crucial to gather is analyzed and
        determined, as well as which screens will be important for the
        flow&apos;s development.
      </p>
      <p>
        The content is prioritized in order to organize the information
        according to the navigation. This would help to star designing the
        low-fi flows
      </p>
    </Section>
    <div className="-mt-8 mb-[106px] flex justify-center">
      <img
        className="max-w-[80%]"
        src="/images/projects/table-of-contents.jpg"
        alt="table of contents"
      />
    </div>
  </>
);

const finalDesigns = (
  <>
    <Section title="Final designs" description="UI redesigns of the flow.">
      {/* Carousel of final images with horizontal scroll */}
    </Section>
    <div className="-mt-[106px] mb-[106px]">
      <Carousel />
    </div>
  </>
);

const deskResearch = (
  <Section
    title="Desk research and insights"
    description="To better understand why and to collect valuable insights to guide the redesign."
  >
    <h4 className="text-gray-400 mt-4 text-2xl font-semibold uppercase leading-[30px] text-trueGray-400">
      We stand for Responsible design
    </h4>
    <div className="text-xl font-normal leading-9">
      When designing user experiences, it&rsquo;s crucial to consider both
      physical and cognitive accessibility. When applied with the business in
      mind, it provides users with a sense of security and confidence in
      choosing our services.
    </div>
    <div className="flex items-center justify-center">
      <img
        className="max-w-[305px]"
        src="/images/projects/mente_puzzle_02.png"
        alt="puzzle"
      />
    </div>
    <div className="inline">
      <span className="text-xl leading-9 text-stone-900">
        The number of apps in the market addressing mental health is
        overwhelming, undoubtedly responding to a high demand. An interesting
        article titled{' '}
      </span>
      <span className="text-xl font-semibold leading-9 text-stone-900">
        &apos;Responsible Design: Approaches for Reducing Uncertainty and
        Anxiety&apos;{' '}
      </span>
      <span className="text-xl font-normal leading-9 text-stone-900">
        on uxpamagazine.org it emphasizes the users&rsquo; reality even before
        they use the products we design:
      </span>
    </div>
    <Quote>
      “We are living in a time when people are experiencing a heightened level
      of uncertainty and anxiety even before they ever make first contact with
      our products or services.”
    </Quote>
    <div className="text-xl font-normal leading-9 text-stone-900">
      There is an identifiable set of environmental conditions that manifest in
      our experience designs that contribute to user discomfort, including:
    </div>
    <div className="inline-flex flex-col items-start justify-start gap-2">
      <div className="inline-flex items-center justify-start gap-6">
        <div className="h-2 w-2 rounded-full bg-sky-700" />
        <div className="text-teal-950 text-xl leading-9">
          Too much complexity
        </div>
      </div>
      <div className="inline-flex items-center justify-start gap-6">
        <div className="h-2 w-2 rounded-full bg-sky-700" />
        <div className="text-teal-950 text-xl leading-9">
          Overwhelming choices
        </div>
      </div>
      <div className="inline-flex items-center justify-start gap-6">
        <div className="h-2 w-2 rounded-full bg-sky-700" />
        <div className="text-teal-950 text-xl leading-9">
          Lack of information
        </div>
      </div>
      <div className="inline-flex items-center justify-start gap-6">
        <div className="h-2 w-2 rounded-full bg-sky-700" />
        <div className="text-teal-950 text-xl leading-9">
          Endless information
        </div>
      </div>
      <div className="inline-flex items-center justify-start gap-6">
        <div className="h-2 w-2 rounded-full bg-sky-700" />
        <div className="text-teal-950 text-xl leading-9">
          Artificial urgency
        </div>
      </div>
    </div>
    <h4 className="text-gray-400 mt-4 text-2xl font-semibold uppercase leading-[30px] text-trueGray-400">
      The anxiety in data, Spain
    </h4>
    <div className="w-[676px] text-xl leading-9 text-stone-900">
      The figures from the Ministry of Health of the Spanish Government reveal
      alarming data regarding the presence of anxiety disorders.{' '}
    </div>
    <img
      className="h-[454px] w-[655px]"
      src="/images/projects/chart.jpg"
      alt="anxiety data spain chart"
    />
  </Section>
);
const dataAnalysis = (
  <Section
    title="Data analysis"
    description="Based on the sources consulted and the data analyzed."
  >
    <Quote>
      “Information anxiety is the black hole between data and knowledge, and it
      happens when information doesn’t tell us what we want or need to know.”
    </Quote>
    <div className="text-xl font-normal leading-9 text-stone-900">
      in Spain, the percentage of the population experiencing anxiety is on the
      rise. The data reveals a population that approaches any online process
      with anxiety. Access to information and how information is accessed is
      beyond users&apos; control and has much to do with decisions in digital
      product design.
    </div>
    <img
      className="h-80 w-[400px]"
      src="/images/projects/app.png"
      alt="app image"
    />
    <div className="text-teal-950 text-xl font-normal leading-9">
      What can we do from a design perspective for a user seeking to complete
      online processes in a state of anxiety? How can we adapt flows and make
      our products more usable?
    </div>
    <div className="inline-flex h-[372px] w-[645px] flex-col items-start justify-center gap-6">
      <div className="inline-flex items-center justify-start gap-6">
        <div className="h-[8px] w-[20px] rounded-full bg-sky-700" />
        <div className="text-teal-950 text-xl font-normal leading-9">
          UX/UI Redesign: The project involves redesigning the entire delivery
          inquiry flow, including landing pages, data collection screens, and
          success confirmation pages.
        </div>
      </div>
      <div className="inline-flex items-center justify-start gap-6">
        <div className="h-[8px] w-[20px] rounded-full bg-sky-700" />
        <div className="text-teal-950 text-xl font-normal leading-9">
          User-Centric Design: The focus is on creating a user-centric
          experience, simplifying complex processes, and ensuring users feel
          confident throughout the inquiry.
        </div>
      </div>
      <div className="inline-flex w-[645px] items-center justify-start gap-6">
        <div className="h-[8px] w-[20px] rounded-full bg-sky-700" />
        <div className="text-teal-950 text-xl font-normal leading-9">
          Ethical Considerations: Ethical principles are integrated into the
          design to address concerns about data privacy and security.
        </div>
      </div>
    </div>
  </Section>
);
const userSurvey = (
  <>
    <Section
      title="User survey"
      description="To identify where the friction is and why, we run a little survey to face the hypothesis."
    >
      <div>
        To gather the necessary information and generate insights to aid further
        development, a small survey in modal format was implemented through an
        MVP to understand the reasons for drop-offs. The sample obtained guides
        us towards the following directions:
      </div>
      <div className="inline-flex h-[124px] w-[280px] flex-col items-start justify-start gap-2">
        <div className="inline-flex items-center justify-start gap-6">
          <div className="h-2 w-2 rounded-full bg-sky-700" />
          <div className="text-teal-950 text-xl font-normal leading-9">
            Contrasting services
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-6">
          <div className="h-2 w-2 rounded-full bg-sky-700" />
          <div className="text-teal-950 text-xl font-medium leading-9">
            Lack of information
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-6">
          <div className="h-2 w-2 rounded-full bg-sky-700" />
          <div className="text-teal-950 text-xl font-medium leading-9">
            Complex process.
          </div>
        </div>
      </div>
    </Section>
    <div className="mx-24 mb-[52px] flex flex-wrap items-center justify-between">
      <div className="max-w-[30%]">
        <img src="/images/projects/user-survey-1.jpg" alt="user survey" />
        <div className="text-center text-sm font-normal leading-[34px] text-slate-700 text-opacity-50">
          Checkbox survey
        </div>
      </div>
      <div className="max-w-[30%]">
        <img src="/images/projects/user-survey-1-bis.jpg" alt="user survey" />
        <div className="text-center text-sm font-normal leading-[34px] text-slate-700 text-opacity-50">
          Text area survey
        </div>
      </div>
      <div className="max-w-[30%]">
        <img src="/images/projects/user-survey-2.jpg" alt="user survey 2" />
        <div className="text-center text-sm font-normal leading-[34px] text-slate-700 text-opacity-50">
          Success notification
        </div>
      </div>
    </div>
  </>
);

const takeaways = (
  <Section
    title="Takeaways"
    description="Conclusions we take from the project."
  >
    <div>
      This process has yielded valuable insights, such as the importance of
      data-driven decision-making and the integration of an ethical code into
      Product design practices.
    </div>
    <div>
      On one hand, we&apos;ve achieved a more user-friendly design in terms of
      flow and UX writing. On the other hand, we've affected acquisition rates,
      thereby uncovering potential edge cases and identifying additional areas
      for research and improvement.
    </div>
  </Section>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="container mb-[106px] max-w-[680px] px-0">{children}</div>
);
const NumberSection = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-1 flex-col gap-2 rounded-lg px-16 py-6">
    <img
      className="h-16 w-16"
      src={`images/projects/number-${number}.svg`}
      alt={`number ${number}`}
    ></img>
    <h4 className="text-xl font-semibold uppercase leading-[30px] text-slate-700 text-opacity-50">
      {title}
    </h4>
    <div className="text-teal-950 text-lg leading-9">{description}</div>
  </div>
);

const PackagingCase = () => {
  return (
    <div className="h-screen overflow-auto md:h-full">
      <div className="mb-4 flex justify-center">
        <DialogHeader>
          <DialogTitle className="text-center text-[38px] font-normal leading-relaxed">
            Shipping company
          </DialogTitle>
          <DialogDescription className="max-w-[600px] text-center text-xl font-normal  leading-[30px] text-slate-700 text-opacity-50">
            Minimizing obstacles: information request proposal in a shipping
            company
          </DialogDescription>
        </DialogHeader>
      </div>
      <img
        src="/images/projects/packaging-presentation.jpg"
        alt="project overview"
      />
      <div className="container mt-24">{myRole}</div>
      <Container>
        <div className="text-teal-950 text-xl leading-9">
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
      </Container>
      <Section
        title="Design process"
        description="To better understand why and to collect valuable insights to guide the redesign."
      />
      <div className="flex justify-between">
        <NumberSection
          number="one"
          title="what"
          description="Identify the problem."
        />
        <NumberSection
          number="two"
          title="why"
          description="Investigate the causes of the problem."
        />
        <NumberSection
          number="three"
          title="how"
          description="Implement changes based on the data and iterate."
        />
      </div>
      <Section
        title="Background for the UX research"
        description="What is the problem: context of the situation."
      />
      <div id="ux-research" className="relative mb-[106px] bg-sky-50">
        <div className="container mx-auto py-20">
          <div className="flex flex-wrap justify-between">
            <ResearchCard
              title="Problem"
              text="Many visitors arrive at the website but drop out of the sales funnel before requesting a customized quote or exploring the rates."
            />
            <ResearchCard
              title="Goals"
              text="Enhancing usability and UX writing to boost activation, providing a clear indication that there is friction and room for improvement."
            />
            <ResearchCard
              title="Value Proposition"
              text="Creating simpler and more transparent processes where the user is informed of the risk level at all times and interacts in a relaxed manner."
            />
          </div>
        </div>
      </div>
      {aarrrFramework}
      {userSurvey}
      {deskResearch}
      {dataAnalysis}
      {tableOfContents}
      {lowWireframes}
      {colourPalette}
      {finalDesigns}
      {takeaways}
      <div id="contact">
        <DialogFooter>
          <MiniFooter />
        </DialogFooter>
      </div>
      <div className="flex items-center justify-center pb-10">
        <Arrow bottom id="menu" />
      </div>
    </div>
  );
};

export default PackagingCase;
