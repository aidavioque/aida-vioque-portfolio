import Link from 'next/link';
import Menu from '../menu';

const Header = () => (
  <div>
    <div className="absolute top-4 left-4 cursor-pointer">
      <Link href="/">
        <h1 className="font-sans pb-24 text-primary">Aida Aranguren</h1>
      </Link>
    </div>
    <div className="absolute top-4 right-4 font-sans text-primary">
      <Menu />
    </div>
  </div>
);

export default Header;
