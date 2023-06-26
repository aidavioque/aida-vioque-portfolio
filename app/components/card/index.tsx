/* eslint-disable @next/next/no-img-element */
import DialogComponent from 'app/components/dialog-component';
import { DialogTrigger } from '@/components/ui/dialog';

const Card = ({
  title,
  description,
  image,
  content,
}: {
  title: string;
  description: string;
  image?: string;
  content: React.ReactNode;
}) => (
  <div className="mb-10 flex w-full flex-col items-center justify-between gap-10 rounded-lg p-8 shadow-main lg:h-[400px] lg:flex-row lg:items-start">
    <div className="flex h-full flex-col items-start justify-between space-y-8 py-8">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="font-sans text-lg leading-relaxed text-gray">
        {description}
      </p>
      <DialogComponent
        content={content}
        button={
          <DialogTrigger asChild>
            <a
              className="mr-2 mb-2 cursor-pointer rounded-3xl bg-primaryButton px-4 py-2 text-sm font-medium text-white hover:brightness-125 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:brightness-75 dark:focus:ring-blue-800"
              target="_blank"
            >
              View case study
            </a>
          </DialogTrigger>
        }
      />
    </div>
    <img
      src={image}
      className="aspect-square h-[314px] w-[314px] min-w-[314px] object-cover"
      alt=""
    />
  </div>
);

export default Card;
