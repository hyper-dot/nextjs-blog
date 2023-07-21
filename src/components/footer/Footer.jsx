import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    margin: '10px 0',
  };

  return (
    <footer style={styles}>
      <p>
        2023&copy;<Link href='/'> Roshan Paudel</Link>. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
