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
  <div className="mb-10 flex h-full w-full flex-col items-center justify-between gap-10 rounded-lg px-8 shadow-main lg:flex-row lg:items-start">
    <div className="flex h-full min-h-[230px] flex-col items-start justify-between space-y-2 pt-4 pb-6">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-md font-sans leading-relaxed text-gray">
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
      className="my-auto aspect-square h-[214px] w-[214px] object-cover pb-4 lg:pb-0"
      alt=""
    />
  </div>
);

export default Card;
