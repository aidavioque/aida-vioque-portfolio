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
      src: '/images/projects/ilustracion/full/exposicion.jpg',
      thumbnail: '/images/projects/ilustracion/exposicion.jpg',
      alt: 'Exposición',
    },
    {
      src: '/images/projects/ilustracion/full/mutua.jpg',
      thumbnail: '/images/projects/ilustracion/mutua.jpg',
      alt: 'Mutua de Madrid Ilustration',
    },
    {
      src: '/images/projects/ilustracion/full/fish.jpg',
      thumbnail: '/images/projects/ilustracion/fish.jpg',
      alt: 'A fish called Wanda Illustration',
    },
  ],
  [
    {
      src: '/images/projects/ilustracion/full/ragtimes.jpg',
      thumbnail: '/images/projects/ilustracion/ragtimes.jpg',
      alt: 'Ragtime Illustration',
    },
    {
      src: '/images/projects/ilustracion/full/mapa.jpg',
      thumbnail: '/images/projects/ilustracion/mapa.jpg',
      alt: 'Mapa Illustration',
    },
    {
      src: '/images/projects/ilustracion/full/acuarela.jpg',
      thumbnail: '/images/projects/ilustracion/acuarela.jpg',
      alt: 'Acuarela Illustration',
    },
  ],
  [
    {
      src: '/images/projects/ilustracion/full/exploradora.jpg',
      thumbnail: '/images/projects/ilustracion/exploradora.jpg',
      alt: 'exploradora Illustration',
    },
    {
      src: '/images/projects/ilustracion/full/camaleon.jpg',
      thumbnail: '/images/projects/ilustracion/camaleon.jpg',
      alt: 'camaleon Illustration',
    },
    {
      src: '/images/projects/ilustracion/full/cafe.jpg',
      thumbnail: '/images/projects/ilustracion/cafe.jpg',
      alt: 'cafe Illustration',
    },
  ],
  [
    {
      src: '/images/projects/ilustracion/full/diva.jpg',
      thumbnail: '/images/projects/ilustracion/diva.jpg',
      alt: 'diva Illustration',
    },
    {
      src: '/images/projects/ilustracion/full/mira.jpg',
      thumbnail: '/images/projects/ilustracion/mira.jpg',
      alt: 'mira Illustration',
    },
    {
      src: '/images/projects/ilustracion/full/griegas.jpg',
      thumbnail: '/images/projects/ilustracion/griegas.jpg',
      alt: 'Nayades Illustration',
    },
  ],
  [
    {
      src: '/images/projects/ilustracion/full/sketches.webp',
      thumbnail: '/images/projects/ilustracion/sketches.jpg',
      alt: 'Sketches Illustration',
    },
    {
      src: '/images/projects/ilustracion/full/solemne.jpg',
      thumbnail: '/images/projects/ilustracion/solemne.jpg',
      alt: 'solemne Illustration',
    },
    {
      src: '/images/projects/ilustracion/full/angel.jpg',
      thumbnail: '/images/projects/ilustracion/angel.jpg',
      alt: 'angel Illustration',
    },
  ],
];

const ImageComponent = ({ src, alt, thumbnail }: Image) => (
  <DialogComponent
    content={
      <div>
        <DialogHeader className="items-center justify-start">
          <div className="relative flex items-center justify-center overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="block aspect-auto max-h-[70vh] w-auto"
            />
          </div>
          {/* <DialogDescription>
            <DialogTitle>{alt}</DialogTitle>
          </DialogDescription> */}
        </DialogHeader>
      </div>
    }
    button={
      <DialogTrigger asChild>
        <img
          src={thumbnail}
          alt={alt}
          className="cursor-pointer shadow-main transition ease-in-out hover:scale-110"
        />
      </DialogTrigger>
    }
  />
);

const Mosaic = () => (
  <div className="lg:pl-16">
    {imageGroups.map((imageGroup, i) => (
      <div
        key={`image-group-${i}`}
        className="mb-8 flex w-full flex-col items-center justify-between space-y-6 space-x-6 lg:h-80 lg:flex-row"
      >
        {imageGroup.map((image) => (
          <ImageComponent key={image.src} {...image} />
        ))}
      </div>
    ))}
  </div>
);

export default Mosaic;
