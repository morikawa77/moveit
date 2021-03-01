import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';

interface ThemeSelectorData {
  theme: string;
  toogleTheme: () => void;
}

interface ThemeSelectorProviderProps {
  children: ReactNode;
  theme: string;
  toogleTheme: () => void;
}

export const ThemeSelectorContext = createContext({} as ThemeSelectorData);

export function ThemeSelectorProvider({ children, ...rest }: ThemeSelectorProviderProps) {
  let themeFromOS = 'light';

  window.matchMedia 
  && window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? themeFromOS = 'dark' 
    : themeFromOS = 'light';

  const [theme, setTheme] = useState(rest.theme ?? themeFromOS);

  useEffect(() => {
    Cookies.set('theme', theme);
  },[theme]);

  function toogleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light'); 
  }

  return (
    <ThemeSelectorContext.Provider value={{
      theme,
      toogleTheme,
    }}>
      {children}
    </ThemeSelectorContext.Provider>
  ) 
}


