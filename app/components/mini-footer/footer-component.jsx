/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';

const MiniFooter = () => (
  <div className="my-16 text-center">
    <img
      src="/images/cohete-sm.png"
      alt="cohete logo"
      className="mb-2 translate-x-5"
    />
    <p className="mb-1 text-xl font-semibold text-gray">Aida Vioque</p>
    <p className="mb-6 text-gray">Rocket up!</p>
    <div className="flex flex-col gap-4">
      <Button>
        <img src="/images/mail.png" alt=" mail logo" className="mr-1" />
        Let&apos;s talk
      </Button>
      <Button>
        <img src="/images/linkedin.png" alt=" linkedin logo" className="mr-1" />
        Let&apos;s connect
      </Button>
    </div>
  </div>
);

export default MiniFooter;
