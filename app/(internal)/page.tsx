/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Footer from '@/components/footer'; // Assuming Footer component is correctly imported
import HoverImages from '@/components/hover-images'; // Assuming Footer component is correctly imported
import Image from 'next/image'; // Import Next.js Image component
export { metadata } from './metadata';
import AnimateInView from '@/components/animations/animate-in-view';

// import AnimatedItems from '#/components/animated-items'; // No longer directly used
// import Card from '@/components/card'; // No longer directly used
import ProjectDisplayList from '#/components/project-display-list'; // Importing the new component
import HowIWorkDisplayList from '#/components/how-i-work-display-list'; // Importing the new component for How I Work section
export default function Home() {
  const howIWorkItems = [
    {
      number: '01.',
      title: 'I start from the problem, not the solution',
      description:
        "Before proposing something, I need to know what's at stake for people and the business.",
    },
    {
      number: '02.',
      title: 'I design from empathy',
      description:
        'I listen, observe, and analyze. I care about how people feel when using a product, but also what they need to move forward clearly and without friction.',
    },
    {
      number: '03.',
      title: 'I adapt to the challenge',
      description:
        'I adjust my approach based on the type of user, the team, the product phase, and the objectives. Sometimes I do more research, sometimes I prioritize moving quickly.',
    },
    {
      number: '04.',
      title: 'I prototype',
      description:
        "If something isn't clear, I visualize it. I create early versions, share them, get feedback, and iterate again.",
    },
    {
      number: '05.',
      title: 'I work as a team',
      description:
        'I feel comfortable sharing concerns, receiving feedback, and proposing changes. Design improves when we work together with trust.',
    },
    {
      number: '06.',
      title: 'I design to work, not just to look good',
      description:
        'I care about accessibility, clarity, and usefulness. I seek functional beauty',
    },
  ];

  const projectCards = [
    {
      title: 'Good networking increase conversion rates',
      tags: ['product design', 'design system'],
      description:
        'How to ran a design sprint to redesign the E-learning Experience and achieve higher retention rates.',
      link: '/projects/samoo',
      image: '/images/projects/samoo-1.png',
      textPosition: 'left',
    },
    {
      title: 'Boosting product awareness',
      tags: ['UI design', 'design system'],
      description:
        'How to effectively communicate product improvements to customers and attract new users.',
      link: '/projects/smart-protection',
      image: '/images/projects/smart-protection.jpg',
      textPosition: 'left',
    },
    {
      title: 'Poor UX research insights undermine designers',
      tags: ['product design', 'design system'],
      description:
        'How we overcame challenges and adjusted efforts to successfully complete the project despite initial research flaws.',
      link: '/projects/index',
      image: '/images/macbook.png',
      textPosition: 'left',
    },
    {
      title: 'Navigating the quest to find a partner in the digital age',
      tags: ['product design', 'design system'],
      description:
        'Full research and design process of a digital solution aimed at helping users find a partner.',
      link: '/#',
      buttonText: 'Coming soon',
      image: '/images/home-3.png',
      textPosition: 'left',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-brandBlack w-full">
      <div className="flex min-h-screen flex-col">
        <section className="relative bg-gradient-to-b from-white via-gray-100 to-gray-300">
          <div className="container flex w-full flex-col items-center justify-center py-10 px-6 sm:px-16 lg:px-[94px] h-[600px] lg:h-screen">
            <div className="z-10 flex w-full max-w-[1250px] flex-col items-start">
              <div className="mb-1 font-serif text-[20px] font-medium text-syneBlue animate-bounce duration-1000 ease-in-out">
                Hi, I’m Aida
              </div>
              <h1 className="mb-10 font-serif text-[38px] lg:text-[84px] font-semibold leading-[76px] text-gray-900 transform inview:animate-in duration-1000 ease-in-out slide-in-from-top-24 fade-in">
                <AnimateInView className="animate-in slide-in-from-top-24 duration-1000 ease-in-out fade-in">
                  Product Designer
                </AnimateInView>
              </h1>
              <div className="max-w-[740px]">
                <p className="mb-2 font-serif text-[32px] font-semibold leading-[41.6px] text-gray-800 inview:animate-in duration-1000 ease-in-out fade-in">
                  I care about{' '}
                  <span className="text-syneBlue">
                    {' '}
                    <HoverImages
                      className="inline"
                      images={[
                        'images/acc1.svg',
                        'images/acc2.svg',
                        'images/acc3.svg',
                      ]}
                    >
                      impact
                    </HoverImages>
                    ,{' '}
                    <HoverImages
                      spreadAngle={40}
                      className="inline"
                      images={['images/acc4.svg', 'images/acc5.svg']}
                    >
                      accessibility
                    </HoverImages>
                  </span>{' '}
                  and designing for a more sustainable world
                </p>
                <p className="font-inter text-[20px] leading-[28px] text-gray-600">
                  My secret spice is my background in social sciences and data
                  informed mindset
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full bg-[#1A202C] px-6 py-20 sm:px-16 lg:px-[94px]"
        >
          <div className="container max-w-[1360px] flex flex-row justify-between gap-8">
            <div className="hidden lg:block sticky top-40 right-0 h-[373px] min-w-[320px]">
              <h2 className="font-serif text-[64px] font-semibold leading-[58px] text-white inview:animate-in duration-1000 ease-in-out slide-in-from-left-24 fade-in">
                <AnimateInView className="animate-in inview:slide-in-from-top-24 duration-1000 ease-in-out inview:fade-in">
                  Projects
                </AnimateInView>
              </h2>
            </div>
            <div className="flex-1 flex flex-col items-end gap-y-[48px]">
              <ProjectDisplayList projectCards={projectCards} />
            </div>
          </div>
        </section>

        {/* How I Work Section */}
        <section className="w-full bg-white px-6 py-20 sm:px-16 lg:px-[94px]">
          <div className="mx-auto max-w-[1360px]">
            <h2 className="mb-8 text-left font-serif text-[64px] font-semibold leading-[58px] text-[#1A202C]">
              How I work
            </h2>
            <HowIWorkDisplayList howIWorkItems={howIWorkItems} />
          </div>
        </section>

        {/* Footer Section - Using existing Footer component, assuming it will be styled or props passed */}
        {/* The Figma design has a dark footer. The existing Footer component might need adjustments */}
        <Footer />
      </div>
    </div>
  );
}
