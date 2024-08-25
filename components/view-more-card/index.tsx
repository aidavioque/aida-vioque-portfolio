import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArrowRight from 'public/images/arrow-right.svg';

const ViewMoreCard = ({ link, image }: { link: string; image: string }) => {
  return (
    <div className="flex max-w-[506px] items-start justify-center gap-[19px]">
      <div className="flex items-start justify-center gap-2 rounded-[14.70px] border border-[#2a8288] bg-white p-7">
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-[58px]">
          <Image src={image} width={448} height={390} alt="" />
          <div className="flex flex-col items-start justify-center gap-10 px-4">
            <div className="flex flex-col items-start justify-start gap-[29.41px]">
              <div className="font-serif text-base font-semibold uppercase leading-tight text-black">
                Esto es un título
              </div>
              <div className="font-serif text-[42px] font-semibold leading-[46px] text-black">
                Esto es un título mega guay
              </div>
              <div className="text-xl font-normal leading-7 text-black">
                More important than following the same steps in the right order
                every time is the.
              </div>
            </div>
            <Link href={link || '/#'}>
              <Button
                variant="outline"
                className="group flex gap-2 font-serif uppercase"
              >
                View case study
                <ArrowRight className="text-gray-900 group-hover:text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMoreCard;
