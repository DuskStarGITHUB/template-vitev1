/**
 * =====================================================
 *  NAME    : ThemeToggle.tsx
 *  DESCRIPTION: light/dark theme provider & toggle
 * =====================================================
 */

// DEPENDENCIES
import React, { createContext, useContext, useEffect, useState } from "react";

// VARS
type Theme = "dark" | "light";
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// COMPONENT
export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);
  const value = { theme, setTheme: setThemeState };
  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
export function useTheme() {
  return useContext(ThemeProviderContext);
}
