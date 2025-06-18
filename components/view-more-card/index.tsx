import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArrowRight from 'public/images/arrow-right.svg';

const ViewMoreCard = ({
  link,
  image,
  category,
  title,
  text,
}: {
  link: string;
  image: string;
  category: string;
  title: string;
  text: string;
}) => {
  return (
    <Link
      href={link || '/#'}
      className="hover:scale-105 transition-all duration-500 ease-in-out"
    >
      <div className="flex h-full max-w-[512px] justify-center gap-[19px]">
        <div className="flex items-start justify-between gap-2 rounded-[14.70px] border border-[#2a8288] bg-white p-7 lg:min-h-[904px]">
          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-[58px]">
            <Image src={image} width={448} height={390} alt="" />
            <div className="flex min-h-[400px] flex-col justify-between gap-10 px-4">
              <div className="flex flex-col items-start justify-start gap-[29.41px]">
                <div className="font-serif text-base font-semibold uppercase leading-tight text-black">
                  {category}
                </div>
                <div className="font-serif text-4xl font-semibold text-black">
                  {title}
                </div>
                <div className="text-xl font-normal leading-7 text-black">
                  {text}
                </div>
              </div>
              <Button
                variant="outline"
                className="group flex gap-2 font-serif uppercase"
              >
                View case study
                <ArrowRight className="text-gray-900 group-hover:text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ViewMoreCard;
