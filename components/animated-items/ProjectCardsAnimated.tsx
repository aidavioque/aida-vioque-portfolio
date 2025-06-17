'use client';

import AnimatedItems from './index';
import Card from '../card';
import React from 'react';

type ProjectCard = {
  title: string;
  tags: string[];
  description: string;
  link: string;
  image: string;
  textPosition: string;
};

type Props = {
  projectCards: ProjectCard[];
};

export default function ProjectCardsAnimated({ projectCards }: Props) {
  return (
    <AnimatedItems items={projectCards}>
      {(card: ProjectCard) => (
        <Card
          title={card.title}
          tags={card.tags}
          description={card.description}
          link={card.link}
          image={card.image}
          buttonText="View case study"
        />
      )}
    </AnimatedItems>
  );
}
