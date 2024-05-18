import { createContext, ReactNode, useState } from 'react';
import { assertIsTheme } from '../utils/assertIsTheme';
import { THEMES } from '../const';
import { Theme } from '../types';

const LS_THEME_KEY = 'theme';

function setUpThemeInDOM(value: Theme) {
  document.querySelector('html')?.setAttribute('data-theme', value);

  window.localStorage.setItem(LS_THEME_KEY, value);

  return value;
}

function initTheme(value: string) {
  assertIsTheme(value);

  return setUpThemeInDOM(value);
}

export const ThemeContext = createContext<{
  theme: Theme | undefined;
  changeTheme: (value: Theme) => void;
}>({
  theme: undefined,
  changeTheme: () => null,
});

const DEFAULT_THEME = window.localStorage.getItem(LS_THEME_KEY) || THEMES[0];

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(() => initTheme(DEFAULT_THEME));

  function changeTheme(selectedTheme: Theme) {
    setTheme(setUpThemeInDOM(selectedTheme));
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
