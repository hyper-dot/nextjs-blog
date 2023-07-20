import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        2023&copy;<Link href='/'> Roshan Paudel</Link>. All right reserved.
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
