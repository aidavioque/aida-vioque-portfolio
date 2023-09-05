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
  <DialogComponent
    content={content}
    button={
      <DialogTrigger asChild>
        <div className="mb-10 flex h-full w-full max-w-[800px] cursor-pointer flex-col items-center justify-between gap-10 rounded-lg px-8 py-4 shadow-main transition-transform hover:scale-[102%] lg:flex-row lg:items-start">
          <div className="flex h-full min-h-0 flex-col items-start justify-between space-y-2 pt-4 pb-0 lg:min-h-[230px] lg:pb-6">
            <div>
              <h3 className="pb-2 text-3xl font-bold">{title}</h3>
              <p className="text-md font-sans leading-relaxed text-gray">
                {description}
              </p>
            </div>
          </div>
          <img
            src={image}
            className="my-auto aspect-square h-[214px] w-[214px] rounded-2xl object-cover pb-4 lg:pb-0"
            alt=""
          />
        </div>
      </DialogTrigger>
    }
  />
);

export default Card;
