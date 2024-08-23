'use client';
import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedUnderline from '@/components/animations/animated-underline';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const pathName = usePathname();
  return (
    <ul className="flex flex-wrap items-center justify-end gap-4 font-serif text-sm font-semibold uppercase leading-tight lg:gap-[68px] lg:text-base">
      <li
        className={cx('hidden lg:block', {
          'font-bold ': pathName === '/',
        })}
      >
        <Link href="/">
          <AnimatedUnderline>Home</AnimatedUnderline>
        </Link>
      </li>
      <li
        className={cx({
          'font-bold ': pathName === '/projects',
        })}
      >
        <Link href="/projects">
          <AnimatedUnderline>Projects</AnimatedUnderline>
        </Link>
      </li>
      <li
        className={cx({
          'font-bold ': pathName === '/about',
        })}
      >
        <Link href="/about">
          <AnimatedUnderline>About</AnimatedUnderline>
        </Link>
      </li>
      <li
        className={cx({
          'font-bold ': pathName === '/contact',
        })}
      >
        <Link href="/contact">
          <Button variant="primary">Contact</Button>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
