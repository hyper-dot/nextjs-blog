'use client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  function toggle() {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }
  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};