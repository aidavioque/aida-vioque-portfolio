'use client';

import Link from 'next/link';
import Image from 'next/image'; // Added for new SVG icons

// Re-using FigmaLogo component from Header, assuming it's made available globally or passed as prop
// For simplicity here, I'll redefine it. Ideally, it would be a shared component.
const FigmaLogo = ({ dark = true }: { dark?: boolean }) => {
  const queImage = dark ? '/images/logo-dark.svg' : '/images/logo-white.svg';

  return <Image src={queImage} alt="Aranguren logo" width={112} height={50} />;
};

const Footer = ({ theme = 'black' }: { theme?: 'white' | 'black' }) => {
  // Figma design uses a dark footer (bg-gray-800 equivalent) with light text
  const isDarkTheme = theme === 'black';
  const currentTextColor = isDarkTheme ? 'text-gray-50' : 'text-brandBlack'; // gray-50 is F6F8FB from Figma
  const iconContainerBg = isDarkTheme ? 'bg-syneBlue' : 'bg-syneBlue'; // syneBlue is #2A8288 from Figma
  // const iconFillColor = isDarkTheme ? 'fill-gray-800' : 'fill-white'; // For SVGs if they take fill
  const currentBgColor = isDarkTheme ? 'bg-gray-800' : 'bg-white';

  return (
    <footer
      id="contact"
      className={`flex w-full flex-col justify-center gap-y-16 ${currentBgColor} ${currentTextColor} px-6 py-16 md:px-12 lg:px-24`}
    >
      {/* Removed the top border line as it's not in Figma footer */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-16">
        <div className="flex flex-col items-start justify-start gap-10 self-stretch">
          <h2 className="font-serif text-6xl font-semibold leading-tight">
            Let’s connect
          </h2>
          <div className="flex flex-col items-start justify-start gap-6">
            <a
              href="mailto:aida.aranvio@gmail.com"
              className="group inline-flex items-center gap-2"
            >
              <div
                className={`relative flex h-7 w-7 items-center justify-center rounded ${iconContainerBg} p-1 transition-transform duration-300 group-hover:scale-110`}
              >
                {/* Using new SVG icon for mail */}
                <Image
                  src="/images/figma/icon_email_footer.svg"
                  alt="Email"
                  width={14}
                  height={10}
                />
              </div>
              <span className="font-serif text-base font-semibold uppercase leading-tight tracking-wider  hover:underline">
                aida.aranvio@gmail.com
              </span>
            </a>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/aida-aranvio/"
              className="group inline-flex items-center gap-2"
            >
              <div
                className={`relative flex h-7 w-7 items-center justify-center rounded ${iconContainerBg} p-1 transition-transform duration-300 group-hover:scale-110`}
              >
                {/* Using new SVG icon for LinkedIn */}
                <Image
                  src="/images/figma/icon_linkedin_footer.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                  className="h-full w-full"
                />
              </div>
              <span className="font-serif text-base font-semibold uppercase leading-tight tracking-wider hover:underline">
                linkedin.com/aida-aranvio
              </span>
            </Link>
          </div>
        </div>
        <div className="inline-flex w-full items-center justify-between self-stretch">
          <FigmaLogo dark={false} /> {/* Use light version of the logo */}
          <div className="font-sans text-xl font-normal leading-7 text-gray-50">
            2025. All rights reserved {/* Updated year */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
