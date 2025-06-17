'use client';

import React from 'react';
import AnimatedItems from '#/components/animated-items';

type HowIWorkItem = {
  number: string;
  title: string;
  description: string;
};

type HowIWorkDisplayListProps = {
  howIWorkItems: HowIWorkItem[];
};

export default function HowIWorkDisplayList({
  howIWorkItems,
}: HowIWorkDisplayListProps) {
  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-[42px] md:grid-cols-3">
      <AnimatedItems<HowIWorkItem> items={howIWorkItems}>
        {
          ((item: HowIWorkItem) => (
            <div className="flex flex-col">
              <div className="mb-0">
                <span className="font-serif text-[16px] font-semibold uppercase text-[#718096]">
                  {item.number}
                </span>
                <h3 className="mt-0 font-serif text-[24px] font-semibold text-[#171923]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 font-inter text-[16px] text-[#2D3748]">
                {item.description}
              </p>
            </div>
          )) as any
        }
      </AnimatedItems>
    </div>
  );
}
