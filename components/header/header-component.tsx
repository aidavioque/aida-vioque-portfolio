import Menu from '../menu';
import Image from 'next/image';
import Link from 'next/link';

const FigmaLogo = ({ dark = true }: { dark?: boolean }) => {
  const logoSrc = dark ? '/images/logo-dark.svg' : '/images/logo-white.svg';
  return (
    <Image
      src={logoSrc}
      alt="Aida Vioque logo"
      width={112}
      height={40}
      priority
      className="w-[112px] h-auto"
    />
  );
};

const Header = () => (
  <header className="fixed top-0 z-50 h-24 w-full bg-white/90 backdrop-blur-md flex items-center justify-between">
    <div className="container col-span-12 flex w-full items-center justify-between py-8">
      <Link href="/" className="z-50 shrink-0">
        <FigmaLogo dark />
      </Link>
      <Menu />
    </div>
  </header>
);

export default Header;
