import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href='/'>Roshan Paudel</Link>
      </div>
      <div>
        <Link href='/dashboard/login'>Login</Link>
        <Link href='/dashboard/register'>Register</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/about'>About</Link>
        <Link href='/portfolio'>Portfolio</Link>
        <Link href='/blog'>Blogs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
