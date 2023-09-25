/* eslint-disable @next/next/no-img-element */
'use client';
import cx from 'classnames';
import MiniFooter from 'app/components/mini-footer';
import Arrow from 'app/components/arrow';
import {
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';

const Section = ({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <Container>
    <div className="mb-4 text-[32px] font-semibold leading-[48px] text-teal-950">
      {title}
    </div>
    <div className="mb-8 text-2xl leading-[33px] text-trueGray-400">
      {description}
    </div>
    <div className="flex flex-col space-y-8 text-xl leading-9 text-teal-950">
      {children}
    </div>
  </Container>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[559px] text-2xl font-bold leading-[41px] text-sky-700">
    {children}
  </div>
);

const myRole = (
  <div className="my-12 flex items-start justify-evenly">
    <div className="max-w-[250px]">
      <div className="text-xl font-normal uppercase leading-[34.84px] text-slate-800">
        My role
      </div>
      <div className="text-lg font-medium leading-normal text-slate-700">
        Graphic and UI Designer
      </div>
    </div>
    <div className="max-w-[300px]">
      <div className="text-xl font-normal uppercase leading-[34.84px] text-slate-800">
        Category
      </div>
      <div className="text-lg font-medium leading-normal text-slate-700">
        SAAS
      </div>
    </div>
    <div className="max-w-[300px]">
      <div className="text-xl font-normal uppercase leading-[34.84px] text-slate-800">
        when
      </div>
      <div className="text-lg font-medium leading-normal text-slate-700">
        Nov, 2022 - May, 2023
      </div>
    </div>
  </div>
);

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cx('container mb-[48px] max-w-[680px] px-0', className)}>
    {children}
  </div>
);

const SmartProtectionCase = () => {
  return (
    <div className="h-screen overflow-auto md:h-full">
      <div className="mb-4 flex justify-center">
        <DialogHeader>
          <DialogTitle className="text-center text-[38px] font-normal leading-relaxed">
            Smart Protection
          </DialogTitle>
          <DialogDescription className="max-w-[600px] text-center text-xl font-normal  leading-[30px] text-slate-700 text-opacity-50">
            Scaling the company and creating product awareness
          </DialogDescription>
        </DialogHeader>
      </div>
      <img
        src="/images/projects/smart-protection-presentation.jpg"
        alt="project overview"
      />
      <div className="container mt-24">{myRole}</div>
      <Container>
        <div className="text-xl leading-9 text-teal-950">
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
      </Container>
      <Section title="Podcast: let’s keep it simple">
        <div>
          Our primary goal was to bring critical topics related to brand
          protection, product monitoring, and counterfeit prevention closer to a
          diverse audience. We aim to serve as an accessible and valuable source
          of information on these subjects by featuring experts in the field,
          allowing individuals to stay updated on intellectual property matters.
        </div>
        <img src="/images/projects/podcast.jpg" alt="Podcasts image" />
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
        <img src="/images/projects/podcast-imgs.jpg" alt="Podcast images" />
      </Section>
      <Section title="Social Media Content">
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
        <img
          src="/images/projects/social-media-content.jpg"
          alt="Podcast images"
        />
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
      </Section>
      <div className="mb-[106px] flex justify-center">
        <img
          className="h-[484px] w-[978px] rounded-[20px]"
          src="/images/projects/blog-post.jpg"
          alt="Blog post images"
        />
      </div>
      <Section title="Product newsletters">
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
        <img src="/images/projects/product-1.jpg" alt="Product newsletter" />
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
        <img src="/images/projects/product-2.jpg" alt="Product newsletter" />
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
        <img src="/images/projects/product-3.jpg" alt="Product newsletter" />
      </Section>
      <Section title="Instagram content strategy">
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
        <img src="/images/projects/instagram.jpg" alt="Instagram content" />
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
        <img
          className="px-20"
          src="/images/projects/brand-protection.jpg"
          alt="Instagram content brand protection"
        />
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
      </Section>
      <div className="mb-[106px] flex justify-center">
        <img
          src="/images/projects/uniqueness.jpg"
          alt="Instagram content uniqueness"
        />
      </div>
      <Container className="mb-0">
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
        <img
          className="mb-[64px]"
          src="/images/projects/brand-reputation.jpg"
          alt="Instagram content brand reputation"
        />
        <img
          className="mb-[48px]"
          src="/images/projects/lost-control.jpg"
          alt="Instagram content lost control"
        />
        <div>
          The goal is to design a simple, informative flow accompanied by a UX
          Writing proposal to achieve higher user activation by reducing anxiety
          and increasing confidence through a cleaner design.
        </div>
      </Container>
      <div className="mb-[106px] flex justify-center">
        <img
          src="/images/projects/red-flags.jpg"
          alt="Instagram content red flags"
        />
      </div>
      <Section
        title="Colour palette"
        description="To better understand why and to collect valuable insights to guide the redesign."
      >
        <div>
          Based on our knowledge of the colour theory, we developed a
          trustworthy and amicable colour palette. The 70% of the design is
          clean and white. Body text and different headings has a darker and
          more grayish variation of the interactive / accent colour.
        </div>
        <div className="text-xl font-medium leading-9 text-trueGray-400">
          Fluor blue: primary actions, brand identity
        </div>
        <img
          className="!mt-4"
          src="/images/projects/blues.jpg"
          alt="Palette blues"
        />
        <div className="!mt-4 ml-8 text-sm text-slate-700 text-opacity-50">
          #0122E0
        </div>
        <div className="text-xl font-medium leading-9 text-trueGray-400">
          Fluor green: secondary
        </div>
        <img
          className="!mt-4"
          src="/images/projects/greens.jpg"
          alt="Palette greens"
        />
        <div className="!mt-4 ml-8 text-sm text-slate-700 text-opacity-50">
          #C3EB3C
        </div>
        <div className="text-xl font-medium leading-9 text-trueGray-400">
          Dark blue
        </div>
        <img
          className="!mt-4"
          src="/images/projects/dark-blues.jpg"
          alt="Palette dark blues"
        />
        <div className="!mt-4 ml-8 text-sm text-slate-700 text-opacity-50">
          #000832
        </div>
      </Section>
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

export default SmartProtectionCase;
