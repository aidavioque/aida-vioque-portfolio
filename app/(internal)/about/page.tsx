/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Block from '@/components/block';

function About() {
  return (
    <div className="container grid py-36">
      <div className="grid-cols-12 space-y-6">
        <Block
          TitleTag="h2"
          animate
          title="A few words about me"
          text={
            <>
              Hello, my name is Aida, I am a digital product designer with a
              broad professional background.
              <br /> I am <span className="font-bold">curious</span>.
            </>
          }
        />
        <Image
          src="/images/arrow-down.svg"
          alt="Continue reading"
          className="mb-8 animate-bounce"
          width={17}
          height={17}
        />
        <div className="flex flex-col items-center lg:flex-row gap-6 lg:items-end justify-end">
          <Image src="/images/about-a.png" alt="" width={296} height={394} />
          <Image src="/images/about-b.png" alt="" width={296} height={394} />
          <Image src="/images/about-c.png" alt="" width={296} height={394} />
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end justify-end lg:max-w-[70%] lg:ml-auto">
          <Image src="/images/about-d.png" alt="" width={591} height={394} />
          <Image src="/images/about-e.png" alt="" width={296} height={394} />
          <Image src="/images/about-f.png" alt="" width={296} height={394} />
        </div>
        <div className="space-y-8 lg:space-y-[600px] pt-2 lg:pt-[90px]">
          <Block
            TitleTag="h2"
            title="I am wide range"
            textClassName="flex-col lg:flex-row lg:min-w-full justify-between"
            titleClassName="text-3xl lg:text-4xl lg:min-w-[400px]"
            text1ClassName="text-lg lg:max-w-[550px]"
            animate
            text={
              <p>
                I firmly believe that having a wide range of knowledge and
                experience can lead to innovation and professional success.
              </p>
            }
          />
          <Block
            TitleTag="h2"
            title="Product trio + data"
            textClassName="flex-col lg:flex-row lg:min-w-full justify-between"
            titleClassName="text-3xl lg:text-4xl g:min-w-[400px]"
            text1ClassName="text-lg lg:max-w-[550px]"
            animate
            text={
              <p>
                I am most effective when part of a dynamic team that values good
                communication and support.
              </p>
            }
          />
          <Block
            TitleTag="h2"
            title="Human after all"
            textClassName="flex-col lg:flex-row lg:min-w-full justify-between"
            titleClassName="text-3xl lg:text-4xl lg:min-w-[400px]"
            text1ClassName="text-lg lg:max-w-[550px]"
            animate
            text={
              <>
                I am heavily{' '}
                <span className="font-bold">
                  influenced by psychology in everything
                </span>{' '}
                I do, see, and read. I spend a lot of my free time trying to
                understand human behavior.
              </>
            }
          />
          <Block
            TitleTag="h2"
            title="What inspires me?"
            textClassName="flex-col lg:flex-row lg:min-w-full justify-between"
            titleClassName="text-3xl lg:text-4xl lg:min-w-[400px]"
            text1ClassName="text-lg lg:max-w-[550px]"
            animate
            text={
              <p>
                I am drawn to the colors, shapes, and textures found in nature,
                which often inspire my work. To me,{' '}
                <span className="font-bold">understanding nature is </span>{' '}
                crucial for{' '}
                <span className="font-bold">understanding design.</span>
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
