'use client';

import Link from 'next/link';

const Menu = () => {
  return (
    <ul className="container flex justify-center">
      <li className="pr-6 hover:scale-110">
        <Link href="/">Home</Link>
      </li>
      <li className="pr-6 hover:scale-110">
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default Menu;
