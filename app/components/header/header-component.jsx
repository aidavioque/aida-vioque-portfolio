import Link from 'next/link';
import Menu from '../menu';

const Header = () => (
  <div>
    <div className="absolute top-4 right-4 font-sans text-primary">
      <Menu />
    </div>
  </div>
);

export default Header;
