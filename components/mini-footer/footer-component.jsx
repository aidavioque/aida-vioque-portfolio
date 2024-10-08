/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const MiniFooter = () => (
  <div className="my-16 flex flex-col items-center justify-center text-center">
    <img src="/images/cohete-sm.png" alt="cohete logo" className="mb-2" />
    <p className="mb-1 text-xl font-semibold text-gray-900">Aida Vioque</p>
    <p className="mb-6 text-gray-900">Rocket up!</p>
    <div className="flex flex-col gap-4">
      <Button asChild>
        <a href="mailto:aida.aranvio@gmail.com">
          <img src="/images/mail.png" alt=" mail logo" className="mr-1" />
          Let&apos;s talk
        </a>
      </Button>
      <Button>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/aida-aranvio/"
          className="inline-flex"
        >
          <img
            src="/images/linkedin.png"
            alt="linkedin logo"
            className="mr-1"
          />
          Let&apos;s connect
        </Link>
      </Button>
    </div>
  </div>
);

export default MiniFooter;
