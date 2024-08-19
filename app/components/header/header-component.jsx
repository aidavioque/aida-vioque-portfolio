import Menu from '../menu';
import Image from 'next/image';

const Header = () => (
  <header className="offset-x-0 offset-y-4 blur-12 container mt-4 flex w-full justify-between bg-white pb-4">
    <Image src="/logo.svg" alt="Aida Logo" height={54} width={87} />
    <Menu />
  </header>
);

export default Header;
