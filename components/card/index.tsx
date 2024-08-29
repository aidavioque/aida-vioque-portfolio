/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArrowRight from 'public/images/arrow-right.svg';
import { cn } from '@/lib/utils';

const Card = ({
  title,
  description,
  image,
  category,
  buttonText,
  link,
  textPosition = 'left',
  imageBgColor,
}: {
  title: string;
  category: string;
  buttonText: string;
  description: string;
  link: string;
  image: string;
  imageBgColor?: string;
  textPosition?: 'left' | 'right';
}) => {
  const text = (
    <div className="flex h-full flex-col justify-between pb-0 pt-4 lg:px-4 lg:py-9">
      <div className="mb-[38px] flex flex-col gap-[30px]">
        <p className="font-serif font-semibold uppercase leading-tight text-gray-600">
          {category}
        </p>
        <h3 className="pb-2 font-serif text-[42px] font-bold leading-[46px]">
          {title}
        </h3>
        <p className="font-sans text-xl leading-7 text-gray-700">
          {description}
        </p>
      </div>
      <Link href={link || '/#'}>
        <Button
          variant="outline"
          className="group flex gap-2 font-serif uppercase"
        >
          {buttonText}
          <ArrowRight className="text-gray-900 group-hover:text-white" />
        </Button>
      </Link>
    </div>
  );

  return (
    <div
      className={cn(
        'mb-10 flex h-full w-full flex-col items-center justify-between gap-6 rounded-[15px] border border-gray-300 p-7 lg:flex-row lg:items-start lg:gap-10',
        {
          'flex-col-reverse': textPosition === 'left',
          'flex-col': textPosition === 'right',
        },
      )}
    >
      {textPosition === 'left' && text}
      <div
        className={cn(
          'aspect-[584/508] flex-grow lg:w-[60%] lg:min-w-[700px]',
          imageBgColor,
        )}
      >
        <img
          src={image}
          className={cn('flex h-full w-full rounded-2xl object-cover', {
            'h-1/2 w-1/2 items-center justify-center object-none':
              !!imageBgColor,
          })}
          alt=""
        />
      </div>
      {textPosition === 'right' && text}
    </div>
  );
};

export default Card;
