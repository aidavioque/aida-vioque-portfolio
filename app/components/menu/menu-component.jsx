'use client';

import Link from 'next/link';

const Menu = () => {
  const scrollToBottom = () => scrollTo(0, document.body.scrollHeight);
  return (
    <ul className="container flex justify-center">
      <li className="pr-6 hover:scale-110">
        <Link href="/">Home</Link>
      </li>
      <li className="pr-6 hover:scale-110">
        <Link href="/about">About</Link>
      </li>
      <li className="pr-6 hover:scale-110">
        <button type="button" className="text-primary" onClick={scrollToBottom}>
          Contact
        </button>
      </li>
    </ul>
  );
};

export default Menu;
