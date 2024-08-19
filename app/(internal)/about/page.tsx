/* eslint-disable @next/next/no-img-element */

import Contact from '#/app/components/contact';

const aboutItems = [
  {
    image: '/images/web.png',
    alt: 'Web icon',
    title: 'Product Designer',
    text: 'As a designer on the Product team, I deliver solutions to expand product awareness. I also design communications for our clients and teams, assist with UX writing, research, redefine flows, and contribute to social media marketing.',
  },
  {
    image: '/images/teacher.png',
    alt: 'Teacher-book icon',
    title: 'Teaching Assistant at The Hero Camp',
    text: 'As a teaching assistant at The Hero Camp. I provided feedback and identified areas to help improve the overall learning experience.',
  },
  {
    image: '/images/text-book.png',
    alt: 'Text-book icon',
    title: 'Digital Content Editor',
    text: 'EdTech world: worked with Product & developers to bring innovative educational products. UX writing and Editing on products & LMS.',
  },
  {
    image: '/images/marketing.png',
    alt: 'Marketing icon',
    title: 'Marketing and Brand identity at Amarillo Restaurant',
    text: 'I supported and participated in a new culinary project with incredible potential and created a content strategy for it.',
  },
  {
    image: '/images/editor.png',
    alt: 'Editor icon',
    title: 'History Magazine of UAM',
    text: 'I became Editor as a reflection of my love for words and meaning. I was just a few steps ahead of discovering UX Writing.',
  },
  {
    image: '/images/brush.png',
    alt: 'Freelance Illustration and Design icon',
    title: 'Freelance Illustration and Design',
    text: 'I had some jobs and commissions, also personal projects which helped to discover organised and understand my style.',
  },
  {
    image: '/images/t-shirt.png',
    alt: 'Clothing design icon',
    title: 'Clothing design freelancing',
    text: 'I started a little service for people to make personalised gifts. It was a success and it escalated so we had to become more reachable.',
  },
  {
    image: '/images/jewelry.png',
    alt: 'Jewelry icon',
    title: 'Jewelry freelancing',
    text: 'My first attempt at product design was in jewellery. My main goal was to get a harmonic combination between aesthetics and wearability.',
  },
];

type AboutItemType = {
  image: string;
  alt: string;
  title: string;
  text: string;
};

const AboutItem = ({ image, alt, title, text }: AboutItemType) => (
  <div>
    <img src={image} alt={alt} className="mb-4 w-36" />
    <h3 className="text-[38px] leading-[57px] text-gray-900">{title}</h3>
    <p className="max-w-[700px] leading-[30px] text-teal-900">{text}</p>
  </div>
);

function About() {
  return (
    <div className="container py-24">
      <div className="max-w-[80%] text-xl leading-8">
        <div className="mb-10 mt-20 text-[52px] text-teal-950">About</div>
        <p className="mb-6 text-xl">
          Hi! I&rsquo;m <span className="font-bold">Aida</span>, a{' '}
          <span className="font-bold">Product Designer</span> (UX/UI), currently
          based in Spain.
        </p>
        <p className="mb-2">
          My career path has led me through diverse fields and roles, including{' '}
          <span className="font-bold">illustration</span>
          <span> and design, </span>
          <span className="font-bold">education</span>
          <span>, and </span>
          <span className="font-bold">editorial</span>
          <span>.</span>
        </p>
        <Contact />
      </div>
      <div className="mt-20 flex">
        <div className="flex-1 space-y-16">
          {aboutItems.map((item) => (
            <AboutItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
