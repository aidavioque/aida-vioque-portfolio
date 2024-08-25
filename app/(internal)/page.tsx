/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Card from '@/components/card';

import Footer from '#/components/footer';
export { metadata } from './metadata';

export default function Home() {
  return (
    <>
      <section className="container relative my-10 grid grid-cols-12 flex-col">
        <div className="col-span-12 my-8">
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
      <section className="container relative pb-48" id="projects">
        <div className="grid grid-cols-12 gap-y-20">
          <div className="col-span-12">
            <Card
              title="From networking to signing contracts"
              category="Product design"
              description="How to ran a design sprint to redesign the E-learning Experience and achieve higher retention rates."
              buttonText="View case study"
              link="/projects/samoo"
              image="/images/home-1.png"
            />
          </div>
          <div className="col-span-12">
            <Card
              title="Boosting product awareness"
              textPosition="right"
              category="ui design"
              description="How to effectively communicate product improvements to customers and attract new users."
              buttonText="View case study"
              link="/projects/smart-protection"
              image="/images/home-2.png"
            />
          </div>
          {/* <div className="col-span-12">
            <Card
              title="Information request proposal"
              description="Informative flow in a shipping company to reduce anxiety, increase confidence, and achieve higher user activation."
              image="/images/projects/package.png"
            />
          </div>
          <div className="col-span-12">
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
          <div className="col-span-12">
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
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
