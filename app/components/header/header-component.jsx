import Menu from '../menu';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className="container mt-4 grid w-full justify-between bg-white">
    <div className="col-span-12 flex w-full justify-between pb-4">
      <Link href="/" className="shrink-0">
        <Image src="/logo.svg" alt="Aida Logo" height={54} width={87} />
      </Link>
      <Menu />
    </div>
  </header>
);

export default Header;
