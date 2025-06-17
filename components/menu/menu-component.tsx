'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedUnderline from '@/components/animations/animated-underline';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { createPortal } from 'react-dom';

const Menu = () => {
  const pathName = usePathname();

  const [openedMenu, setOpenedMenu] = useState<boolean>(false);

  const MobileMenu = () => {
    const pathName = usePathname();
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);

    const renderMobileMenu = (
      <AnimatePresence>
        <motion.div
          key="mobile-menu"
          initial={{ height: 0 }}
          animate={{ height: '100vh' }}
          exit={{ height: 0 }}
          className="fixed inset-0 z-40 w-full overflow-hidden bg-white pt-16 lg:hidden"
        >
          <ul className="container flex flex-col gap-[33px] pl-6 pt-16 font-serif font-semibold uppercase leading-tight">
            <li
              className={cx('w-fit', {
                'font-bold ': pathName === '/',
              })}
            >
              <Link href="/" onClick={() => setOpenedMenu(false)}>
                <AnimatedUnderline>Home</AnimatedUnderline>
              </Link>
            </li>
            <li
              className={cx('w-fit', {
                'font-bold ': pathName === '/#projects',
              })}
            >
              <Link
                href="/#projects"
                scroll={false}
                onClick={() => setOpenedMenu(false)}
              >
                <AnimatedUnderline>Projects</AnimatedUnderline>
              </Link>
            </li>
            <li
              className={cx('w-fit', {
                'font-bold ': pathName === '/about',
              })}
            >
              <Link href="/about" onClick={() => setOpenedMenu(false)}>
                <AnimatedUnderline>About</AnimatedUnderline>
              </Link>
            </li>
            <li
              className={cx('w-fit', {
                'font-bold ': pathName === '/#contact',
              })}
            >
              <Link href="/#contact" onClick={() => setOpenedMenu(false)}>
                <AnimatedUnderline>Contact</AnimatedUnderline>
              </Link>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    );

    return createPortal(renderMobileMenu, document.body);
  };
  return (
    <>
      <Button
        variant="ghost"
        className="z-50 lg:hidden"
        onClick={() => setOpenedMenu(!openedMenu)}
      >
        {openedMenu ? (
          <Image
            src="/images/projects/close.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src="/images/projects/hamburguer.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        )}
      </Button>
      {openedMenu && <MobileMenu />}
      <ul className="hidden items-center justify-end gap-4 font-serif font-semibold uppercase leading-tight lg:flex lg:gap-[68px] lg:text-base">
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
            'font-bold ': pathName === '/#projects',
          })}
        >
          <Link href="/#projects" scroll={false}>
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
            'font-bold ': pathName === '/#contact',
          })}
        >
          <Button variant="primary" asChild>
            <Link href="/#contact" scroll={false}>
              Contact
            </Link>
          </Button>
        </li>
      </ul>
    </>
  );
};

export default Menu;
