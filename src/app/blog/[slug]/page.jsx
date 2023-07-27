import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import BlogImg from '../../../../public/developers.jpg';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Heading</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className={styles.author}>
            <Image
              src={BlogImg}
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Roshan Paudel</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={BlogImg} alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis. Lorem ipsum dolor sit amet,
          officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
          nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
          cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
          est aliquip amet voluptate voluptate dolor minim nulla est proident.
          Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt
          ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
          cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi
          laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
          commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint
          cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </p>
      </div>
    </div>
  );
};

export default page;
