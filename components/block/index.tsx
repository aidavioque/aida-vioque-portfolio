import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Block = ({
  category,
  title,
  text,
  text2,
  className,
  TitleTag = 'div',
  video,
  videoHeight,
  videoWidth,
  videoClassName,
  image,
  imageHeight,
  imageWidth,
  imageClassName,
  textClassName,
  text1ClassName,
  titleClassName,
  layout = 'default',
  animate = false,
}: {
  category?: string;
  title?: string | ReactNode;
  text?: ReactNode;
  text2?: ReactNode;
  className?: string;
  TitleTag?: keyof JSX.IntrinsicElements;
  video?: string;
  videoHeight?: number;
  videoWidth?: number;
  videoClassName?: string;
  image?: string;
  imageHeight?: number;
  imageWidth?: number;
  imageClassName?: string;
  textClassName?: string;
  text1ClassName?: string;
  titleClassName?: string;
  layout?: 'default' | 'image-left';
  animate?: boolean;
}) => {
  const videoComponent = video && (
    <video
      autoPlay
      loop
      className={videoClassName}
      src={video}
      height={videoHeight}
      width={videoWidth}
      controls
    />
  );
  const imageComponent = image && (
    <Image
      className={imageClassName}
      src={image}
      height={imageHeight}
      width={imageWidth}
      alt={typeof title === 'string' ? title : ''}
    />
  );
  return (
    <div
      className={cn(
        'flex flex-wrap justify-between md:gap-8 xl:flex-row',
        className,
        {
          'flex-col-reverse gap-12': layout === 'image-left',
          'flex-col': layout === 'default',
        },
      )}
    >
      {layout === 'image-left' && imageComponent}
      {layout === 'image-left' && videoComponent}
      <div
        className={cn(
          'flex flex-col gap-8 text-black lg:max-w-[524px]',
          textClassName,
        )}
      >
        {category && (
          <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
            {category}
          </div>
        )}
        {title && (
          <TitleTag
            className={cn(
              'font-serif text-4xl font-semibold text-gray-900',
              {
                'animate-in slide-in-from-top-24 fade-in duration-1000':
                  animate,
              },
              titleClassName,
            )}
          >
            {title}
          </TitleTag>
        )}
        {text && (
          <div
            className={cn(
              'font-sans text-xl leading-7 text-gray-700',
              text1ClassName,
            )}
          >
            {text}
          </div>
        )}
      </div>
      {text2 && (
        <div className="text-x font-sans leading-7 text-gray-700">{text2}</div>
      )}
      {layout !== 'image-left' && imageComponent}
      {layout !== 'image-left' && videoComponent}
    </div>
  );
};

export default Block;
