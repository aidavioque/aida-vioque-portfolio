import Link from 'next/link';

const Menu = () => (
  <ul className="flex">
    <li className="pr-6 hover:scale-110">
      <Link href="/">Home</Link>
    </li>
    <li className="pr-6 hover:scale-110">
      <Link href="/about">About</Link>
    </li>
    <li className="pr-6 hover:scale-110">
      <Link href="/#contact">Contact</Link>
    </li>
  </ul>
);

export default Menu;
