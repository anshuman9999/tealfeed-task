import { useEffect, useState } from "react";

export const useThemeDetector = (): boolean => {
  const isBrowser = typeof window !== "undefined";

  const getCurrentTheme = () => {
    if (!isBrowser) return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    if (!isBrowser) return;

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, [isBrowser]);

  return isDarkTheme;
};
