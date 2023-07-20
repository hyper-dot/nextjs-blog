'use client';
import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

function logout() {
  console.log('logout');
}

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <Link href='/' className={styles.logo}>
          Roshan Paudel
        </Link>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} href='/dashboard/login'>
          Login
        </Link>
        <Link className={styles.link} href='/dashboard/register'>
          Register
        </Link>
        <Link className={styles.link} href='/dashboard'>
          Dashboard
        </Link>
        <Link className={styles.link} href='/about'>
          About
        </Link>
        <Link className={styles.link} href='/portfolio'>
          Portfolio
        </Link>
        <Link className={styles.link} href='/blog'>
          Blogs
        </Link>
        <Link className={styles.link} href='/contact'>
          Contact
        </Link>
        <button className={styles.logout} onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
