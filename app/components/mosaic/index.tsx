/* eslint-disable @next/next/no-img-element */

'use client';

import DialogComponent from 'app/components/dialog-component';
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Image {
  src: string;
  thumbnail: string;
  alt: string;
}

const imageGroups: Image[][] = [
  [
    {
      src: '/images/projects/ilustracion/exposicion.jpg',
      thumbnail: '/images/projects/ilustracion/exposicion.jpg',
      alt: 'Exposición',
    },
    {
      src: '/images/projects/ilustracion/mutua.jpg',
      thumbnail: '/images/projects/ilustracion/mutua.jpg',
      alt: 'Mutua de Madrid Ilustration',
    },
    {
      src: '/images/projects/ilustracion/fish.jpg',
      thumbnail: '/images/projects/ilustracion/fish.jpg',
      alt: 'A fish called Wanda Illustration',
    },
  ],
  [
    {
      src: '/images/projects/ilustracion/ragtimes.jpg',
      thumbnail: '/images/projects/ilustracion/ragtimes.jpg',
      alt: 'Ragtime Illustration',
    },
    {
      src: '/images/projects/ilustracion/mapa.jpg',
      thumbnail: '/images/projects/ilustracion/mapa.jpg',
      alt: 'Mapa Illustration',
    },
    {
      src: '/images/projects/ilustracion/acuarela.jpg',
      thumbnail: '/images/projects/ilustracion/acuarela.jpg',
      alt: 'Acuarela Illustration',
    },
  ],
  [
    {
      src: '/images/projects/ilustracion/exploradora.jpg',
      thumbnail: '/images/projects/ilustracion/exploradora.jpg',
      alt: 'exploradora Illustration',
    },
    {
      src: '/images/projects/ilustracion/camaleon.jpg',
      thumbnail: '/images/projects/ilustracion/camaleon.jpg',
      alt: 'camaleon Illustration',
    },
    {
      src: '/images/projects/ilustracion/cafe.jpg',
      thumbnail: '/images/projects/ilustracion/cafe.jpg',
      alt: 'cafe Illustration',
    },
  ],
  [
    {
      src: '/images/projects/ilustracion/diva.jpg',
      thumbnail: '/images/projects/ilustracion/diva.jpg',
      alt: 'diva Illustration',
    },
    {
      src: '/images/projects/ilustracion/mira.jpg',
      thumbnail: '/images/projects/ilustracion/mira.jpg',
      alt: 'mira Illustration',
    },
    {
      src: '/images/projects/ilustracion/griegas.jpg',
      thumbnail: '/images/projects/ilustracion/griegas.jpg',
      alt: 'griegas Illustration',
    },
  ],
  [
    {
      src: '/images/projects/ilustracion/sketches.jpg',
      thumbnail: '/images/projects/ilustracion/sketches.jpg',
      alt: 'sketches Illustration',
    },
    {
      src: '/images/projects/ilustracion/solemne.jpg',
      thumbnail: '/images/projects/ilustracion/solemne.jpg',
      alt: 'solemne Illustration',
    },
    {
      src: '/images/projects/ilustracion/angel.jpg',
      thumbnail: '/images/projects/ilustracion/angel.jpg',
      alt: 'angel Illustration',
    },
  ],
];

const ImageComponent = ({ src, alt }: Image) => (
  <DialogComponent
    content={
      <div className="overflow-auto">
        <DialogHeader>
          <img src={src} alt={alt} className="" />
          <DialogDescription>
            <DialogTitle>{alt}</DialogTitle>
          </DialogDescription>
        </DialogHeader>
      </div>
    }
    button={
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className="cursor-pointer shadow-main transition ease-in-out hover:scale-110"
        />
      </DialogTrigger>
    }
  />
);

const Mosaic = () => (
  <div className="pl-16">
    {imageGroups.map((imageGroup, i) => (
      <div
        key={`image-group-${i}`}
        className="mb-8 flex h-80 w-full items-center justify-between"
      >
        {imageGroup.map((image) => (
          <ImageComponent key={image.src} {...image} />
        ))}
      </div>
    ))}
  </div>
);

export default Mosaic;
