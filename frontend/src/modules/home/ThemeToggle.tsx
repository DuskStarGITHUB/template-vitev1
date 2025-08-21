/**
 * =====================================================
 *  NAME    : ThemeToggle.tsx
 *  DESCRIPTION: component buttons light/dark theme
 * =====================================================
 */

// DEPENDENCIES
import { Button } from "@/components/ui/button";
import React, { createContext, useContext, useEffect, useState } from "react";

// FUNCTIONS
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

// COMPONENT 1
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
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setThemeState(theme);
    },
  };
  return (
    <>
      <ThemeProviderContext.Provider value={value}>
        {children}
      </ThemeProviderContext.Provider>
    </>
  );
}

// EXPORT COMPONENT 1
export function useTheme() {
  return useContext(ThemeProviderContext);
}

// COMPONENT 2
export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="fixed top-2 right-2 flex space-x-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setTheme("light")}
          className="size-8"
        >
          ☀
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setTheme("dark")}
          className="size-8"
        >
          🌙
        </Button>
      </div>
    </>
  );
}
