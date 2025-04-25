import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const defaultContext: ThemeContextType = {
  theme: 'amber',
  setTheme: () => {},
  isDarkMode: false,
  toggleDarkMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const THEMES = {
  amber: {
    primary: 'amber',
    secondary: 'yellow',
    text: 'amber-500',
    bg: 'amber-100',
    gradient: 'from-amber-400 to-yellow-500',
    hover: 'amber-600',
    border: 'amber-400',
  },
  emerald: {
    primary: 'emerald',
    secondary: 'teal',
    text: 'emerald-500',
    bg: 'emerald-100',
    gradient: 'from-emerald-400 to-teal-500',
    hover: 'emerald-600',
    border: 'emerald-400',
  },
  indigo: {
    primary: 'indigo',
    secondary: 'violet',
    text: 'indigo-500',
    bg: 'indigo-100',
    gradient: 'from-indigo-400 to-violet-500',
    hover: 'indigo-600',
    border: 'indigo-400',
  },
  rose: {
    primary: 'rose',
    secondary: 'pink',
    text: 'rose-500',
    bg: 'rose-100',
    gradient: 'from-rose-400 to-pink-500',
    hover: 'rose-600',
    border: 'rose-400',
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('amber');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && Object.keys(THEMES).includes(savedTheme)) {
      setTheme(savedTheme);
    }
    
    // Check for saved dark mode preference in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === 'true');
    } else {
      // Check user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply theme to root element
    const root = document.documentElement;
    
    // Remove all theme classes
    Object.keys(THEMES).forEach(themeName => {
      root.classList.remove(`theme-${themeName}`);
    });
    
    // Add current theme class
    root.classList.add(`theme-${theme}`);
    
    // Apply dark mode
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save preferences to localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [theme, isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    theme,
    setTheme,
    isDarkMode,
    toggleDarkMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);