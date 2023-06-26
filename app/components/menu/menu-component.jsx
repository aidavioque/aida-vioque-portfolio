'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const scrollToBottom = () => {
    scrollTo(0, document.body.scrollHeight);
  };
  const page = usePathname();
  return (
    <ul className="container flex justify-center">
      <li className="pr-6 hover:scale-110">
        <Link href="/">Home</Link>
      </li>
      <li className="pr-6 hover:scale-110">
        <Link href="/about">About</Link>
      </li>
      <li className="pr-6 hover:scale-110">
        {page === '/about' ? (
          <Link href="/#contact" scroll={false}>
            Contact
          </Link>
        ) : (
          <button
            type="button"
            className="text-primary"
            onClick={scrollToBottom}
          >
            Contact
          </button>
        )}
      </li>
    </ul>
  );
};

export default Menu;
