/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArrowRight from 'public/images/arrow-right.svg';

const Card = ({
  title,
  description,
  image,
  category,
  buttonText,
  link,
  textPosition = 'left',
}: {
  title: string;
  category: string;
  buttonText: string;
  description: string;
  link: string;
  image: string;
  textPosition?: 'left' | 'right';
}) => {
  const text = (
    <div className="flex-0 flex min-h-0 flex-shrink flex-col pb-0 pt-4 lg:px-4  lg:py-9">
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
    <div className="mb-10 flex w-full flex-col items-center justify-between gap-6 rounded-[15px] border border-gray-300 p-7 lg:flex-row lg:items-start lg:gap-10">
      {textPosition === 'left' && text}
      <div className="flex-grow lg:h-[508px] lg:w-[584px] xl:min-w-[584px]">
        <img
          src={image}
          className="rounded-2xl object-cover lg:h-[508px] lg:w-[584px]"
          alt=""
        />
      </div>
      {textPosition === 'right' && text}
    </div>
  );
};

export default Card;
