import { createContext, useState, useEffect, ReactNode } from 'react';

export const ThemeContext = createContext({
  toggleTheme: () => {},
  mode: 'light',
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;

    if (mode === 'dark') {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};