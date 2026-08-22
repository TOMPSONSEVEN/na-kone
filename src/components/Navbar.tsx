import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { cn } from "../utils/cn";
import { Button, IconMenu, IconX, Logo, IconMoon, IconSun } from "./ui";
import { useTheme } from "../hooks/useTheme";

const LINKS = [
  { label: "Методика", href: "#method" },
  { label: "Занятия", href: "#classes" },
  { label: "Тренеры", href: "#trainers" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggle, mounted } = useTheme();

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 24)), [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled &&
            "mt-3 max-w-6xl rounded-2xl glass-strong shadow-2xl shadow-black/40 sm:mx-6 lg:mx-auto"
        )}
      >
        <Logo />

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Переключиться на ${theme === "dark" ? "светлую" : "тёмную"} тему`}
            className="theme-toggle grid h-10 w-10 place-items-center rounded-xl text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white glass"
            disabled={!mounted}
          >
            {mounted ? (
              theme === "dark" ? (
                <IconMoon className="h-5 w-5" />
              ) : (
                <IconSun className="h-5 w-5" />
              )
            ) : (
              <IconMoon className="h-5 w-5 opacity-50" />
            )}
          </button>

          <div className="hidden md:block">
            <Button href="#cta" size="md">
              Записаться на пробный урок
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="grid h-10 w-10 place-items-center rounded-xl text-white glass md:hidden"
          >
            {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Мобильное меню"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-2 rounded-2xl glass-strong p-3 shadow-2xl shadow-black/50 md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="block rounded-xl px-4 py-3 text-[15px] font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </motion.a>
            ))}
            <div className="p-2 pt-3">
              <Button href="#cta" className="w-full" size="lg">
                Записаться на пробный урок
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
