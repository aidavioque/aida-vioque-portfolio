'use client';

import Logo from 'public/logo.svg';
import Mail from 'public/icons/mail.svg';
import Linkedin from 'public/icons/linkedin.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-center gap-[94px] bg-gray-800 px-6 pb-16 pt-6 text-white backdrop-blur-[50px] md:px-12 lg:px-[94px]">
      <div className="h-px self-stretch bg-gray-500" />
      <div className="flex h-[315px] flex-col items-start justify-center gap-[94px]">
        <div className="flex h-[167px] flex-col items-start justify-start gap-10">
          <div className="mb-6 flex h-[47px] flex-col items-start justify-start gap-6 lg:mb-0">
            <div className="font-serif text-[52.50px] font-semibold leading-[47.25px] text-white">
              Let’s connect
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <Link
              href="mailto:aida.aranvio@gmail.com"
              className="inline-flex items-center gap-2"
            >
              <div className="relative flex h-7 w-7 items-center justify-center rounded bg-primary-dark">
                <Mail className="text-white" />
              </div>
              <span className="font-serif font-semibold uppercase leading-tight underline">
                aida.aranvio@gmail.com
              </span>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/aida-aranvio/"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="text-white" />
              <span className="font-serif font-semibold uppercase leading-tight underline">
                linkedin.com/aida-aranvio
              </span>
            </Link>
          </div>
        </div>
        <div className="inline-flex justify-between self-stretch">
          <div className="flex h-[54px] shrink grow basis-0 items-center justify-between">
            <Logo className="text-white" />
            <div className="text-xl font-normal leading-7 text-white">
              2024. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
