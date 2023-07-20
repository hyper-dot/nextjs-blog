import React from 'react';
import styles from './page.module.css';
import Hero from '../../public/hero.png';
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products
        </h1>
        <p>
          Turning your ideas into Reality. We bring together the team from the
          global tech industry.
        </p>
        <button className={styles.btn}>See Our Work</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} />
      </div>
    </div>
  );
};

export default page;
