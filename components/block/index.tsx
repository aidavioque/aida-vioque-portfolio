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
  image,
  imageHeight,
  imageWidth,
  imageClassName,
  textClassName,
  layout = 'default',
}: {
  category?: string;
  title?: string | ReactNode;
  text?: ReactNode;
  text2?: ReactNode;
  className?: string;
  TitleTag?: keyof JSX.IntrinsicElements;
  image?: string;
  imageHeight?: number;
  imageWidth?: number;
  imageClassName?: string;
  textClassName?: string;
  layout?: 'default' | 'image-left';
}) => {
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
          <TitleTag className="font-serif text-4xl font-semibold text-gray-900">
            {title}
          </TitleTag>
        )}
        {text && (
          <div className="font-sans text-xl leading-7 text-gray-700">
            {text}
          </div>
        )}
      </div>
      {text2 && (
        <div className="text-x font-sans leading-7 text-gray-700">{text2}</div>
      )}
      {layout !== 'image-left' && imageComponent}
    </div>
  );
};

export default Block;
