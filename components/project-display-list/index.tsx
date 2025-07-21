'use client';

import React from 'react';
import AnimatedItems from '#/components/animated-items';
import Card from '@/components/card';

type ProjectCardItem = {
  pretitle: string;
  title: string;
  tags?: string[];
  description: string;
  link: string;
  image: string;
  textPosition: string;
  disabled?: boolean;
  buttonText?: string;
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
            pretitle={card.pretitle}
            title={card.title}
            tags={card.tags}
            description={card.description}
            link={card.link}
            image={card.image}
            disabled={card.disabled}
            buttonText={card.buttonText || 'View case study'}
          />
        )) as any
      }
    </AnimatedItems>
  );
}
