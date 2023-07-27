'use client';
import React from 'react';
import styles from './darkModeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div onClick={toggle} className={styles.container}>
      <div className={styles.icon}>M</div>
      <div className={styles.icon}>S</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

export default DarkModeToggle;
