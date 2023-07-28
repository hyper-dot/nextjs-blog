import React from 'react';
import styles from './page.module.css';
import Spinner from '@/components/spinner/Spinner';

const loading = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
};

export default loading;
