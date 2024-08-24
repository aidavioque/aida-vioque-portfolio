/* eslint-disable @next/next/no-img-element */
'use client';
import cx from 'classnames';
import MiniFooter from '@/components/mini-footer';
import Arrow from '@/components/arrow';
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

const myRole = (
  <div className="my-12 flex items-start justify-evenly space-x-2">
    <div className="max-w-[250px] flex-1">
      <h3 className="text-sm font-bold uppercase leading-relaxed tracking-[3px] text-slate-700 text-opacity-50">
        My role
      </h3>
      <div className="text-lg font-medium uppercase leading-normal text-slate-700">
        Graphic and UI Designer
      </div>
    </div>
    <div className="max-w-[300px] flex-1">
      <h3 className="text-sm font-bold uppercase leading-relaxed tracking-[3px] text-slate-700 text-opacity-50">
        Teams
      </h3>
      <div className="text-lg font-medium uppercase leading-normal text-slate-700">
        Marketing and Product
      </div>
    </div>
    <div className="max-w-[300px] flex-1">
      <h3 className="text-sm font-bold uppercase leading-relaxed tracking-[3px] text-slate-700 text-opacity-50">
        when
      </h3>
      <div className="text-lg font-medium uppercase leading-normal text-slate-700">
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
  <div
    className={cx('container mb-[48px] max-w-[680px] px-4 lg:px-0 ', className)}
  >
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
          Work resulting from collaboration between Product and Marketing
          departments. focused on reaching new users, engaging with the
          community, providing quality information through publications, and
          enhancing communication between users and the Product department.
        </div>
      </Container>
      <Section title="Podcast: let’s keep it simple">
        <div>
          Our goal for the podcast launch was to educate a diverse audience on
          critical topics such as brand protection, product monitoring, and
          counterfeit prevention.
        </div>
        <img src="/images/projects/podcast.jpg" alt="Podcasts image" />
        <div>
          We aim to serve as an accessible and valuable source of information on
          these subjects by featuring experts in the field, allowing individuals
          to stay updated on intellectual property matters.
        </div>
        <img src="/images/projects/podcast-imgs.jpg" alt="Podcast images" />
      </Section>
      <Section title="Social Media Content">
        <div>
          The articles for the blog and LinkedIn aim to provide key information
          to facilitate understanding of complex topics and are accompanied by
          visuals that illustrate their essence.
        </div>
        <img
          src="/images/projects/social-media-content.jpg"
          alt="Podcast images"
        />
        <div>
          The aesthetic is friendly, with a contemporary language, soft edges,
          and using the brand colors and elements for communications.
        </div>
      </Section>
      <div className="mb-[106px] flex justify-center">
        <img
          className="rounded-[20px]"
          src="/images/projects/blog-post.jpg"
          alt="Blog post images"
        />
      </div>
      <Section title="Product newsletters">
        <div>
          A newsletter was launched to inform users about updates, new features,
          and how to use them.
        </div>
        <img src="/images/projects/product-1.jpg" alt="Product newsletter" />
        <div>
          The product newsletter is a versatile tool for maintaining, nurturing,
          and expanding the customer base.
        </div>
        <img src="/images/projects/product-2.jpg" alt="Product newsletter" />
        <div>
          It helps us stay connected, build trust, and provide ongoing value to
          our audience, ultimately contributing to the success and growth of
          your product or brand.
        </div>
        <img src="/images/projects/product-3.jpg" alt="Product newsletter" />
      </Section>
      <Section title="Instagram content strategy">
        <div>
          A strong content strategy enables effective communication of product
          benefits, meaningful audience engagement, and long-term relationship
          building. We started with a strong “call to adventure”...
        </div>
      </Section>
      <div className="mb-[106px] flex justify-center">
        <img
          src="/images/projects/uniqueness.jpg"
          alt="Instagram content uniqueness"
        />
      </div>
      <Container>
        <div className="flex flex-col space-y-8 text-xl leading-9 text-teal-950">
          <div>
            ... followed by a “meeting the mentor”, these educational posts
            demonstrate possible violations and explain their consequences. The
            importance of visual art is fundamental in illustrating differences.
          </div>
          <img src="/images/projects/instagram.jpg" alt="Instagram content" />
          <div>
            The designs are influenced by neo-brutalism and use corporate
            colours, simple slogans, and illustrations that do not make much
            noise.
          </div>
          <img
            className="px-20"
            src="/images/projects/brand-protection.jpg"
            alt="Instagram content brand protection"
          />
          <div>
            Some designs aim to emotionally connect with users by presenting
            relatable scenarios.
          </div>
        </div>
      </Container>
      <Container className="mb-0">
        <div className="flex flex-col space-y-8 text-xl leading-9 text-teal-950">
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
            Some educational posts are divided into easily digestible chunks,
            with a clear call to action at the end.
          </div>
        </div>
      </Container>
      <div className="mb-[106px] flex justify-center">
        <img
          src="/images/projects/red-flags.jpg"
          alt="Instagram content red flags"
        />
      </div>
      <Section title="Colour palette">
        <div>
          Blue is commonly associated with confidence and professionalism. For a
          company dedicated to the protection of brands and intellectual
          property, this colour evokes credibility and security. For text and
          interface elements, a darker shade of blue is utilized as it offers a
          striking contrast against the lime green and deep blue background.
          Unique and distinctive colour palette, with a tech and fresh,
          innovative look and feel.
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
