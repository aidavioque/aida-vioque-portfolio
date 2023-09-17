'use client';
import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <ul className="container flex justify-center">
      <li
        className={cx('pr-10 text-[26px] leading-loose hover:scale-110', {
          'font-semibold ': pathName === '/',
        })}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={cx('pr-10 text-[26px] leading-loose hover:scale-110', {
          'font-semibold ': pathName === '/about',
        })}
      >
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default Menu;
