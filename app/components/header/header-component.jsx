import Menu from '../menu';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className="container mt-4 flex w-full justify-between bg-white px-6 pb-4 lg:px-0">
    <Link href="/" className="shrink-0">
      <Image src="/logo.svg" alt="Aida Logo" height={54} width={87} />
    </Link>
    <Menu />
  </header>
);

export default Header;
