import React from 'react';
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
