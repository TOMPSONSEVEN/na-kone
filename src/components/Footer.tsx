import { useState } from "react";
import { IconPhone, IconSend, Logo } from "./ui";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Школа",
    links: [
      { label: "Методика", href: "#method" },
      { label: "Занятия", href: "#classes" },
      { label: "Тренеры", href: "#trainers" },
      { label: "Отзывы", href: "#reviews" },
    ],
  },
  {
    title: "Родителям",
    links: [
      { label: "Тарифы", href: "#pricing" },
      { label: "Вопросы и ответы", href: "#faq" },
      { label: "Турнирный календарь", href: "#top" },
      { label: "Подарочный сертификат", href: "#top" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "Москва, Большая Никитская, 12", href: "#top" },
      { label: "+7 999 896 33 39", href: "tel:+79998963339" },
      { label: "Пн–Вс · 9:00–21:00", href: "#top" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Бренд + дайджест */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500">
              Шахматная школа «На коне» — очные и онлайн-занятия для детей от 4 лет и взрослых.
              Научим думать на ход вперёд: от первых ходов до разрядных норм.
            </p>

            <form
              className="mt-8 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
            >
              <label
                htmlFor="newsletter"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
              >
                Подпишитесь на шахматный дайджест · каждую пятницу
              </label>
              {sent ? (
                <p className="mt-3 rounded-2xl border border-gold-400/30 bg-gold-400/10 px-5 py-3.5 text-sm font-semibold text-gold-300">
                  Готово! Задача недели и разбор партии уже ждут в письме. ♞
                </p>
              ) : (
                <>
                  <div className="glass mt-3 flex items-center gap-2 rounded-full p-1.5 pl-5 transition-colors duration-300 focus-within:border-gold-400/40">
                    <input
                      id="newsletter"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ваш e-mail"
                      aria-label="Ваш e-mail для подписки на дайджест"
                      suppressHydrationWarning
                      className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Подписаться на дайджест"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-400 text-ink-950 transition-all duration-300 hover:scale-105 hover:bg-gold-300"
                    >
                      <IconSend className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-2 text-[12px] text-zinc-600">
                    Задача недели, разбор партии и новости школы · один раз в неделю · без спама
                  </p>
                </>
              )}
            </form>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="tel:+79998963339"
                className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-5 py-2.5 text-sm font-bold text-gold-300 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950"
              >
                <IconPhone className="h-4 w-4" />
                +7 999 896 33 39
              </a>
            </div>
          </div>

          {/* Колонки ссылок */}
          <nav
            aria-label="Навигация в подвале"
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-10"
          >
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-zinc-400 transition-colors duration-200 hover:text-gold-300"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-[12px] text-zinc-600 sm:flex-row">
          <p>© 2026 Шахматная школа «На коне». Все права защищены.</p>
          <p className="max-w-xl text-center sm:text-right">
            Шахматы — спорт ума: развивают логику, память и концентрацию с первого занятия.
          </p>
        </div>
      </div>
    </footer>
  );
}
