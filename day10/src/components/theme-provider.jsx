import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the possible themes
const themes = ['dark', 'light', 'system'];

// Initial state for the context
const initialState = {
  theme: 'system',
  setTheme: () => null,
};

// Create the context
const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}) {
  // Initialize the theme state from localStorage or use the defaultTheme
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  // Effect to update the theme on the root element
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Define the context value
  const value = {
    theme,
    setTheme: (newTheme) => {
      if (themes.includes(newTheme)) {
        localStorage.setItem(storageKey, newTheme);
        setTheme(newTheme);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
