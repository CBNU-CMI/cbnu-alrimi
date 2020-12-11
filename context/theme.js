import React from 'react';
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  let mode;
  const time = new Date().getHours();
  if (time >= 7 && time <= 18) mode = 'light';
  else mode = 'dark';

  const [theme, setTheme] = useState(mode);
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
