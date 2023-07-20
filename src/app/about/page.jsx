import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          fill={true}
          src='https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className={styles.img}
        />
        <div className={styles.imagetxt}>
          <h1 className={styles.imageTitle}>Digital Storytellers</h1>
          <h2 className={styles.imageTitle}>
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.textTitle}>What Do We Do ? </h1>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.textTitle}>Who Are We</h1>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
