'use client';
import { FC } from 'react';
import Link from 'next/link';

import styles from './header.module.css';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <nav>
        <ul className={styles.nav}>
          <li className={isActive('/homepage') ? styles.active : ''}>
            <Link href="/homepage">Home</Link>
          </li>
          <li className={isActive('/about') ? styles.active : ''}>
            <Link href="/about">About</Link>
          </li>
          <li className={isActive('/works') ? styles.active : ''}>
            <Link href="/works">Works</Link>
          </li>
          <li className={isActive('/contact') ? styles.active : ''}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Link href="/contact" className={styles.contactButton}>
        Download CV
      </Link>
    </header>
  );
};

export default Header;
