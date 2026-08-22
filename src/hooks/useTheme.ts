import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "nakone-theme";

/**
 * Управляет светлой/тёмной темой.
 * Сохраняет выбор в localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const initial: Theme =
      saved === "light" || saved === "dark"
        ? saved
        : "dark";

    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  };

  return { theme, toggle, mounted };
}

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  html.classList.toggle("light", theme === "light");
  html.classList.toggle("dark", theme === "dark");
  html.style.colorScheme = theme;
}
