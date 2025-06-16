'use client';

import React from 'react';
import AnimatedItems from '#/components/animated-items';
import Card from '@/components/card';

type ProjectCardItem = {
  title: string;
  tags: string[];
  description: string;
  link: string;
  image: string;
  textPosition: string;
};

type ProjectDisplayListProps = {
  projectCards: ProjectCardItem[];
};

export default function ProjectDisplayList({
  projectCards,
}: ProjectDisplayListProps) {
  return (
    <AnimatedItems<ProjectCardItem> items={projectCards}>
      {
        ((card: ProjectCardItem) => (
          <Card
            title={card.title}
            tags={card.tags}
            description={card.description}
            link={card.link}
            image={card.image}
            buttonText="View case study"
          />
        )) as any
      }
    </AnimatedItems>
  );
}
