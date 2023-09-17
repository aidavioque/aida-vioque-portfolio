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

const Highlighted = ({ text }: { text: string }) => (
  <div className="inline-flex items-center justify-start gap-6 rounded-[10px] bg-orange-300 bg-opacity-20 px-6 py-4">
    <div className="text-center text-base font-normal leading-normal text-slate-700">
      {text}
    </div>
  </div>
);
const AnchorLink = ({ href, text }: { href: string; text: string }) => (
  <button
    type="button"
    className="mb-6 mr-2 flex h-[45px] items-center justify-center gap-[7.71px] rounded-[43.39px] bg-slate-100 px-4"
    onClick={() => {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    <div className="text-xl font-normal leading-[28.92px] text-slate-800">
      {text}
    </div>
  </button>
);
const menuItems = [
  {
    href: '#ux-research',
    text: 'UX research',
  },
  {
    href: '#metrics-and-AARRR-framework',
    text: 'Metrics and AARRR framework',
  },
  {
    href: '#user-survey',
    text: 'User survey',
  },
  {
    href: '#desk-research-and-insights',
    text: 'Desk research and insights',
  },
  {
    href: '#setting-up-the-ux-tone',
    text: 'Setting up the UX tone',
  },
  {
    href: '#low-wireframes',
    text: 'Low wireframes',
  },
  {
    href: '#table-of-contents',
    text: 'Table of contents',
  },
  {
    href: '#moodboard-and-references',
    text: 'Moordboard and references',
  },
  {
    href: '#ui-designs',
    text: 'UI designs',
  },
  {
    href: '#takeaways',
    text: 'Takeaways',
  },
];
const ResearchCard = ({ title, text }: { title: string; text: string }) => (
  <div className="inline-flex min-h-[272px] flex-col items-center justify-start gap-[21.93px] rounded-lg border bg-white px-[36.54px] py-[32.89px] shadow-2xl">
    <div className="flex flex-col items-center justify-end gap-[7.31px]">
      <div className="text-2xl font-semibold text-slate-800">{title}</div>
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
  <div id="metrics-and-AARRR-framework" className="container mx-auto py-20">
    <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
      Metrics and AARRR framework
    </h3>
    <div className="flex flex-wrap items-center justify-between">
      <div className="max-w-[500px] text-xl font-normal text-slate-700">
        One of the project&apos;s greatest challenges is determining where to
        focus attention and begin measuring wisely.
        <br />
        <br />
        Based on the results presented in the following section, the
        conversation among Business, Marketing, and Product leads to the
        decision to focus attention on the top of the funnel, in acquisition.
      </div>
      <img
        className="max-w-[350px]"
        src="/images/projects/funnel.jpg"
        alt="AARRR framework"
      />
    </div>
  </div>
);
const uxTone = (
  <div id="setting-up-the-ux-tone" className="container mx-auto py-20">
    <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
      Setting up the UX tone
    </h3>
    <p className="text-xl font-normal leading-relaxed text-slate-700">
      Among the 4 dimensions of tone, I have chosen a casual and slightly
      enthusiastic approach, while maintaining friendliness and generating trust
      in the user.
    </p>
  </div>
);
const lowWireframes = (
  <div id="low-wireframes" className="container mx-auto py-20">
    <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
      Low wireframes
    </h3>
    <img
      className="max-w-[100%]"
      src="/images/projects/low-wireframes.jpg"
      alt="low wireframes"
    />
  </div>
);
const tableOfContents = (
  <div id="table-of-contents" className="container mx-auto py-20">
    <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
      Table of contents
    </h3>
    <img
      className="max-w-[100%]"
      src="/images/projects/table-of-contents.jpg"
      alt="table of contents"
    />
  </div>
);
const mood = (
  <div id="moodboard-and-references" className="container mx-auto py-20">
    <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
      Moodboard and References
    </h3>
    <div className="flex max-w-full items-center justify-between">
      <img
        className="max-w-[30%] flex-1"
        src="/images/projects/mood-1.jpg"
        alt="moodboard"
      />
      <img
        className="max-w-[30%] flex-1"
        src="/images/projects/mood-2.jpg"
        alt="moodboard 2"
      />
      <img
        className="max-w-[30%] flex-1"
        src="/images/projects/mood-3.jpg"
        alt="moodboard 3"
      />
    </div>
  </div>
);
const uiDesigns = (
  <div id="ui-designs" className="container mx-auto py-20">
    <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
      UI designs
    </h3>
    <p className="text-xl font-normal leading-relaxed text-slate-700">
      Once the data was guiding my process, the content of the screens and the
      flow was defined, I created a rough design of it, and defining the fonts,
      the sizes and the colour palette.
    </p>
    <div className="my-10 flex max-w-full items-center justify-between">
      <img src="/images/projects/colors.jpg" alt="UI designs" />
      <img src="/images/projects/ui-designs.jpg" alt="UI designs" />
    </div>
  </div>
);
const userSurvey = (
  <div id="user-survey" className="container mx-auto py-20">
    <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
      User Survey
    </h3>
    <div className="flex flex-wrap items-center justify-between">
      <img
        className="max-w-[240px]"
        src="/images/projects/user-survey-1.jpg"
        alt="user survey"
      />
      <img
        className="max-w-[240px]"
        src="/images/projects/user-survey-2.jpg"
        alt="user survey 2"
      />
      <div className="mt-8 inline-flex flex-col items-start justify-start gap-[45px] lg:mt-0">
        <div className="flex flex-col items-start justify-start gap-[14.62px]">
          <div className="inline-flex w-[378px] items-center justify-start gap-[10.14px]">
            <div className="w-[378px] self-stretch text-xl font-normal leading-relaxed text-slate-700">
              To gather the necessary information and generate insights to aid
              further development, a small survey in modal format was
              implemented through an MVP to understand the reasons for
              drop-offs.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[14.62px]">
          <div className="inline-flex w-[378px] items-center justify-start gap-[10.14px]">
            <div className="w-[378px] self-stretch">
              <span className="text-xl font-normal leading-relaxed text-slate-700">
                The sample obtained guides us towards the following directions:
              </span>
              <ul className="my-4 ml-5 list-disc">
                <li className="text-xl font-normal leading-relaxed text-slate-700">
                  Contrasting services
                </li>
                <li className="text-xl font-semibold leading-relaxed text-slate-700">
                  Lack of information <span className="font-normal"> and</span>
                </li>
                <li className="text-xl font-semibold leading-relaxed text-slate-700">
                  Complex process.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const takeaways = (
  <div id="takeaways" className="container mx-auto py-20">
    <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
      Takeaways
    </h3>
    <p className="text-xl font-normal leading-relaxed text-slate-700">
      This process has yielded valuable insights, such as the importance of
      data-driven decision-making and the integration of an ethical code into
      Product design practices.
      <br />
      <br />
      On one hand, we&apos;ve achieved a more user-friendly design in terms of
      flow and UX writing. On the other hand, we&apos;ve affected acquisition
      rates, thereby uncovering potential edge cases and identifying additional
      areas for research and improvement.
    </p>
  </div>
);
const PackagingCase = () => {
  return (
    <div className="h-screen overflow-auto md:h-full">
      <div className="mb-4 flex justify-center">
        <DialogHeader>
          <DialogTitle className="pb-2 text-center text-[38px] font-normal leading-relaxed">
            <div>Minimizing obstacles:</div>Information request proposal in a
            shipping company
          </DialogTitle>
          <DialogDescription className="text-center text-xl font-normal leading-[30px] text-black">
            The goal is to design a simple, informative flow accompanied by a UX
            Writing proposal to reduce anxiety, increase confidence, and achieve
            higher user activation.
          </DialogDescription>
        </DialogHeader>
      </div>
      <img
        src="/images/projects/packaging-presentation.jpg"
        alt="project overview"
      />
      <div className="container mt-24" id="menu">
        <div className="flex flex-wrap justify-start">
          {menuItems.map((item) => (
            <AnchorLink key={item.text} {...item} />
          ))}
        </div>
        {myRole}
      </div>
      <div id="ux-research" className="relative bg-slate-100">
        <div className="container mx-auto py-20">
          <h3 className="mb-10 text-[32px] font-semibold leading-9 text-slate-800">
            UX research
          </h3>
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
      <div id="desk-research-and-insights" className="relative bg-slate-100">
        <div className="container mx-auto py-20">
          <h3 className="mb-10 text-[32px] font-semibold leading-9 text-slate-800">
            Desk research and insights
          </h3>
          <div className="space-y-6">
            <div className="text-xl font-normal leading-relaxed text-slate-700">
              When designing user experiences, it&apos;s crucial to consider
              both physical and cognitive accessibility. When applied with the
              business in mind, it provides users with a sense of security and
              confidence in choosing our services.
            </div>
            <div>
              <span className="text-xl font-normal leading-relaxed text-slate-700">
                The number of apps in the market addressing mental health is
                overwhelming, undoubtedly responding to a high demand. An
                interesting article titled{' '}
              </span>
              <a
                href="https://uxpamagazine.org/responsible-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium leading-relaxed text-blue-400 underline"
              >
                &apos;Responsible Design: Approaches for Reducing Uncertainty
                and Anxiety&apos;
              </a>
              <span className="text-xl font-normal leading-relaxed text-slate-700">
                {' '}
                on uxpamagazine.org it emphasizes the users&apos; reality even
                before they use the products we design:
              </span>
            </div>
            <div className="inline-flex items-center justify-start gap-[35px] border-l-2 border-blue-400 pl-8">
              <div className="flex items-center justify-start gap-[10.14px]">
                <div className="text-xl font-normal leading-relaxed text-slate-700">
                  We are living in a time when people are experiencing a
                  heightened level of uncertainty and anxiety even before they
                  ever make first contact with our products or services.
                </div>
              </div>
            </div>
            <div className="text-xl font-normal leading-relaxed text-slate-700">
              And provides valuable insights on how to take action:
            </div>
            <div className="relative">
              <div className="border-l-2 border-blue-400 pl-8">
                <span className="text-xl font-normal leading-relaxed text-slate-700">
                  There is an identifiable set of environmental conditions that
                  manifest in our experience designs that contribute to user
                  discomfort, including:
                </span>
                <ul className="m-10 list-disc text-xl font-normal leading-relaxed text-slate-700">
                  <li>Too much complexity</li>
                  <li>Overwhelming choices</li>
                  <li>Lack of information</li>
                  <li>Endless information</li>
                  <li>Artificial urgency</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mr-2 flex max-w-[40%] flex-col items-center justify-between">
                <p className="mr-2 pt-6">
                  The{' '}
                  <a
                    href="https://www.sanidad.gob.es/estadEstudios/estadisticas/estadisticas/estMinisterio/SIAP/Salud_mental_datos.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link text-blue-500 underline"
                  >
                    figures
                  </a>{' '}
                  from the Ministry of Health of the Spanish Government reveal
                  alarming data regarding the presence of anxiety disorders.
                </p>
                <img
                  src="/images/projects/gender.svg"
                  alt="Gender chart on anxiety"
                />
              </div>
              <img
                className="w-[655px] max-w-[50%]"
                src="/images/projects/chart.jpg"
                alt="Chart on anxiety"
              />
            </div>
          </div>
        </div>
      </div>
      {uxTone}
      {lowWireframes}
      {tableOfContents}
      {mood}
      {uiDesigns}
      {takeaways}
      <div className="container">
        <h3 className="mb-20 text-[32px] font-semibold leading-9 text-slate-800">
          Final flow
        </h3>
        <div className="mb-12 flex gap-12">
          <div className="flex max-w-[50%] flex-col justify-center space-y-8 pt-1 text-center text-sm">
            <div>
              <h4 className="py-2 font-bold uppercase">
                Let’s begin the journey
              </h4>
              <p>
                The visitor is on the initial screen of the flow. It features a
                motivational text, a brief description, and an illustration,
                simplifying the information on the screen.
              </p>
            </div>
          </div>
          <div>
            <img src="/images/projects/full/packing1.jpg" alt="package" />
          </div>
        </div>
        <div className="mb-12 flex gap-12">
          <div>
            <img src="/images/projects/full/packing2.jpg" alt="package" />
          </div>
          <div className="flex max-w-[50%] flex-col justify-center space-y-2 pt-1 text-center text-sm">
            <h4 className="py-4 font-bold uppercase">
              Why did I take this approach
            </h4>
            <div className="space-y-8">
              <ul className="space-y-2">
                <li className="font-semibold">Based on Hick&apos;s Law</li>
                <li>
                  <Highlighted text="The time it takes to make a decision increases with the number and complexity of choices." />
                </li>
                <li>
                  The fewer options, the faster the choice and the less anxiety.
                </li>
              </ul>
              <ul className="space-y-2 ">
                <li className="font-semibold">
                  The Law of Conservation of Complexity
                </li>
                <li>
                  <Highlighted text="For any system there is a certain amount of complexity which cannot be reduced." />
                </li>
                <li>
                  Reducing the complexity of the steps and the language (UX
                  writing) that accompanies the flow.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-12 flex gap-12">
          <div className="flex max-w-[50%] flex-col justify-center space-y-2 pt-1 text-center text-sm">
            <h4 className="py-2 font-bold uppercase">Divide and rule</h4>
            <p className="max-w-[450px] text-sm">
              To alleviate the anxiety associated with providing data, I have{' '}
              <span className="font-semibold">
                divided the form into two blocks
              </span>
              , aiming to reduce cognitive load and simplify the process.
            </p>
          </div>
          <div>
            <img src="/images/projects/full/packing3.jpg" alt="package" />
          </div>
        </div>
        <div className="mb-12 flex gap-12">
          <div>
            <img src="/images/projects/full/packing4.jpg" alt="package" />
          </div>
          <div className="flex max-w-[50%] flex-col justify-center space-y-2 pt-1 text-center text-sm">
            <h4 className="py-2 font-bold uppercase">
              Gathering Relevant Information
            </h4>
            <p className="max-w-[450px]">
              I focused on collecting only the relevant information to avoid
              potential frictions and ensure that the user stays on track. The
              solution will be customized according to the needs of the
              potential client.
            </p>
          </div>
        </div>
        <div className="mb-12 flex gap-12">
          <div className="flex max-w-[50%] flex-col justify-center space-y-2 pt-1 text-center text-sm">
            <h4 className="py-2 font-bold uppercase">Success!</h4>
            <p className="max-w-[450px]">
              Overall, my approach is centered around minimizing obstacles and
              frictions in the information request process in the shipping
              company, through a proposal designed to reduce anxiety, keep the
              user informed, and gather only necessary information.
            </p>
          </div>
          <div>
            <img src="/images/projects/full/packing5.jpg" alt="package" />
          </div>
        </div>
      </div>
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
