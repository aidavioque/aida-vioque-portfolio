import Link from 'next/link';

const Menu = () => (
  <ul className="flex">
    <li className="pr-6 hover:scale-110">
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li className="pr-6 hover:scale-110">
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
    <li className="pr-6 hover:scale-110">
      <Link href="/#projects">
        <a>Projects</a>
      </Link>
    </li>
    <li className="pr-6 hover:scale-110">
      <Link href="/#contact">
        <a>Contact</a>
      </Link>
    </li>
  </ul>
);

export default Menu;
