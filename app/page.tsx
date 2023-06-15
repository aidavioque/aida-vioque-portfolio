/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Footer from 'app/components/footer';
export { metadata } from './metadata';

const Card = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image?: string;
  link?: string;
}) => (
  <div className="mb-10 flex h-[400px] w-full justify-between gap-10 rounded-lg p-8 shadow-main">
    <div className="flex flex-col justify-between py-8">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="font-sans text-lg leading-relaxed text-gray">
        {description}
      </p>
      <a
        className="mr-2 mb-2 rounded-3xl bg-primaryButton px-4 py-2 text-sm font-medium text-white hover:brightness-125 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:brightness-75 dark:focus:ring-blue-800"
        href={link}
        target="_blank"
      >
        see more
      </a>
    </div>
    <img src={image} className="h-[314px] w-[314px]" alt="" />
  </div>
);

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-40px)] justify-center pt-10 md:pt-36 lg:pt-1">
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <div className="flex-1">
            <h1 className="pb-8 font-sans text-4xl lg:text-[64px]">
              Aida Vioque
            </h1>
            <p className="pb-2 font-sans text-lg leading-relaxed">
              I am a Product Designer committed to integrating code and business
              needs to create innovative solutions centered around user
              experience.
            </p>
            <div className="flex">
              <a
                className="text-gray-300 mr-4 underline"
                href="mailto:aida.aranvio@gmail.com"
                target="_blank"
              >
                Email
              </a>
              <a
                className="text-gray-300 underline"
                href="https://www.linkedin.com/in/aida-aranvio/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <img
              src="/images/cohete.gif"
              className="mb-10 w-[450px] translate-y-16"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container relative pt-10 pb-48 md:pt-36 lg:pt-1">
        <h2 className="pb-16 text-5xl text-primary">Product design</h2>
        <div className="pl-16">
          <Card title="Titulo" description="Hi there" />
          <Card title="Titulo" description="Hi there" />
          <Card title="Titulo" description="Hi there" />
        </div>
      </section>
      <section className="container relative pt-10 pb-48 md:pt-36 lg:pt-1">
        <h2 className="pb-16 text-5xl text-primary">Design and Illustration</h2>
        <div className="pl-16">
          <Card title="Titulo" description="Hi there" />
          <Card title="Titulo" description="Hi there" />
          <Card title="Titulo" description="Hi there" />
        </div>
      </section>
      <Footer />
    </>
  );
}
