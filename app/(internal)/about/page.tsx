/* eslint-disable @next/next/no-img-element */

import { ReactNode } from 'react';
import Image from 'next/image';
import Block from '@/components/block';

function About() {
  return (
    <div className="container grid py-24">
      <div className="grid-cols-12 space-y-12">
        <Block
          TitleTag="h2"
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
          src="/images/about-1.png"
          className="w-full"
          alt=""
          width={1231}
          height={396}
        />
        <Image
          src="/images/about-2.png"
          className="!mt-0 w-full"
          alt=""
          width={1231}
          height={396}
        />
        <Block
          TitleTag="h2"
          title="I am a generalist"
          text={
            <>
              I consider myself a multipotential or generalist. My experience is
              in fact diverse: encompassing work in the tech world, service
              sector, education, publishing, illustration, and design.
            </>
          }
        />
        <Block
          TitleTag="h2"
          title="Product trio + data"
          text={
            <div className="flex flex-col gap-8">
              <p>
                I am most effective when part of a dynamic team that values good
                communication and support.
              </p>
              <p>
                I believe that <span className="font-bold">Product Trio</span>{' '}
                is crucial to delivering products that meet the requirements of
                good design, usability, and business objectives. Also, the data
                team is the best add-on.
              </p>{' '}
            </div>
          }
        />
        <Block
          TitleTag="h2"
          title="Glasses I use to see the world"
          text={
            <>
              I am heavily{' '}
              <span className="font-bold">influenced by psychology</span> in
              everything I do, see, and read. I spend a lot of my free time
              trying to understand human behavior.
            </>
          }
        />
        <Block
          TitleTag="h2"
          title="What inspires me?"
          text={
            <div className="flex flex-col gap-8">
              <p>
                I am passionate about observing the{' '}
                <span className="font-bold">geometry present in nature</span>{' '}
                and the environment. I enjoy capturing the different moods of
                light with my camera.
              </p>
              <p>
                In my spare time, when gardening, I am drawn to the colors,
                shapes, and textures found in nature, which often inspire my
                work. To me,{' '}
                <span className="font-bold">understanding nature is</span>{' '}
                crucial for{' '}
                <span className="font-bold">understanding design.</span>
              </p>
            </div>
          }
        />
        <Block
          TitleTag="h2"
          title="Aiming for the future"
          text={
            <>
              I have led small teams and have thoroughly enjoyed it. In the
              future, I aspire to mentor others,{' '}
              <span className="font-bold">helping them grow</span> and gain
              confidence in their chosen paths.
            </>
          }
        />
      </div>
    </div>
  );
}

export default About;
