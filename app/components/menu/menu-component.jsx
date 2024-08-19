'use client';
import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathName = usePathname();
  return (
    <ul className="flex items-center justify-end font-serif">
      <li
        className={cx('pr-10 uppercase leading-tight hover:scale-110', {
          'font-semibold ': pathName === '/',
        })}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={cx('pr-10 uppercase leading-tight hover:scale-110', {
          'font-semibold ': pathName === '/about',
        })}
      >
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default Menu;
